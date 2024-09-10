import React, { useContext, useRef } from "react";
import imageGoogle from "../../img/account/google.png"
import "../../css/account/FormLogin.css"
import { EmailContext, PasswordContext } from "../../context/account/Context";
function CreateFormLogin(){

    var iEye = useRef(null);

    var inputPassword = useRef (null);

    // event change password type
    var flagChangePassword = 1;
    const changeClassIEye = (firstClassName, secondClassName) => {
        console.log("nguyentandung");
        if (iEye.current && inputPassword.current) { // Check if the ref is available
          if (flagChangePassword === 0) {
            flagChangePassword = 1;
            inputPassword.current.type = "password"
            iEye.current.className = firstClassName; // Change to second class
          } else {
            flagChangePassword = 0;
            iEye.current.className = secondClassName; // Change to first class
            inputPassword.current.type = "text"
          }
        }
    };
    

    // hide pError
    var {emailTrue, setValueEmailTrue} = useContext(EmailContext);
    var {passwordTrue, setValuePasswordTrue} = useContext(PasswordContext);

    return (
        <div class="divRight">
            <div class="divFormLogin">
                <div class="divInputEmail divInput">
                {emailTrue == false && <p class="pError">Your account is not exist.</p>}
                    <input placeholder="Your Email:"></input>
                </div>
                <div class="divInputPassword divInput">
                    {passwordTrue == false && <p class="pError">Your password is wrong.</p>}
                    <input ref={inputPassword} type="password" placeholder="Your Password:"></input>
                    <i ref={iEye} onClick={() => changeClassIEye("fa-solid fa-eye-slash", "fa-solid fa-eye")} class="fa-solid fa-eye-slash"></i>
                </div>
                <p>Forgot password?</p>
                <button>Log In</button>
                <div class="divContinueGoogle div1">
                    <img src={imageGoogle}></img>
                    <p>Continue with google</p>
                </div>
                <div class="divDontHaveAccount div1 ">
                    <p>Don't have an account?</p>
                    <p class="pSignUp">Sign Up</p>
                </div>
            </div>
        </div>
    );
}


export default CreateFormLogin;