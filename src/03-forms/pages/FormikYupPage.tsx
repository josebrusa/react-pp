import { useFormik } from "formik";
import * as Yup from "yup";

import "../styles/styles.css";

// interface FormValues {
//     firstName: string;
//     lastName: string;
//     email: string;
// }

export const FormikYupPage = () => {
    // const validate = ({ firstName, lastName, email }: FormValues) => {
    //     const errors: FormikErrors<FormValues> = {};

    //     if (!firstName) {
    //         errors.firstName = "Required";
    //     } else if (firstName.length >= 15) {
    //         errors.firstName = "Must be 15 characters or less";
    //     }
    //     if (!lastName) {
    //         errors.lastName = "Required";
    //     } else if (lastName.length >= 10) {
    //         errors.lastName = "Must be 10 characters or less";
    //     }
    //     if (!email) {
    //         errors.email = "Required";
    //     } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    //         errors.email = "Invalid email address";
    //     }

    //     return errors;
    // };

    const { getFieldProps, handleSubmit, touched, errors } = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
        },
        onSubmit: (values) => {
            console.log(values);
        },
        // validate,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .min(2, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            lastName: Yup.string()
                .min(4, "Too Short!")
                .max(50, "Too Long!")
                .required("Required"),
            email: Yup.string().email("Invalid email").required("Required"),
        }),
    });
    return (
        <div>
            <h1>Formik YUP Tutorial</h1>
            <form onSubmit={handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input type="text" {...getFieldProps("firstName")} />

                {touched.firstName && errors.firstName ? (
                    <span>{errors.firstName}</span>
                ) : (
                    ""
                )}
                <label htmlFor="lastName">Last Name</label>
                <input type="text" {...getFieldProps("lastName")} />
                {touched.lastName && errors.lastName ? (
                    <span>{errors.lastName}</span>
                ) : (
                    ""
                )}

                <label htmlFor="email">Email</label>
                <input type="email" {...getFieldProps("email")} />
                {touched.email && errors.email ? (
                    <span>{errors.email}</span>
                ) : (
                    ""
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
