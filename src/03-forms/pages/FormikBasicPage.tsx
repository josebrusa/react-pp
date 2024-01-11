import { useFormik } from "formik";

import "../styles/styles.css";

export const FormikBasicPage = () => {
    const formik = useFormik({
        initialValues: {
            firstName: "pepe",
            lastName: "tofo",
            email: "pepe@togo.com",
        },
        onSubmit: (values) => {
            console.log(values);
        },
    });
    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form onSubmit={formik.handleSubmit} noValidate>
                <label htmlFor="firstName">First Name</label>
                <input
                    type="text"
                    name="firstName"
                    onChange={formik.handleChange}
                    value={formik.values.firstName}
                />

                <span>First Name es requerido</span>
                <label htmlFor="lastName">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    onChange={formik.handleChange}
                    value={formik.values.lastName}
                />
                <span>Last Name es requerido</span>

                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />
                <span>Email es requerido</span>
                <span>no es un Email valido</span>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};
