import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { users } from "../../data/userData";
import { ERRORS } from "../../data/errors";

function Login() {
    const initialState = { username: "", password: "" };
    const navigate = useNavigate();
    const initialStateErrors = {
        username: [],
        password: [],
        global: [],
    };
    const [loginForm, setLoginForm] = useState(initialState);
    const [errors, setErrors] = useState(initialStateErrors);

    const findError = (from, id_error) => {
        return errors[from].find((error) => error.id == id_error);
    };

    const validateError = (from, errorToValidate) => {
        /* Si ya existe en el estado de errores */
        if (findError(from, errorToValidate.id)) {
            /* Si se dejo de cumplir el error */
            if (errorToValidate.validate(loginForm[from])) {
                /* Elimino el error PORQUE SE DEJO DE CUMPLIR */
                const newUsernameErrors = errors[from].filter(
                    (error) => error.id != errorToValidate.id
                );
                setErrors({ ...errors, [from]: newUsernameErrors });
            }
        } else {
            /* Si no existe en el estado de errores */
            /* Verifico que no se cumpla la validacion */
            if (!errorToValidate.validate(loginForm[from])) {
                /* Agregamos el error al estado de errores */
                setErrors({
                    ...errors,
                    [from]: [...errors[from], errorToValidate],
                });
            }
        }
    };

    const handleBlurInput = (e) => {
        if ((e.target.name = "username"))
            validateError("username", ERRORS.USERNAME_LENGTH);
        if ((e.target.name = "password"))
            validateError("password", ERRORS.PASSWORD_LENGTH);
    };

    const handleChangeValue = (e) => {
        setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
    };

    const handleLogin = (e) => {
        e.preventDefault();
        for (const user of users) {
            if (
                user.password === loginForm.password &&
                user.username === loginForm.username
            ) {
                localStorage.setItem("user", JSON.stringify(user));
                return navigate("/home");
            } else {
                if (
                    user.password !== loginForm.password &&
                    user.username !== loginForm.username
                ) {
                    setErrors({ ...errors, global: [ERRORS.USER_NOT_FOUND] });
                } else {
                    setErrors({ ...errors, global: [] });
                }
            }
        }
    };

    return (
        <main>
            <h1>Iniciar sesion</h1>
            <form onSubmit={handleLogin}>
                <div>
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input
                        type="text"
                        placeholder="joedoe"
                        id="username"
                        name="username"
                        onChange={handleChangeValue}
                        value={loginForm.username}
                        onBlur={handleBlurInput}
                    />
                    {errors.username.length > 0 &&
                        errors.username.map((error) => (
                            <span key={error.id}>{error.text}</span>
                        ))}
                </div>
                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        placeholder="joedoe123"
                        id="password"
                        name="password"
                        onChange={handleChangeValue}
                        value={loginForm.password}
                        onBlur={handleBlurInput}
                    />
                    {errors.password.length > 0 &&
                        errors.password.map((error) => (
                            <span key={error.id}>{error.text}</span>
                        ))}
                </div>
                {errors.global.map((error) => (
                    <span key={error.id}>{error.text}</span>
                ))}
                <button type="submit">Enviar</button>
            </form>
        </main>
    );
}

export default Login;
