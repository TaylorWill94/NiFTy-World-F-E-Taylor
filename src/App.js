//Dependencies
import { Routes, Route } from 'react-router-dom'
//Components

//Pages
import Home from "./Pages/Home"
import Categories from './Pages/Categories';
import NFT from "./Pages/NFT"


function App() {
  return <div className="App">
    <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route path="/categories" element={<Categories />}/>
      <Route path="/NFT" element={<NFT />}/>
    </Routes>
  </div>;
}

export default App;
