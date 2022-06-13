import logo from "./logo.svg";
import "./App.css";
import { React, createContext } from "react";
import Dashboard from "./components/Dashboard/Dashboard";
import About from "./components/About/About";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navbar/Navbar";
import Login from "./components/Login/Login";
import SearchRoom from "./components/SearchRoom/SearchRoom";
import SubComponentsPickers from "./components/SearchRoom/SearchRoom";
import ContactUs from "./components/ContactUs/ContactUs";
import LoginScreen from "./components/screen/LoginScreen";
import Galery from "./components/Galery/Galery";
import SignUpScreen from "./components/screen/SignUpScreen";
import RoomForm from "./components/RoomForm/RoomForm";
import RoomDataRender from "./components/RoomForm/RoomDataRender";
import BookedRoomData from "./components/SearchRoom/BookedRoomData";

export const CreateContext = createContext();

function App() {
  return (
    <div>
      <Routes>
        <Route path="signUp" element={<SignUpScreen />} />
        <Route path="/bookedRoomData">
          <Route index element={<BookedRoomData />} />
          <Route path="new" element={<SearchRoom />} />
          <Route path="new/:id" element={<SearchRoom />} />
        </Route>
        <Route path="roomDataRender" element={<RoomDataRender />} />
        <Route path="contactUs" element={<ContactUs />} />
        <Route path="roomForm" element={<RoomForm />} />
        <Route path="/" element={<LoginScreen />} />
        <Route path="bookRoom" element={<SearchRoom />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="home" element={<Dashboard />} />
          <Route path="about" element={<About />} />
          <Route path="galery" element={<Galery />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
