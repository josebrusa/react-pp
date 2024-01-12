import { Formik, Form } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";
import { MyTextInput, MyCheckbox, MySelect } from "../components/";

export const FormikAbstraction = () => {
    return (
        <div>
            <h1>Formik Abstraction</h1>

            <Formik
                initialValues={{
                    firstName: "",
                    lastName: "",
                    email: "",
                    terms: false,
                    jobType: "",
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
                validationSchema={Yup.object({
                    firstName: Yup.string()
                        .max(15, "Debe de tener 15 caracteres o menos")
                        .required("Required"),
                    lastName: Yup.string()
                        .max(15, "debe de tener 15 caracteres o menos ")
                        .required("Required"),
                    email: Yup.string()
                        .email("Invalid Email")
                        .required("Required"),
                    terms: Yup.boolean().oneOf(
                        [true],
                        "debe de aceptar las condiciones"
                    ),
                    jobType: Yup.string()
                        .notOneOf(["it-jr"], "Esta opcion no es permitida")
                        .required("Requerido"),
                })}
            >
                {(formik) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="firstName"
                            placeholder="john"
                        />
                        <MyTextInput
                            label="Apellido"
                            name="lastName"
                            placeholder="Applesid"
                        />
                        <MyTextInput
                            label="Correo electronico"
                            name="email"
                            type="email"
                            placeholder="josea@applesid.com"
                        />

                        <MySelect label="Area IT" name="jobType">
                            <option value="">Pick Something</option>
                            <option value="developer">Developer</option>
                            <option value="desinger">Desinger</option>
                            <option value="it-senior">IT Senior</option>
                            <option value="it-jr">IT jr</option>
                        </MySelect>

                        <MyCheckbox
                            label="Terminos & Condiciones"
                            name={"terms"}
                        />

                        <button type="submit">Submit</button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};
