import React, {useEffect} from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn";
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Components/Hotel/Hotels";
import MainComplete from "./Components/layouts/MainComplete";
import SignUp from "./Pages/SignUp";
import HomeComplete from "./Components/layouts/HomeComplete";
import DetailsHotel from "./Components/detailsHotel/DetailsHotel";
import MyHotels from "./Components/hotelByUser/MyHotels";
import MyShows from "./Pages/myShows";
import ProtectedRoute from "./Components/protectedRoute/ProtectedRoute";
import NewShow from "./Components/newShows/NewShows";
import ViewProfile1 from "./Components/Profile/ViewProfile1";
import ViewProfile2 from "./Components/Profile/ViewProfile2";
import { useDispatch, useSelector} from "react-redux";
import loginActions from "./redux/actions/loginAction";


function App() {
  let userData = useSelector((state) => state.loginReducer);
  console.log(userData.token, '<===')
  let role = userData.token
  console.log(role)
  let logged = userData.token.logged
  console.log(logged)
  let dispatch = useDispatch()
  let {getTokens} = loginActions
  let admin = role === "admin"
  useEffect(()=>{
    if(localStorage.getItem('token') ){
      const token = localStorage.getItem('token')
      dispatch(getTokens(token))
    }
  },[logged])
  return (
    <BrowserRouter>
      <MainComplete>
        <Routes>
          <Route path="/" element={<HomeComplete />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/detailsHotel/:idh" element={<DetailsHotel />} />
          <Route path='/newshow' element={<NewShow/>}/>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="*" element={<NotFound />} />

          <Route element={<ProtectedRoute isAllowed={!admin} reDirect='/'/>}>
            <Route path="/new-hotel" element={<NewHotel />} />
          </Route>

          {/* <Route
            element={
              <ProtectedRoute isAllowed={!!logged} reDirect={"/signin"} />}> */}
            <Route path="/myhotels" element={<MyHotels />} />
            <Route path="/myshows" element={<MyShows />} />
            <Route path="/profile" element={<ViewProfile1/>}/>
            <Route path="/profile/edit" element={<ViewProfile2/>}/>
          {/* </Route> */}

        </Routes>
      </MainComplete>
    </BrowserRouter>
  );
}

export default App;
