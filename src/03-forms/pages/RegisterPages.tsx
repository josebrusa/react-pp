import { FormEvent } from "react";
import { useForm } from "../hooks/useForm";
import "../styles/styles.css";

export const RegisterPages = () => {
    const {
        formData,
        isValidEmail,
        resetForm,
        onChange,
        name,
        email,
        password1,
        password2,
    } = useForm({
        name: "",
        email: "",
        password1: "",
        password2: "",
    });

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        console.log(formData);
    };

    return (
        <div>
            <h1>Register</h1>

            <form noValidate onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={name}
                    name="name"
                    type="text"
                    placeholder="name"
                    className={`${name.trim().length <= 0 && "has-error"}`}
                />
                {name.trim().length <= 0 && (
                    <span>Este campo es obligatorio</span>
                )}
                <input
                    onChange={onChange}
                    value={email}
                    name="email"
                    type="email"
                    placeholder="email"
                    className={`${!isValidEmail(email) && "has-error"}`}
                />
                {!isValidEmail(email) && <span>Email no es valido</span>}
                <input
                    onChange={onChange}
                    value={password1}
                    name="password1"
                    type="password"
                    placeholder="password"
                />
                {password1.trim().length <= 0 && (
                    <span>Este campo es obligatorio</span>
                )}
                {password1.trim().length < 6 && password1.trim().length > 0 && (
                    <span>La contraseñadebe contener 6 letras</span>
                )}
                <input
                    onChange={onChange}
                    value={password2}
                    name="password2"
                    type="password"
                    placeholder="Repeat password"
                />
                {password2.trim().length <= 0 && (
                    <span>Este campo es obligatorio</span>
                )}
                {password2.trim().length > 0 && password1 !== password2 && (
                    <span>Las contraseñas deben de ser iguales</span>
                )}
                <button type="submit">Create</button>
                <button type="button" onClick={resetForm}>
                    Reset
                </button>
            </form>
        </div>
    );
};
