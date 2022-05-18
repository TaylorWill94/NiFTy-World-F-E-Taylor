//Dependencies
import { Routes, Route } from "react-router-dom";
//Components

//Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import NFT from "./Pages/NFT";
import Messages from "./Pages/Messages";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/NFT" element={<NFT />} />
        <Route path="/messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
