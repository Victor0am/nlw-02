import React, { InputHTMLAttributes } from 'react';

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    label: string;
    name: string;
}

export default function Input(props: InputProps) {
    return (
        <div className="input-block">
            <label htmlFor={props.name}>{props.label}</label>
            <input type="text" id={props.name} {...props} />
        </div>
    )
}