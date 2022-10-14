import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import ContactUs from "./Components/ContactUs";
import BookMyShow from "./Components/Bookmyshow";
import Events from "./Components/Events";
import ShowList from "./Components/ShowList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/bookmyshow" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/showlist" element={<ShowList />} />
          <Route path="/bookmyshows" element={<BookMyShow />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
