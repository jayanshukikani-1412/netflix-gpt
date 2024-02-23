import * as Yup from "yup";

const YupSchema = {
  fullName: Yup.string()
    .required("Full name is required")
    .min(2, "Full name must be at least 2 characters long")
    .max(50, "Full name cannot be longer than 50 characters"),
  email: Yup.string()
    .min(6, "Email must be at least 6 characters")
    .required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Password is required"),
  confirmPassword: Yup.string()
    .min(6, "Confirm Password must be at least 6 characters")
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
      "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
    )
    .required("Confirm Password is required"),
};

export default YupSchema;
