import { useState } from "react";

function Experience(setCompany, setPosition, setRole) {
    return (
        <>
            <li>
                <label htmlFor='companyName'>Company Name</label>
                <input type="text" id='companyName' onInput={setCompany}/>
            </li>
            <li>
                <label htmlFor='position'>Position</label>
                <input type="text" id='position' onInput={setPosition}/>
            </li>
            <li>
                <label htmlFor='responsibilities'>Responsibilities</label>
                <input type="text" id='responsibilities' onInput={setRole}/>
            </li>
        </> 
    );
}

export default Experience;