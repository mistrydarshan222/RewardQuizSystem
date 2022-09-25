import Firstquestion from "./pages/Firstquestion/Index";
import Home from "./pages/Home/Index";
import Category from "./pages/Category/Index";
import Joinnow from "./pages/Joinnow/Index";
import Questions from "./pages/Questions/Index";
import Result from "./pages/Result/Index";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile/Index";
import Signup from "./pages/Signup/Signup";
import Singlecategory from "./pages/Singglecategory/Index"



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<Firstquestion />} />
          <Route path="/home" element={<Home />} />
          <Route path="/category" element={<Category />} />  
          <Route path="/quizzes/:name" element={<Singlecategory />} /> 
          <Route path="/play/:name" element={<Joinnow />} />
          <Route path="/quiz/:name" element={<Questions />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Signup />} />
      </Routes>
    </BrowserRouter>

    </div>
  );
}



export default App;
