import React, { useEffect, useState } from "react";
import {
  NETFLIX_LOGO,
  PROFILE_PIC,
  SUPPORTED_LANGUAGES,
} from "../Utils/constants";
import { useNavigate } from "react-router-dom";
import { auth } from "../Utils/firebase";
import { onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { IoIosArrowDropdown, IoIosArrowDropup } from "react-icons/io";
import { toggleGptSearchView } from "../Utils/gptSlice";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();
  const [drop, setDrop] = useState(false);
  const [form, setForm] = useState(false);
  const [image, setImage] = useState(PROFILE_PIC);

  useEffect(() => {
    //When the user sign in or sign out or sign up this will trigger
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // user sign in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        //user sign out
        dispatch(removeUser());
        navigate("/");
      }
    });
    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, [dispatch, navigate]);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleDropDown = () => {
    setDrop(!drop);
  };

  const handleImageUpload = () => {
    document.getElementById("fileInput").click();
  };

  const handleImageChange = (e) => {
    const selectedFile = e.target.files[0];
    setImage(URL.createObjectURL(selectedFile));
    handleChangeProfile({ photoURL: URL.createObjectURL(selectedFile) });
  };

  const handleChangeName = (e) => {
    const updateName = e.target.value;
    handleChangeProfile({ displayName: updateName });
  };

  const handleChangeProfile = (updateObject) => {
    updateProfile(auth.currentUser, updateObject)
      .then(() => {
        // Profile updated!
        const { uid, email, displayName, photoURL } = auth.currentUser;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
      })
      .catch((error) => {
        // An error occurred
        // ...
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView());
  };

  const handleChangeLanguage = (e) => {
    const selectedLang = e.target.value
    dispatch(changeLanguage(selectedLang))
  };

  return (
    <div className="px-8 py-2 bg-gradient-to-b from-black flex justify-between items-center absolute w-[100%] z-50">
      <img src={NETFLIX_LOGO} alt="netflix_logo" className="w-44" />
      {user && (
        <div>
          <div className="flex items-center">
            <div>
              <select
                onChange={handleChangeLanguage}
                className="bg-gray-800  px-2 py-1 text-white mr-2 outline-none border-none"
              >
                {SUPPORTED_LANGUAGES?.map((language) => (
                  <option className="text-center" key={language?.identifer} value={language?.identifer}>
                    {language?.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <button
                onClick={handleGptSearch}
                className="bg-gray-800  px-2 py-1 text-white mr-2"
              >
                {showGptSearch ? "Homepage" : "GPT Search"}
              </button>
            </div>
            <div onClick={handleImageUpload}>
              <input
                id="fileInput"
                className="hidden"
                type="file"
                accept="image/*"
                multiple={false}
                onChange={handleImageChange}
              />
              <img
                className="h-12 mr-1 rounded-[50%]"
                src={user?.photoURL ? user?.photoURL : image}
                alt="user_logo"
              />
            </div>
            <div
              onClick={handleDropDown}
              className="text-3xl text-white cursor-pointer"
            >
              {drop ? <IoIosArrowDropup /> : <IoIosArrowDropdown />}
            </div>
          </div>
          <div>
            {drop && (
              <div className=" absolute flex flex-col gap-3 right-3 top-20 w-36  p-2 border-2 border-black bg-gray-800 rounded-lg text-center">
                <button
                  className="text-bold text-white hover:text-blue-300 "
                  onClick={() => setForm(true)}
                >
                  {form ? "Set Profile" : "Edit Profile"}
                </button>
                {form ? (
                  <input type="text" onChange={(e) => handleChangeName(e)} />
                ) : (
                  <p className="text-white hover:text-blue-300 ">
                    {user?.displayName}
                  </p>
                )}
                {form && (
                  <button
                    className="text-center text-white hover:text-blue-300 "
                    onClick={() => setForm(false)}
                  >
                    Click Here
                  </button>
                )}
                <button
                  className="text-bold text-white font-bold text-sm bg-red-600 p-1 rounded-lg "
                  onClick={handleSignOut}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
