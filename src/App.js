import React from "react";
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
import { useSelector } from "react-redux";

function App() {
  let userData = useSelector((state) => state.loginReducer);

  let { logged } = userData.token;

  return (
    <BrowserRouter>
      <MainComplete>
        <Routes>
          <Route path="/" element={<HomeComplete />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/hotels" element={<Hotels />} />
          <Route path="/detailsHotel/:idh" element={<DetailsHotel />} />
          <Route path="/new-hotel" element={<NewHotel />} />
          <Route path="*" element={<NotFound />} />

          <Route
            element={
              <ProtectedRoute isAllowed={!!logged} reDirect={"/signin"} />
            }
          >
            <Route path="/myhotels" element={<MyHotels />} />
            <Route path="/myshows" element={<MyShows />} />
          </Route>
        </Routes>
      </MainComplete>
    </BrowserRouter>
  );
}

export default App;
