const emailRegex = "[a-z0-9]+@[a-z]+.[a-z]{2,3}";
const passwordRegex = "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$";

const formValidate = (e, inputValues, error, setError) => {
  switch (e.target.name) {
    case "firstname": {
      if (!inputValues.firstname) {
        setError({ ...error, firstname: "Required Field" });
      } else {
        setError({ ...error, firstname: "" });
      }
      break;
    }
    case "lastname": {
      if (!inputValues.lastname) {
        setError({ ...error, lastname: "Required Field" });
      } else {
        setError({ ...error, lastname: "" });
      }
      break;
    }
    case "email": {
      if (!inputValues.email) {
        setError({ ...error, email: "Required Field" });
      } else if (!inputValues.email.match(emailRegex)) {
        setError({ ...error, email: "Email is not valid" });
      } else {
        setError({ ...error, email: "" });
      }
      break;
    }
    case "password": {
      if (!inputValues.password) {
        setError({ ...error, password: "Required Field" });
      } else if (!inputValues.password.match(passwordRegex)) {
        setError({
          ...error,
          password:
            "Password must have uppercase, lowercase, number and minimum 8 character",
        });
      } else {
        setError({ ...error, password: "" });
      }
      break;
    }
  }
};

export default formValidate;
