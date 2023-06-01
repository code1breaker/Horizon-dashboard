import React, { useState } from "react";
import { Link } from "react-router-dom";
import formValidate from "../../constants/formValidate";

const Signin = () => {
  const [inputValues, setInputValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setInputValues({ ...inputValues, [e.target.name]: e.target.value });
    e.target.name === "email" && setError({ ...error, email: "" });
    e.target.name === "password" && setError({ ...error, password: "" });
  };

  const handleBlur = (e) => {
    formValidate(e, inputValues, error, setError);
  };

  return (
    <div className="flex dark:bg-[#131c41]">
      <div className="flex w-1/2 lg:w-full h-screen justify-center py-8">
        <div className="w-[50%] xl:w-[90%] lg:w-1/2 md:w-[90%] flex flex-col gap-5 bg-blue-20">
          <Link to="/main-dashboard">
            <p className="text-gray-400 text-sm cursor-pointer">
              Back to Simmmple
            </p>
          </Link>

          <div className="mt-14">
            <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
              Sign In
            </h2>
            <p className="text-gray-400 text-md">
              Enter your email and password to sign in!
            </p>
          </div>

          <button className="rounded-xl mt-4 py-3 w-full bg-slate-100 dark:bg-[#202645] dark:text-white dark:hover:bg-[#293054] hover:bg-slate-200">
            Sign in with Google
          </button>

          <div className="flex items-center justify-center gap-4">
            <div className="h-[1px] w-1/2 bg-gray-200 dark:bg-[#32385d]"></div>
            <p className="flex text-gray-400">or</p>
            <div className="h-[1px] w-1/2 bg-gray-200 dark:bg-[#32385d]"></div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="dark:text-white">Email</label>
            <input
              className={`py-2 px-4 border-2 outline-none rounded-xl  dark:bg-[#131c41] dark:border-[#32385d] placeholder-gray-400 text-black dark:text-white ${
                error.email && "border-red-300"
              }`}
              placeholder="mail@simmmple.com"
              type="text"
              name="email"
              value={inputValues.email}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {error.email && (
              <p className="text-red-500 text-sm">{error.email}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label className="dark:text-white">Password</label>
            <input
              className={`py-2 px-4 border-2 outline-none rounded-xl dark:bg-[#131c41] dark:border-[#32385d] placeholder-gray-400 text-black dark:text-white ${
                error.password && "border-red-300"
              }`}
              placeholder="minimum 8 characters"
              type="text"
              name="password"
              value={inputValues.password}
              onBlur={(e) => handleBlur(e)}
              onChange={(e) => handleChange(e)}
            />
            {error.password && (
              <p className="text-red-500 text-sm">{error.password}</p>
            )}
          </div>

          <button className="bg-[#3e2bf1] dark:bg-[#7053f6] dark:hover:bg-[#785bf6] hover:bg-[#3928d5] outline-none mt-4 py-3 rounded-xl text-white">
            Sign In
          </button>
          <p className="dark:text-gray-400">
            Not registered yet?{" "}
            <Link to="/sign-up">
              <span className="text-[#3e2bf1] dark:text-white font-semibold cursor-pointer">
                Create an Account
              </span>
            </Link>
          </p>
        </div>
      </div>

      <div className="w-1/2 h-screen lg:hidden">
        <div className="h-full rounded-bl-[12rem] bg-cover bg-no-repeat bg-[url('https://horizon-ui.com/chakra-pro/static/media/auth.20d5979b439e1531640d.png')]"></div>
      </div>
    </div>
  );
};

export default Signin;
