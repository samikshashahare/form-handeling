import React from 'react'
import { useState } from 'react';

export default function RadioBtn() {
    const [gender, setGender] = useState('female');

    return (
        <div>
            <h1>Handelling Radio Buttons</h1>
            <form>
                <h1>Selected Gender:{gender}</h1>
                <input type='radio' name='gender' value="Male"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setGender(e.target.value)
                        }
                    }}
                    checked={gender == "male"} /> Male

                <br />

                <input type='radio' name='gender' value="Female"
                    onChange={(e) => {
                        if (e.target.checked) {
                            setGender(e.target.value)
                        }
                    }}
                    checked={gender == "female"} /> Female
            </form>
        </div>
    )
}

