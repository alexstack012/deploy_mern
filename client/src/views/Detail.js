import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {
    Link
} from "react-router-dom";
import { useParams } from 'react-router';

export default props => {
    console.log("detail component, props.id is this-->", props.id)
    const [pet, setPet] = useState({})
    const { id } = useParams()
    useEffect(() => {
        axios.get("http://localhost:8000/api/pet/" + id)
            .then(res => {
                console.log(res)
                setPet(res.data)
            })
    }, [])
    return (
        <div>
            <p>Name: {pet.name}</p>
            <p>Type: {pet.type}</p>
            <p>Skill 1: {pet.skill1}</p>
            <p>Skill 2: {pet.skill2}</p>
            <p>Skill 3: {pet.skill3}</p>
            <Link to={"/pet/" + pet._id + "/edit"}>
                Edit
            </Link>
        </div>


    )
}