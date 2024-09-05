import * as yup from "yup";

export const commentValidator = (isRegistering) => {
  let schema = yup.object().shape({
    firstName: yup
      .string()
      .required("Въведете име!")
      .min(3, "Името трябва да е 3 символа!"),
    lastName: yup
      .string()
      .required("Въведете фамилия!")
      .min(3, "Фамилията трябва да е 3 символа!"),
    img: yup.string().required("Въведете снимка!"),
    description: yup
      .string()
      .required("Въведете коментара си!")
      .min(50, "Трябва да е 50 символа!"),
  });

  return schema;
};
