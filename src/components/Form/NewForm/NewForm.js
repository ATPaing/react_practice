import { useState } from "react"
import styled from "styled-components"

import styles from "./NewForm.module.css"

const Button = styled.button`
    background-color: #b10eb1;
    border: 2px solid transparent;
    color: white;
    font-size: 1.1rem;
    border-radius: 5px;
    padding: 0.5em 1em;
    cursor: pointer;
    margin-top: 1em;
    &:hover{
        background-color: transparent;
        border: 2px solid #b10eb1;
        color: #b10eb1; 
    }
`

export default function NewForm(props) {

    const [formValue, setFormValue] = useState({
        id: '',
        userName: '',
        age: ''
    })


    const onInputChange = (e) => {
        setFormValue(prev => {
            return {
                ...prev,
                id: Math.random().toString(),
                [e.target.name] : e.target.value 
            } 
        })

    }


    const onSubmittingForm = (e) => {
        e.preventDefault()
        if (
            (formValue.userName === '' && formValue.age === '')
            ||
            (formValue.userName === '' && parseInt(formValue.age) < 0)
        ) {
            props.onGettingValidityState({
                userNameValid: true,
                ageValid: true,
                allValid: false  
        })
            return
        } else if (formValue.userName === '' && formValue.age !== '') {
            props.onGettingValidityState({
                userNameValid: false,
                ageValid: true,
                allValid: true  
            })
            return
        } else if (
            (formValue.userName !== '' && formValue.age === '')
            ||
            (formValue.userName !== '' && parseInt(formValue.age) < 0)
        ) {
            props.onGettingValidityState({
                userNameValid: true,
                ageValid: false,
                allValid: true  
            })
            return
        }
        
        props.onGettingFormValue(formValue)
        setFormValue( {
            id: '',
            userName: '',
            age: '' 
        })
    }


    return (
        <form className={styles.newForm} onSubmit={onSubmittingForm}>
            <div className={styles.input__wrapper}>
                <label className={styles.userName__label}>Username</label>
                <input className={styles.userName__input} type="text" value={formValue.userName} name="userName" onChange={onInputChange} />
            </div>
            <div className={styles.input__wrapper}>
                <label className={styles.age__label}>Age(Years)</label>
                <input className={styles.age__input}type="number" value={formValue.age} name="age" onChange={onInputChange}/>
            </div>

            <div>
                <Button type="submit">Add User</Button>
            </div>
        </form>
    )
}