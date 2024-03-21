import { useRef, useState } from "react";
import Header from "./Header";
import { checkNameData, checkValidData } from "../Utils/checkValidData";

const Login = () => {
  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(
    {
      emailErr: "",
      passwordErr: "",
      nameErr: ""
    });

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignIn = (e) => {
    e.preventDefault();
    checkValidData(email.current.value, password.current.value, setErrorMessage);
  };

  const handleSignUp = (e) => {
    e.preventDefault();
   checkValidData(email.current.value, password.current.value, setErrorMessage) && checkNameData(name.current.value, setErrorMessage);
  };

  return (
    <div className="h-[100vh]">
      <div className="bg-BG-Image-Netflix bg-cover bg-center h-[100vh] overflow-scroll">
        <Header />
        <form className="bg-black w-[350px] my-7 mx-auto right-0 left-0 text-white p-12  bg-opacity-80">
          <h1 className="font-bold text-3xl mb-4">
            {signIn ? "Sign In" : "Sign Up"}
          </h1>
          {!signIn && (
            <input
              type="text"
              placeholder="Full Name"
              className="p-2 my-2 w-[100%] cursor-pointer  bg-black opacity-70 outline-slate-100"
              ref={name}
            />
          )}
          <input
            type="text"
            placeholder="Email or Phone number"
            className="p-2 my-2 w-[100%] cursor-pointer  bg-black opacity-70 outline-slate-100"
            ref={email}
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 my-2 w-[100%] cursor-pointer  bg-black opacity-70 outline-slate-100"
            ref={password}
          />
          {signIn ? (
            <button onClick={(e) => handleSignIn(e)} className="p-2 my-2 w-[100%] bg-red-700 curs rounded-lg">
              Sign In
            </button>
          ) : (
            <button onClick={(e) => handleSignUp(e)} className="p-2 my-2 w-[100%] bg-red-700 curs rounded-lg">
              Sign Up
            </button>
          )}
          <p className="text-red-600 font-sans font-bold">{errorMessage && (errorMessage.emailErr || errorMessage.passwordErr || errorMessage.nameErr)} </p>
          <h3 className="text-center my-2 hover:underline">
            Forgot Password ?
          </h3>

          <div className="mt-14">
            <span className="mr-2">New to Netflix?</span>
            <span
              onClick={() => setSignIn(!signIn)}
              className="hover:underline cursor-pointer"
            >
              {signIn ? "Sign Up Now" : "Sign In Now"}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
