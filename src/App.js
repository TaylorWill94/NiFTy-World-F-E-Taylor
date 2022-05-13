//Dependencies
import { Routes, Route } from 'react-router-dom'
//Components

//Pages
// import Home from ""
import Categories from '../Pages/Categories';


function App() {
  return <div className="App">
    <Routes>
      <Route exact path="/"  element={<Home />}/>
      <Route path="" element={<Categories />}/>
    </Routes>
  </div>;
}

export default App;
