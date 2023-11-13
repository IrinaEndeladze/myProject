import { useFormik } from "formik";
import { signIn, useSession } from "next-auth/react";

import { number, object, ref, string } from "yup";

export interface LoginFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const loginSchema = object().shape({
    email: string()
      .trim()
      .matches(
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address with a domain suffix (e.g. example@test.com)"
      )
      .required("E-mail is a required field")
      .email(),
    password: string()
      .trim()
      .required("Password is a required field")
      .min(3)
      .max(32),
  });
  const formValues = () => {
    let values: LoginFormValues = {
      email: "",
      password: "",
    };

    return values;
  };

  const formik = useFormik({
    enableReinitialize: true,

    initialValues: formValues(),

    validationSchema: loginSchema,

    onSubmit: (values, { setSubmitting }) => {
      console.log("valuess===", values);
      signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      })
        .then((res) => {})
        .catch((error) => {
          error;
        })
        .finally(() => {
          setSubmitting(false);
        });
    },
  });

  return formik;
};

export default LoginForm;
