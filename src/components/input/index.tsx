import React from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
import './styles.scss';

interface IProps extends React.ComponentProps<'input'> {
    label: string;
    hasError?: boolean;
    errorMessage?: string;
}

const Input = React.forwardRef(({ label, id, hasError, errorMessage, ...props }: IProps, ref: React.ForwardedRef<HTMLInputElement>) => {
    return (
        <div className='input'>
            <label htmlFor={id}>{ label }</label>
            <input {...props} ref={ref}/>
            { hasError && <span>{ errorMessage }</span> }
        </div>
    );
});


export default Input;