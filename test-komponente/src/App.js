import {BrowserRouter, Route, Routes} from "react-router-dom";
import './App.css';
import Avatar from "../src/components/Avatar/index";
import ImageView from "./components/ImageView";
import Filter from "./components/Filter"
import Star from "./components/Star";
import "./components/_index.scss"


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/image" element={<ImageView/>} />
                <Route path="/avatar" element={<Avatar/>} />
                <Route path="/filter" element={<Filter/>} />
                <Route path="/star" element={<Star/>} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
