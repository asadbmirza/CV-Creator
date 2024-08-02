import School from './school'
import Info from './info'
import Experience from './exp'
import { useState } from 'react'

function InputForm() {
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");
    const [email, setEmail] = useState("");

    const [schoolName, setSchoolName] = useState("");
    const [post, setPost] = useState("");
    const [firstYear, setFirstYear] = useState("");

    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [role, setRole] = useState("");
    

    function handleSubmit(e) {
        e.preventDefault();
        console.log(name, email, number);
    }

    return (
        <form action="">
            <ul>
                <Info setName={(e) => setName(e.target.value)} setNumber={(e) => setNumber(e.target.value)} setEmail={(e) => setEmail(e.target.value)}/>
                <School setSchoolName={(e) => setSchoolName(e.target.value)} setPost={(e) => setPost(e.target.value)} setFirstYear={(e) => setFirstYear(e.target.value)}/>
                <Experience setCompany={(e) => setCompany(e.target.value)} setPosition={(e) => setPosition(e.target.value)} setRole={(e) => setRole(e.target.value)}/>
                <button type="submit" onClick={handleSubmit}>Submit</button>
            </ul>
        </form>
    );
}

export default InputForm;