import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Bravo from "./Pages/Bravo/Bravo";
import Hug1 from "./Pages/Hug/Hug";
import Hug2 from "./Pages/Hug2/Hug2";
import Sorry from "./Pages/Sorry/Sorry";
import Asfor from "./Pages/Asfor/Asfor";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <div className="container mt-4 text-center">
          <h1 className="header">معلشني من فضلك</h1>
          <Link className="ad-link" to="/">
            ارجع للرئيسيه
          </Link>
          <Routes>
            <Route path="/asfor" element={<Asfor />} />
            <Route path="/hug" element={<Hug1 />} />
            <Route path="/hug2" element={<Hug2 />} />
            <Route path="/bravo" element={<Bravo />} />
            <Route path="/sorry" element={<Sorry />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <div className="Footer">
            <h5>Made By : Ahmed Barakat</h5>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
