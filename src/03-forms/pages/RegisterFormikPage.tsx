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
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="nombre"
                            placeholder="jose"
                        />

                        <button type="submit">Create</button>
                        {/* <button type="button" onClick={resetForm}>
                            Reset
                        </button> */}
                    </Form>
                )}
            </Formik>
        </div>
    );
};
