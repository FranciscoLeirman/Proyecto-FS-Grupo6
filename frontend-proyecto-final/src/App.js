import { BrowserRouter, Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Register from "./pages/Register";
import styles from './App.module.scss';
import QS from './pages/QuienesSomos';
import Contactanos from "./pages/Contactanos";


const App = () => {
  return (
    <BrowserRouter>
      <div className={styles.container}>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/quienessomos" element={<QS />} />
          <Route path="/contactanos" element={<Contactanos />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
