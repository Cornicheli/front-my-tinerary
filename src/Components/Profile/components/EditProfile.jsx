import { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../../../api/url"
import { useEffect } from "react";
import { useRef } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { InputProfile } from "../../InputProfile";

export default function EditProfile() {
    let token = useSelector((store) => store.loginReducer.token);
    const navigate = useNavigate();
    const [user, setUser] = useState([]);
    const name = useRef(null);
    const lastName = useRef(null);
    const photo = useRef(null);
    const age = useRef(null);
    const email = useRef(null);

    useEffect(() => {
        return async function fetchdata() {
            await axios
                .get(
                    `${BASE_URL}/api/auth/me/${token.id}`
                )
                .then((res) => {
                    let userdata = res.data.response;
                    setUser(userdata);
                })
        }
    }, []);

    async function saveData(e) {
        e.preventDefault();
        const saveData = {
            name: name.current.value,
            lastName: lastName.current.value,
            photo: photo.current.value,
            age: age.current.value,
            email: email.current.value,
        };
        try {
            let res = await axios.patch(
                `${BASE_URL}/api/auth/me/${token.id}`,
                saveData
            );
            if (res.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "The user has been updated succesfully!",
                    willClose: () => {
                        navigate("/Profile");
                    },
                });
            } else {
                Swal.fire({
                    icon: "error",
                    title: "We found an error...",
                    text: `Errors: ${res.data.message.join(", ")}`,
                });
            }
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: "Fatal error...",
                text: err.message,
            });
        }
    }

    return (
        <>
            <div className="header-columns-edit">
                <div className="col-2-header2">
                    <h2 className="text-xl no-underline h-6 text-white text-center">Your Profile Edit</h2>
                </div>
            </div>
            <div className="userData-cols">
                <form id="myform" className="col-2-userData-1-2">
                    <InputProfile
                        title={'Name :'}
                        value={user.name}
                        type={'text'}
                        ref={name}
                    />
                    <InputProfile
                        title={'LastName :'}
                        value={user.lastName}
                        type={'text'}
                        ref={lastName}
                    />
                    <InputProfile
                        title={'Photo :'}
                        value={user.photo}
                        type={'text'}
                        ref={photo}
                    />
                    <InputProfile
                        title={'Age :'}
                        value={user.age}
                        type={'text'}
                        ref={age}
                    />
                    <InputProfile
                        title={'Email :'}
                        value={user.email}
                        type={'text'}
                        ref={email}
                    />
                    <button
                        className=" w-64 py-2 px-4 bg-black focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        form="myform"
                        onClick={(e) =>
                            Swal.fire({
                                title: "Do you want to save the changes?",
                                showDenyButton: true,
                                confirmButtonText: "YES, SAVE IT.",
                                confirmButtonColor: "green",
                                denyButtonText: `CANCEL`,
                                denyButtonColor: "grey",
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    Swal.fire(saveData(e));
                                } else if (result.isDenied) {
                                    Swal.fire("Changes not saved.");
                                }
                            })
                        }
                        type="button"
                    >
                        Submit Changes
                    </button>
                </form>
            </div>
        </>
    );
}