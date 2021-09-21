import React from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
export default props => {
    const { removeFromDom } = props;
    const deletePet = (petId) => {
        axios.delete('http://localhost:8000/api/pet/' + petId)
            .then(res => {
                removeFromDom(petId)
            })
        // this call allows the delete function
    }
    return (
        <div>
            <h1>Pet Shelter</h1>
            <h3>These pets are looking for a good home</h3>
            {props.pet.map((pet, idx) => {
                return <p key={idx}>
                    {pet.name} {pet.type}
                    ---
                    <button style={{ backgroundColor: '#ee78ff', color: "black" }}>
                        <Link to={"/pet/" + pet._id}>
                            Details
                        </Link>
                    </button>
                    ---
                    <button style={{ backgroundColor: '#ee78ff', color: "black", textDecoration: "underline" }} onClick={(e) => { deletePet(pet._id) }}>
                        Adopt!
                    </button>
                </p>

            })}
        </div >
    )
}