// write your custom hook here to control your checkout form
import React, { useState } from 'react';
import useLocalStorage from "./localStorage";

const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue)
    const handleChanges = e => {
        const {name, value} = e.target;
        setValues({
            ...values,
            [name]: value
        })
    }
    return[
        values,
        handleChanges
    ]
}

export default useForm;