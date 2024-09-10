import React from "react";
import imageGoogle from "../../img/account/google.png"
import "../../css/account/FormLogin.css"

function createFormLogin(){
    return (
        <div class="divRight">
            <div class="divFormLogin">
                <div class="divInputEmail divInput">
                    <p class="pError">Your account is not exist.</p>
                    <input placeholder="Your Email:"></input>
                </div>
                <div class="divInputPassword divInput">
                    <p class="pError">Your password is wrong</p>
                    <input placeholder="Your Password:"></input>
                    <i class="fa-solid fa-eye"></i>
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

export default createFormLogin;