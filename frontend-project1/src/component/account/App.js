import React from "react";
import DivLeft from "./DivLeft"
import FormLogin from "./FormLogin"
import "../../css/account/App.css"
import SignUp from "./SignUp";
import DivBlur from "./DivBlur"
function CreateAccountPage(){
    return (
        <div className="divMain">
            <DivLeft/>
            <FormLogin/>
            <SignUp/>
            <DivBlur/>
        </div>
    );
}

export default CreateAccountPage;