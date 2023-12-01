import { BrowserRouter } from "react-router-dom";
import { NavLink, Route, Routes, Navigate } from "react-router-dom";

import logo from "../assets/react.svg";
import { LazyPage1, LazyPage2, LazyPage3 } from "../lazyload/pages";
import { routes } from "./routes";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo" />
                    <ul>
                        {routes.map(({ to, name }) => (
                            <li key={to}>
                                <NavLink
                                    to={to}
                                    className={({ isActive }) =>
                                        isActive ? "nav-active" : ""
                                    }
                                >
                                    {name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </nav>
                <Routes>
                    {routes.map(({ to, path, Component }) => (
                        <Route key={to} path={path} element={<Component />} />
                    ))}

                    <Route
                        path="/*"
                        element={<Navigate to={routes[0].to} replace />}
                    />
                </Routes>
            </div>
        </BrowserRouter>
    );
};
