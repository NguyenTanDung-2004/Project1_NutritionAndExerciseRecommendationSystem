import React, { useEffect, useRef } from "react";
import "../../css/account/SignUp.css"


function CreateSignUpBox(){
    const iEye = useRef(null);
    const inputPassword = useRef(null);

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

    // create option in Dob
        // get current date
    const currentDate = new Date();
    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1; // Months are zero-indexed, so add 1
    const year = currentDate.getFullYear();
    
        // useRef for select
    var dayRef = useRef(null);
    var monthRef = useRef(null);
    var yearRef = useRef(null);
        // set value for select
    useEffect(() => {
        if (dayRef.current) dayRef.current.value = day;
        if (monthRef.current) monthRef.current.value = month;
        if (yearRef.current) yearRef.current.value = year;
    }, [day, month, year]);

        // render month
    var listMonth = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const renderOptionMonth = () =>{
        const element = [];
        for (let i = 0; i < listMonth.length; i++){
            element.push(
                <option value={i + 1}>{listMonth[i]}</option>
            );
        }
        return element;
    }

        // render day
    const renderOptionDay = (numberOfOption, prefixText) => {
        const elements = [];
        for (let i = 0; i < numberOfOption; i++) {
            elements.push(
                <option value={i + 1}>{prefixText + " " + (i + 1)}</option>
            );
        }
        return elements;
    };

        // render year
    const renderOptionYear = () => {
        const elements = [];
        for (let i = 1916; i <= year; i++) {
            elements.push(
                <option value={i}>{i}</option>
            );
        }
        return elements;
    }
    // create option in dob

    // set animation for click 1 sex
    const div1SexRefs = useRef([]);
    const input1SexRefs = useRef([]);
    const clickDiv1SexRefs = (event, index) => {
        input1SexRefs.current[index].click();
    }

    const handleLabelClick = (event, index) => {
        event.stopPropagation(); // Prevents the event from bubbling up to the div
        clickDiv1SexRefs(event, index);
    };
    // set animation for click 1 sex

    return(
        <div class="divSignUp">
            <div class="divHeader">
                <p>SIGN UP</p>
                <i class="fa-solid fa-xmark"></i>
            </div>
            <div class="divLastFirstName divChild">
                <input placeholder="Last Name"></input>
                <input placeholder="First Name"></input>
            </div>
            <div class="divEmail divChild divChild1">
                <input placeholder="Your email:"></input>
            </div>
            <div class="divPassword divChild divChild1">
                <input ref={inputPassword} type="password" placeholder="Your Password:"></input>
                <i ref={iEye} onClick={() => changeClassIEye("fa-solid fa-eye-slash", "fa-solid fa-eye")} class="fa-solid fa-eye-slash"></i>
            </div>
            <div class="divDob divChild">
                <p>Day of birth</p>
                <div class="divInput">
                    
                    <select  ref={dayRef} name="date" id="date">
                       {renderOptionDay(30, "")}
                    </select>

                    <select ref={monthRef} name="month" id="month">
                        {renderOptionMonth()}
                    </select>

                    <select ref={yearRef} name="month" id="month">
                        {renderOptionYear()}
                    </select>
                </div>
            </div>
            <div class="divSex divChild">
                <p>Sex</p>
                <div>
                    <div onClick={(e) => clickDiv1SexRefs(e, 0)} class="div1Sex" ref={el => (div1SexRefs.current[0] = el)}>
                        <label onClick={(e) => handleLabelClick(e, 0)} class="form-check-label" for="flexRadioDefault1">
                            Female
                        </label>
                        <input ref={el => (input1SexRefs.current[0] = el)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                    </div>
                    <div onClick={(e) => clickDiv1SexRefs(e, 1)} class="div1Sex" ref={el => (div1SexRefs.current[1] = el)}>
                        <label onClick={(e) => handleLabelClick(e, 1)} class="form-check-label" for="flexRadioDefault1">
                            Male
                        </label>
                        <input ref={el => (input1SexRefs.current[1] = el)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                    <div onClick={(e) => clickDiv1SexRefs(e, 2)} class="div1Sex" ref={el => (div1SexRefs.current[2] = el)}>
                        <label onClick={(e) => handleLabelClick(e, 2)} class="form-check-label" for="flexRadioDefault1">
                            Other
                        </label>
                        <input ref={el => (input1SexRefs.current[2] = el)} class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateSignUpBox;