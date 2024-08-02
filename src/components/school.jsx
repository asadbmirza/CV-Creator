import { useState } from "react";

function School(setSchoolName, setPost, setFirstYear) {
    return (
        <>
            <li>
                <label htmlFor='schoolName'>School</label>
                <input type="text" id='schoolName' onInput={setSchoolName}/>
            </li>
            <li>
                <label htmlFor='post'>Program of Study</label>
                <input type="text" id='post' onInput={setPost}/>
            </li>
            <li>
                <label htmlFor='firstYear'>First Year</label>
                <input type="firstYear" id='firstYear' onInput={setFirstYear}/>
            </li>
        </> 
    );
}

export default School;