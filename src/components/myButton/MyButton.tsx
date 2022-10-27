import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import classes from "./MyButton.module.css";
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
type MyButtonPropsType=DefaultButtonPropsType &{
    name:string
    styleButton?:string
}

const MyButton :React.FC<MyButtonPropsType>=({name,onClick}) => {
    return (
        <button onClick={onClick} >
            {name}
        </button>
    );
};

export default MyButton;