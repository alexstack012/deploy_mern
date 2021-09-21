import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router';
import {
    Link
} from "react-router-dom";
export default props => {
    const { id } = useParams();
    const [name, setName] = useState("");
    const [type, setType] = useState("");
    const [skill1, setSkill1] = useState("")
    const [skill2, setSkill2] = useState("")
    const [skill3, setSkill3] = useState("")
    const [notFound, setNotFound] = useState(false)
    const [errors, setErrors] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                console.log("response is this--->", res)
                if (res.data.value) {
                    setNotFound(true)
                } else {
                    setName(res.data.name);
                    setType(res.data.type)
                    setSkill1(res.data.skill1)
                    setSkill2(res.data.skill2)
                    setSkill3(res.data.skill3)
                }
            })
    }, [])
    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pet/' + id, {
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
    return (
        <div>
            <h1>Update a Pet</h1>
            {notFound ?
                <>
                    <h1>The pet is not found, please create one</h1>
                    <Link to="/pet">Create a new pet</Link>
                </> :
                <form onSubmit={updatePet}>
                    {errors.map((err, index) => <p key={index}>{err}</p>)}
                    <p>
                        <label>Name: </label><br />
                        <input type="text"
                            name="Name"
                            value={name}
                            // required={true}
                            // minLength={(3)}
                            onChange={(e) => { setName(e.target.value) }} />
                    </p>
                    <p>
                        <label>Type: </label><br />
                        <input type="text"
                            name="Type"
                            value={type}
                            // required={true}
                            // minLength={(3)}
                            onChange={(e) => { setType(e.target.value) }} />
                    </p>
                    <p>
                        <label>Skill 1: </label><br />
                        <input type="text"
                            name="Skill1"
                            value={skill1}
                            onChange={(e) => { setSkill1(e.target.value) }} />
                    </p>
                    <p>
                        <label>Skill 2: </label><br />
                        <input type="text"
                            name="Skill2"
                            value={skill2}
                            onChange={(e) => { setSkill2(e.target.value) }} />
                    </p>
                    <p>
                        <label>Skill 3: </label><br />
                        <input type="text"
                            name="Skill3"
                            value={skill3}
                            onChange={(e) => { setSkill3(e.target.value) }} />
                    </p>
                    <input type="submit" />
                    {/* above is the backend validation to see if the pet id exisits. if not it shows the first h1, else shows the edit page */}
                </form>

            }

            <Link to={"/pet/"}>
                Home
            </Link>
        </div>
    )
}