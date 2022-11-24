import React from "react";
import NotFound from "./Pages/NotFound";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Pages/SignIn"
import NewHotel from "./Pages/NewHotel";
import Hotels from "./Components/Hotel/Hotels";
import MainComplete from './Components/layouts/MainComplete'
import SignUp from './Pages/SignUp'
import HomeComplete  from './Components/layouts/HomeComplete'
import DetailsHotel from "./Components/detailsHotel/DetailsHotel";
import MyHotels from "./Components/hotelByUser/MyHotels";
import MyShows from "./Pages/myShows"

function App() {
  return (
    <BrowserRouter>
    <MainComplete>
        <Routes>
          <Route path='/' element = {<HomeComplete/>}/>
          <Route path='/signup' element = {<SignUp/>}/>
          <Route path="/signin" element={<SignIn/>}/>
          <Route path="/hotels" element = {<Hotels/>}/>
          <Route path='/detailsHotel/:idh' element={<DetailsHotel/>}/>
          <Route path="/new-hotel" element={<NewHotel />}/>
          <Route path="/myhotels" element={<MyHotels/>} />
          <Route path="/myshows" element={<MyShows/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
        </MainComplete>
      </BrowserRouter>
  );
}

export default App;