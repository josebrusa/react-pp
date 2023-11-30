import { BrowserRouter } from "react-router-dom";

import logo from "../assets/react.svg";

export const Navigation = () => {
    return (
        <BrowserRouter>
            <div className="main-layout">
                <nav>
                    <img src={logo} alt="react-logo" />
                </nav>
            </div>
        </BrowserRouter>
    );
};
