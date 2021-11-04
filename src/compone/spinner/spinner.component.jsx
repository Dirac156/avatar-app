import * as React from "react";
import "./spinner.style.css";

const Spinner= () => {
    return(
        <div className="spinner">
            <div className="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Spinner;