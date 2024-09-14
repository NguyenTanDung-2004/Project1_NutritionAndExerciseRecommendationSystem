import React, { useContext, useEffect, useRef } from "react";
import "../../css/account/Spinner.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import { TextSpinnerContext } from "../../context/account/Context";
function CreateSpinner(){
    const {textSpinner, setTextSpinner} = useContext(TextSpinnerContext);
    setTextSpinner("Signing Up...");

    const {spinner, setSpinner} = useContext(TextSpinnerContext);
    var spinnerRef = useRef(null);
    var {iconSpinner, setIconSpinner} = useContext(TextSpinnerContext);
    var iSpinnerRef = useRef(null);
    var {circleSpinner, setCircleSpinner} = useContext(TextSpinnerContext);
    var circleSpinnerRef = useRef(null);
    useEffect(() => {
        setSpinner(spinnerRef);
        setIconSpinner(iSpinnerRef);
        setCircleSpinner(circleSpinnerRef);
    }, [])

    return (
        <div ref={spinnerRef} class="divSpinner">
            <i ref={iSpinnerRef} class="fa-solid fa-check"></i>
            <div ref={circleSpinnerRef} class="spinner-border" role="status">
                <span class="sr-only"></span>
            </div>
            <p>{textSpinner}</p>
        </div>
    );
}

export default CreateSpinner;