import { useState } from "react";
import { useNavigate } from "react-router-dom";
import API_END_POINT from "../../../constant";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setUser } from "../../redux/userSlice";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector((store) => store.app.isLoading);

  const handleClick = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async () => {
    dispatch(setLoading(true));
    if (isLogin) {
      if (email && password) {
        try {
          let response = await fetch(`${API_END_POINT}/login`, {
            method: "POST",
            body: JSON.stringify({ email: email, password: password }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            let data = await response.json();
            toast.success("Logged in Successfully...");
            dispatch(setUser(data.userWithoutPassword));
            dispatch(setLoading(false));
            navigate("/home");
          } else {
            toast.error("Invalid username or password");
            dispatch(setLoading(false));
          }
        } catch (error) {
          toast.error("Server problem");
          dispatch(setLoading(false));
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        toast.error("Please enter email and password.");
        dispatch(setLoading(false));
        setError(true);
      }
    } else {
      dispatch(setLoading(true));
      if (email && password && fullName) {
        try {
          let response = await fetch(`${API_END_POINT}/register`, {
            method: "POST",
            body: JSON.stringify({
              name: fullName,
              email: email,
              password: password,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });

          if (response.ok) {
            let data = await response.json();
            toast.success("User registered successfully...");
            setIsLogin(true);
            dispatch(setLoading(false));
          } else {
            let errorData = await response.json();
            toast.error(
              errorData.message || "Something went wrong. Please try again."
            );
            dispatch(setLoading(false));
          }
        } catch (error) {
          toast.error("Server problem");
          dispatch(setLoading(false));
        } finally {
          dispatch(setLoading(false));
        }
      } else {
        toast.error("Please fill all data...");
        setError(true);
        dispatch(setLoading(false));
      }
    }
    setFullName("");
    setEmail("");
    setPassword("");
    setError(false);
  };

  return (
    <div>
      <img
        className="h-[45rem] w-full absolute"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/655a9668-b002-4262-8afb-cf71e45d1956/5ff265b6-3037-44b2-b071-e81750b21783/IN-en-20240715-POP_SIGNUP_TWO_WEEKS-perspective_WEB_c6d6616f-4478-4ac2-bdac-f54b444771dd_large.jpg"
        alt=""
      />

      <div className="flex items-center justify-center bg-black p-10 text-white">
        <div className="bg-black absolute z-10 mt-[90%] md:mt-[50%] outline-none p-[30px] w-[400px] rounded-md flex flex-col items-center justify-center gap-6 opacity-85">
          <p className="text-white text-3xl font-bold p-3">
            {isLogin ? "Login" : "Signup"}
          </p>

          {error && (
            <p className="text-red-600 text-md font-semibold">
              Fill all Input Fields
            </p>
          )}

          {!isLogin && (
            <input
              type="text"
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="p-3 w-[300px] border-none rounded-sm text-black text-md font-semibold"
              placeholder="Full Name"
            />
          )}
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 w-[300px] border-none rounded-sm text-black text-md font-semibold"
            placeholder="Email"
          />
          <input
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 w-[300px] border-none rounded-sm text-black text-md font-semibold"
            placeholder="Password"
          />

          <p className=" w-[299px] font-semibold text-md">
            {!isLogin ? "Already Have an Account?" : "New to Netflix?"}
            <span
              className="text-blue-500 text-[1.2rem] hover:cursor-pointer"
              onClick={handleClick}
            >
              {!isLogin ? "Login" : "Signup"}
            </span>
          </p>

          <button
            type="submit"
            className="border border-none bg-red-800 p-3 rounded-sm w-[100px] text-[1.1rem] font-semibold"
            onClick={handleSubmit}
          >
            {isLoading ? (
              <BeatLoader size={10} />
            ) : isLogin ? (
              "Signup"
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
