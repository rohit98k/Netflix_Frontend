import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/userSlice";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import API_END_POINT from "../../../constant";
import { getToggle } from "../../redux/moviesSlice";

const Hedder = () => {
  const user = useSelector((store) => store.app.user);
  const dispatch = useDispatch();
  const nevigate = useNavigate();

  const handleLogout = async () => {
    let response = await fetch(`${API_END_POINT}/logout`);
    if (response.ok) {
      toast.success("Logged Out SucessFully...");
      dispatch(removeUser());
      nevigate("/");
    } else {
      toast.error("Server Problem...");
    }
  };

  const handleToggle = () => {
    if (toggle) {
      dispatch(getToggle());
      nevigate("/home");
    } else {
      dispatch(getToggle());
      nevigate("/search");
    }
  };

  const toggle = useSelector((store) => store.movie.toggle);

  return (
    <>
      <div className="w-screen flex absolute z-10 justify-between p-7 bg-gradient-to-b from-black">
        <div>
          <img
            className="w-[9.2rem] h-[2.5rem] hover:cursor-pointer"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Netflix_2014_logo.svg/450px-Netflix_2014_logo.svg.png?20140810085105"
            alt="netflix-logo"
          />
        </div>

        <div className="flex gap-[20px] items-center">
          {user && (
            <>
              <div className="flex items-center gap-2">
                <FaUserAlt size={"22px"} className="text-white" />
                <p className="font-semibold text-white">
                  {user.name.toUpperCase()}
                </p>
              </div>
              <div className="flex gap-[10px]">
                <button
                  className="bg-red-700 text-white font-bold p-2 rounded-sm"
                  onClick={handleLogout}
                >
                  Logout
                </button>
                <button
                  className="bg-red-700 text-white font-bold p-2 rounded-sm"
                  onClick={handleToggle}
                >
                  {toggle ? "Home" : "Search Movie"}
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Hedder;
