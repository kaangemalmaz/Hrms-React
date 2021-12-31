import React from 'react'

//export default function AKGDropdown(props) {

const AKGDropdown = ({ label, name, onChange, defaultOption, value, error, options }) => {
    return (
        <div className='form-control'>
            <label htmlFor={name}>{label}</label>
            <select name={name}
                value={value}
                onChange={onChange}
                className='form-control'
            >
                <option value="">
                    {defaultOption}
                </option>
                {options.map(option=>{
                    return (
                        <option key={option.key} value={option}>
                            {option.text}
                        </option>
                    );
                })};
            </select>
            {error && <div className='alert alert-danger'>{error}</div>}
        </div>
    );
}

export default AKGDropdown;