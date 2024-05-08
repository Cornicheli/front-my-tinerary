import { useState, useEffect, React } from "react";
import { useDispatch, useSelector } from "react-redux";
import hotelActions from "../../redux/actions/hotelActions";
import "../../Styles/HotelCard.css";
import { CardHotel } from "../card/CardHotel";
import { ModalDetailsCard } from "../modal/ModalDetailCard";

export default function Hotels() {
  const hotelList = useSelector((store) => store.hotelsReducers.listsHotels);
  console.log(hotelList)
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("asc");
  const [showModal, setShowModal] = useState(false);
  const [selectedHotelId, setSelectedHotelId] = useState(null);
  const [hotelTitle, setHotelTitle] = useState(null);
  const [hotelImage, setHotelImage] = useState(null);

  useEffect(() => {
    dispatch(hotelActions.getHotels());
  }, []);

  useEffect(() => {
    let filter = {
      name: search,
      order: order,
    };
    dispatch(hotelActions.getHotelsFilters(filter));
  }, [search, order]);

  const handleOpenModal = (hotelId, hotelTitle, hotelImage, hotelCapacity) => {
    setSelectedHotelId(hotelId);
    setHotelTitle(hotelTitle);
    setHotelImage(hotelImage);
    setShowModal(true);
  };
  console.log(handleOpenModal)

  const handleCloseModal = () => {
    setShowModal(false);
    setHotelTitle(null);
    setHotelImage(null);
    setSelectedHotelId(null);
  };

  const getRandomImage = (arr) => {
    const length = arr.length;
    const randomIndex = Math.floor(length * Math.random());
    return arr[randomIndex];
  }

  return (
    <>
      <div className="flex flex-row items-center justify-center">
        <babel className="text-lg text-black font-semibold">Sort by</babel>
        <select
          className="underline underline-offset-2"
          type="select"
          onChange={(e) => {
            let orderer = e.target.value;
            setOrder(orderer);
          }}
        >
          <option className="m-0.5 p-0.5" value="asc"> Ascendent </option>
          <option className="m-0.5 p-0.5" value="desc"> Descendent </option>
        </select>

        <div className="flex flex-row m-2">
          <label className="text-lg text-black font-semibold">Search by name</label>
          <input
            className="w-52 h-8 rounded-xl bg-black text-center text-lg font-semibold uppercase text-white shadow-md shadow-blue-500/20 transition-all"
            onChange={(e) => {
              let search = e.target.value;
              setSearch(search);
            }}
            type="search"
          />
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 place-content-center py-4">
        {
          hotelList.map((e) => (
            <CardHotel
              keyCard={e._id}
              img={getRandomImage(e.photo)}
              imgAlt={"image de hotel"}
              keyImg={e.keyImg}
              keyTitle={e.id}
              title={e.name}
              onClick={() => handleOpenModal(e._id, e.name, getRandomImage(e.photo))}
            />
          ))
        }
        {showModal && selectedHotelId && (
          <ModalDetailsCard
            hotelId={selectedHotelId}
            hotelTitle={hotelTitle}
            hotelImage={hotelImage}
            handleCloseModal={handleCloseModal}
            selectedHotel
          />
        )}
      </div>
    </>
  );
}
