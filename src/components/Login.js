import { useRef, useState } from "react";
import Header from "./Header";
import { checkNameData, checkValidData } from "../Utils/checkValidData";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { addUser } from "../Utils/userSlice";
import { useDispatch } from "react-redux";
import { ThreeDots } from "react-loader-spinner";

const Login = () => {
  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  //Validation Logic
  const handleSignIn = (e) => {
    console.log("yes signin");
    setLoading(true);
    e.preventDefault();
    const { validationObj } = checkValidData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(validationObj);

    // console.log(validationObj)
    // console.log(errorMessage);

    //signIn Logic with using firebase
    if (
      validationObj.emailErr.message === "" &&
      validationObj.passwordErr.message === ""
    ) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage((prev) => ({
            ...prev,
            firebaseErr: "Inavlid email or password",
          }));
          console.log("chandu", errorMessage + errorCode);
        });
    } else {
      setLoading(false);
    }
  };

  const handleSignUp = (e) => {
    setLoading(true);
    e.preventDefault();

    const { validationObj } = checkValidData(
      email.current.value,
      password.current.value
    );
    const { validationName } = checkNameData(name.current.value);
    setErrorMessage({ ...errorMessage, ...validationObj, ...validationName });

    //signUp Logic with using firebase

    // console.log(errorMessage);

    if (
      validationObj.emailErr.message === "" &&
      validationObj.passwordErr.message === "" &&
      validationName.nameErr.message === ""
    ) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          setLoading(false);
          setErrorMessage((prev) => ({ ...prev, firebaseErr: null }));
          updateProfile(user, {
            displayName: name.current.value,
          })
            .then(() => {
              // Profile updated!
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL })
              );
              setLoading(false);
            })
            .catch((error) => {
              // An error occurred
              setLoading(false);
            });
        })
        .catch((error) => {
          setLoading(false);
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage((prev) => ({
            ...prev,
            firebaseErr: "Email is already in use",
          }));
          console.log(errorMessage + errorCode);
        });
    }
  };

  const loader = () => {
    return (
      <ThreeDots
        visible={true}
        height="30"
        width="30"
        color="black"
        radius="9"
        ariaLabel="three-dots-loading"
        wrapperStyle={{ display: "flex", justifyContent: "center" }}
        wrapperClass=""
      />
    );
  };

  return (
    <div className="h-[100vh]">
      {/*Here background image BG-Image-Netflix used in tailwindConfig.js*/}
      <div className="bg-BG-Image-Netflix bg-cover bg-center h-[100vh] overflow-scroll">
        <Header />
        <div className="flex justify-center items-center h-[100vh]">
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
            <button
              onClick={(e) => handleSignIn(e)}
              className="p-2 my-2 w-[100%] bg-red-700 cursor-pointer rounded-lg"
            >
              {loading ? loader() : "Sign In"}
            </button>
          ) : (
            <button
              onClick={(e) => handleSignUp(e)}
              className="p-2 my-2 w-[100%] bg-red-700 curs rounded-lg"
            >
              {loading ? loader() : "Sign Up"}
            </button>
          )}
          <p className="text-red-600 font-sans font-bold">
            {errorMessage &&
              (errorMessage?.emailErr?.message ||
                errorMessage?.passwordErr?.message ||
                errorMessage?.nameErr?.message ||
                errorMessage?.firebaseErr)}{" "}
          </p>
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
    </div>
  );
};

export default Login;
