import { Route, Routes, useNavigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import MainContainer from "./component/MainContainer";
import Login from "./component/LOGIN/Login";
import Hadder from "././component/Hedder/Hedder";
import SearchBox from "./component/SearchBox";

function App() {
  const user = useSelector((store) => store.app.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, []);

  return (
    <div className="bg-black">
      <Hadder />
      <Routes>
        <Route path="/" element={!user && <Login />} />
        <Route path="/home" element={<MainContainer />} />
        <Route path="/search" element={<SearchBox />} />
      </Routes>
      <Toaster
        toastOptions={{
          style: {
            marginTop: "3rem",
          },
        }}
      />
    </div>
  );
}

export default App;
