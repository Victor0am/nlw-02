import React, { TextareaHTMLAttributes } from 'react';

import './styles.css'

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    label: string;
    name: string;
}

export default function Textarea(props: TextareaProps) {
    return (
        <div className="textarea-block">
            <label htmlFor={props.name}>{props.label}</label>
            <textarea  id={props.name} {...props} />
        </div>
    )
}