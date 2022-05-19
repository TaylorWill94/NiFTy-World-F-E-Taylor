//Dependencies
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";

//Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import NFT from "./Pages/NFT";
import Messages from "./Pages/Messages";
<<<<<<< HEAD
import MessageEdit from "./Pages/MessageEdit";
=======
import Quiz from "./Pages/Quiz";

>>>>>>> 62f4072eca58f267be5f18abfd5cc51c04fba2cf

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/NFT" element={<NFT />} />
<<<<<<< HEAD
        <Route path="/comments" element={<Messages />} />
        <Route path="/comments/:id/edit" element={<MessageEdit />} />
=======
        <Route path="/messages" element={<Messages />} />
        <Route path="/quiz" element={<Quiz />} />
>>>>>>> 62f4072eca58f267be5f18abfd5cc51c04fba2cf
      </Routes>
    </div>
  );
}

export default App;
