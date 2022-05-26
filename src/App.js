//Dependencies
import "./App.css";
import { Routes, Route } from "react-router-dom";

//Components
import NavBar from "./Components/NavBar";
import NFT from "./Pages/NFT";

//Pages
import Home from "./Pages/Home";
import Categories from "./Pages/Categories";
import LessonsList from "./Pages/LessonsList";
// import Lessons from "./Pages/Lessons";
// import Messages from "./Pages/Messages";
import Questions from "./Pages/Questions";
// import TryAgain from "./Pages/TryAgain";
// import Correct from "./Pages/Correct";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<LessonsList/>} />
        <Route path="/categories/:id/lessons/:id" element={<NFT />} />
        
        {/* <Route path="/categories/:id/lessons" element={<Lessons />} />   */}
        {/* <Route path="/categories/:id/lessons/:id" element={<LessonsDetails />} /> */}
        <Route path="/questions" element={<Questions />} />
        {/* <Route path="/categories/:id/lessons/:id/questions/:id" element={<QuestionsDetails />} /> */}
        {/* <Route path="/comments" element={<Comments />} /> */}
        {/* <Route path="/comments/:id" element={<CommentsDetails />} /> */}
        {/* <Route path="/comments/:id/new" element={<CommentsNewForm />} /> */}
        {/* <Route path="/comments/:id/edit" element={<CommentsEditForm />} /> */}
        {/* <Route path="*" element={<FourOhFour />} /> */}

        {/* <Route path="/messages" element={<Messages />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/tryagain" element={<TryAgain />} />
        <Route path="/correct" element={<Correct />} /> */}
      </Routes>
    </div>
  );
}

export default App;
