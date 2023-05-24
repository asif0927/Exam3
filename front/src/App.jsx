import { Route, Routes } from "react-router-dom";
/*import Navbar from "./components/Navbar/";*/
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Add from "./pages/Add";

function App() {

  return (
    <>
    {/*<Navbar/>*/}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
      </Routes>
  {/*<Footer/>*/}
    </>
  )
}

export default App
