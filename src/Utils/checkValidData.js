export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);
  const isPasswordValid =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(
      password
    );

    const validationObj = {
      emailErr: {isValid: true},
      passwordErr: {isValid: true}
    }

   if (email === "") {
    validationObj['emailErr'] = {isValid: false, message: "email is required"}
  } else if (!isEmailValid) {
    validationObj['emailErr'] = {isValid: false, message: "email is not valid please check"}
  }  else {
    validationObj['emailErr'] = {isValid: true, message: ""}
  }

  if (password === "") {
      validationObj['passwordErr'] = {isValid: false, message: "password is required"}
  } else if (!isPasswordValid) {
      validationObj['passwordErr'] = {isValid: false, message: "password is not valid"}
 } else {
      validationObj['passwordErr'] = {isValid: true, message: ""}
  }

  return {validationObj};
};

export const checkNameData = (name) => {
  const isNameValid = /^[a-zA-Z ]{2,30}$/.test(name);

  const validationName = {
    nameErr: {isValid: true},
  }

  if (name === "") {
    validationName['nameErr'] = {isValid: false, message: "name is Required" }
  } else if (!isNameValid) {
    validationName['nameErr'] = {isValid: false, message: "name is not valid" }
  } else {
    validationName['nameErr'] = {isValid: true, message: "" }
  }

  return {validationName}
};
