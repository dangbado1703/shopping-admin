import "antd/dist/reset.css";
import { ToastContainer, toast } from "react-toastify";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import router from "./router/router";

function App() {
  return (
    <div className="App">
      <ToastContainer position={toast.POSITION.TOP_RIGHT} autoClose={3000} />
      <Routes>
        {router.map((item) => (
          <Route key={item.path} path={item.path} element={<item.element />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
