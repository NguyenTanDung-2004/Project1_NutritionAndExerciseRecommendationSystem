import React from "react";
import App from "../component/account/App"
import { EmailProvider, PasswordProvider } from "../context/account/Context";

function CreatePage(){
    return (
        <EmailProvider>
        <PasswordProvider>
            <App/>
        </PasswordProvider>
        </EmailProvider>
    );
}

export default CreatePage;