import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput } from "../components";
import "../styles/styles.css";

export const RegisterFormikPage = () => {
    return (
        <div>
            <h1>Register Formik Page</h1>
            <Formik
                initialValues={{
                    name: "",
                    email: "",
                    password1: "",
                    password2: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, "El Nombre debe de contener 3 o mas caracteres")
                        .max(15)
                        .required("Requerido"),
                    email: Yup.string()
                        .email("Email invalido")
                        .required("Requerido"),
                    password1: Yup.string()
                        .min(
                            6,
                            "La contraseña debe de contener 6 o mas caracteres"
                        )
                        .required("Requerido"),
                    password2: Yup.string()
                        .oneOf(
                            [Yup.ref("password1")],
                            "Las Contraaseñas no coinciden"
                        )
                        .required("Requerido"),
                })}
            >
                {({handleReset}) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            placeholder="jose"
                        />
                        <MyTextInput
                            label="Correo"
                            name="email"
                            placeholder="jose@test.com"
                        />

                        <MyTextInput
                            label="Password"
                            name="password1"
                            placeholder="*******"
                        />
                        <MyTextInput
                            label="Repeat Password"
                            name="password2"
                            placeholder="********"
                        />

                        <button type="submit">Create</button>
                        <button type="button" onClick={handleReset}>
                            Reset
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
