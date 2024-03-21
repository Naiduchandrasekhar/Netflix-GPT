export const checkValidData = (email, password, setErrorMessage) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

   if (email === "") {
    setErrorMessage((prev) => ({ ...prev, emailErr: "email is required" }));
  } else if (!isEmailValid) {
    setErrorMessage((prev) => ({ ...prev, emailErr: "email is not valid please check" }));
  }  else {
    setErrorMessage((prev) => ({ ...prev, emailErr: "" }));
  }

  if (password === "") {
    setErrorMessage((prev) => ({ ...prev,  passwordErr: "password is required",}));
  } else if (!isPasswordValid) {
    setErrorMessage((prev) => ({...prev, passwordErr: "password is not valid" }));
 } else {
    setErrorMessage((prev) => ({ ...prev, passwordErr: "" }));
  }

  return setErrorMessage;
};

export const checkNameData = (name, setErrorMessage) => {
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  if (!isNameValid) {
    setErrorMessage((prev) => ({ ...prev, nameErr: "name is not valid", }));
  } else if (name === "") {
    setErrorMessage((prev) => ({ ...prev, nameErr: "name is Required" }));
  } else {
    setErrorMessage((prev) => ({ ...prev, nameErr: "" }));
  }
  return setErrorMessage
};
