import * as yup from "yup";

export const loginValidation = (isRegistering) => {
  let schema = yup.object().shape({
    email: yup
      .string()
      .required("Въведете имейл!")
      .email("Въведете валиден имейл!"),
    password: yup
      .string()
      .required("Въведете парола!")
      .min(5, "Паролата трябва да е 5 символа!"),
  });

  if (isRegistering) {
    schema = schema.shape({
      ...schema.fields,
      rePassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Паролата трябва да съвпада!")
        .required("Повторете паролата!"),
    });
  }

  return schema;
};
