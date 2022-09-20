import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Routes, Route } from "react-router-dom";
import PhoneShop from "./page/Cart/PhoneShop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PhoneShop />} />
    </Routes>
  );
}

export default App;
