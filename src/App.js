//Dependencies
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import LessonsList from "./Pages/LessonsList";
import Messages from "./Pages/Messages";
import Questions from "./Pages/Questions";
import MessageEdit from "Pages/MessageEdit";
import LogIn from "Pages/LogIn";
// import SignUp from "Pages/SignUp";
import LessonDetails from "./Pages/LessonDetails";
// import Crypto from "Pages/Crypto";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<LessonsList />} />
        <Route path="/categories/:id/:id" element={<LessonDetails />} />
        <Route path="/questions/:id" element={<Questions />} />
        <Route path="/comments" element={<Messages />} />
        <Route path="/comments/:id/edit" element={<MessageEdit />} />
        <Route path="/login" element={<LogIn />} />
        {/* <Route path="/signup" element={<SignUp />} /> */}
      </Routes>
    </div>
  );
}

export default App;
