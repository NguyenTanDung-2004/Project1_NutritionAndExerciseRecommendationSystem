import React from "react";
import DivLeft from "./DivLeft"
import FormLogin from "./FormLogin"
import "../../css/account/App.css"

function CreateAccountPage(){
    return (
        <div className="divMain">
            <DivLeft/>
            <FormLogin/>
        </div>
    );
}

export default CreateAccountPage;