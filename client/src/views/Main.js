import React, { useEffect, useState } from 'react'
import axios from 'axios';
import PetList from '../components/PetList';
import PetForm from '../components/PetForm';

export default () => {
    const [pet, setPet] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/pet')
            .then(res => {
                setPet(res.data);
                setLoaded(true);
            });
    }, [pet]);
    // the pet inside the sqauare brackets is for it to auto update whenever there is a new pet. when a new pet is created the list is auto updated

    const removeFromDom = petId => {
        setPet(pet.filter(pet => pet._id != petId));
    }

    return (
        <div>
            {loaded && <PetList pet={pet} removeFromDom={removeFromDom} />}
            <hr />
            <PetForm />
        </div>
    )
}