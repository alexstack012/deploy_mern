import React, { useState } from 'react'
import axios from 'axios';
export default () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [errors, setErrors] = useState([]);
    //handler when the form is submitted

    const onSubmitHandler = e => {
        //prevent default behavior of the submit
        e.preventDefault();
        //make a post request to create a new pet
        axios.post('http://localhost:8000/api/pet', {
            name,
            type,
            skill1,
            skill2,
            skill3
        })
            .then(res => console.log(res)) // If successful, do something with the response. 
            .catch(err => {
                const errorResponse = err.response.data.errors; // Get the errors from err.response.data
                const errorArr = []; // Define a temp error array to push the messages in
                for (const key of Object.keys(errorResponse)) { // Loop through all errors and get the messages
                    errorArr.push(errorResponse[key].message)
                }
                // Set Errors
                setErrors(errorArr);
            })
    }

    
    //onChange to update Name and lastName
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <h1>Add a pet here</h1>
            <p>
                <label>Name: </label><br />
                <input type="text" onChange={(e) => setName(e.target.value)} value={name} />
            </p>
            <p>
                <label>Type: </label><br />
                <input type="text" onChange={(e) => setType(e.target.value)} value={type} />
            </p>
            <p>
                <label>Skill 1: </label><br />
                <input type="text" onChange={(e) => setSkill1(e.target.value)} value={skill1} />
            </p>
            <p>
                <label>Skill 2: </label><br />
                <input type="text" onChange={(e) => setSkill2(e.target.value)} value={skill2} />
            </p>
            <p>
                <label>Skill 3: </label><br />
                <input type="text" onChange={(e) => setSkill3(e.target.value)} value={skill3} />
            </p>
            <button style={{ backgroundColor: '#ee78ff', color: "black", textDecoration: "underline" }} type="submit">Submit</button>
        </form>
    )
}