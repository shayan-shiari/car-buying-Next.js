import { useState } from "react";
import login from "@/public/images/login.gif";
import Image from "next/image";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [showPass, setShowPass] = useState(true);
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const showHandler = () => {
    setShowPass((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center bg-[#0f2453] h-screen">
      <div className="rounded-[50px] shadow-[0px_8px_24px_rgba(149,157,165,0.5)] pb-10 max-[768px]:px-5">
        <div className="flex justify-center">
          <Image
            src={login}
            alt="login"
            className="w-[450px] h-[300px] object-cover max-[768px]:w-[200px]"
          />
        </div>
        <form className="flex justify-center items-center flex-col gap-y-7">
          <span className="text-4xl font-bold text-cyan-600">Login</span>
          <fieldset>
            <input
              className="rounded-[50px] bg-[#e0e0e0] shadow-[2px_2px_9px_#9d9d9d,-2px_-2px_9px_#fff] border border-gray-300 text-gray-900 text-lg block w-80 max-[768px]:w-64 py-2.5 px-2 placeholder:text-lg focus:outline-none"
              type="text"
              placeholder="Username"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </fieldset>
          <fieldset className="flex items-center rounded-[50px] bg-[#e0e0e0] shadow-[2px_2px_9px_#9d9d9d,-2px_-2px_9px_#fff] border border-gray-300 w-80 max-[768px]:w-64 px-2">
            <input
              className="bg-transparent text-gray-900 text-lg block w-full py-2.5 placeholder:text-lg focus:outline-none"
              type={showPass ? "password" : "text"}
              placeholder="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
            <div onClick={showHandler} className="cursor-pointer">
              {showPass ? (
                <AiFillEye color="blue" size={20} />
              ) : (
                <AiFillEyeInvisible color="blue" size={20} />
              )}
            </div>
          </fieldset>
          <button className="text-white shadow-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-lg w-56 py-2.5 focus:outline-none">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
