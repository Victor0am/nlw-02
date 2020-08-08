import React, { SelectHTMLAttributes } from 'react';

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string;
    name: string;
    options: Array<{
        value: string;
        label: string;
    }>
}

export default function Select(props: SelectProps) {
    return (
        <div className="select-block">
            <label htmlFor={props.name}>{props.label}</label>
            <select  id={props.name} {...props} >
                <option value=""  disabled hidden >
                    Selecione uma opção
                </option>
                {
                    props.options.map( option => {
                        return <option value={option.value} key={option.value} >
                            {option.label}
                        </option>
                    })
                }
            </select>
        </div>
    )
}