import React, {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from 'react';
import classes from "./MyCheckBox.module.css";
type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
type MyCheckBoxPropsType=DefaultInputPropsType & {
    onChangeChecked?: (checked: boolean) => void
    spanClassName?: string
    name?:string
}



export const MyCheckBox: React.FC<MyCheckBoxPropsType> = (
    {
        type, // достаём и игнорируем чтоб нельзя было задать другой тип инпута
        onChange, onChangeChecked,
        className, spanClassName,
        children, // в эту переменную попадёт текст, типизировать не нужно так как он затипизирован в React.FC
        name,

        ...restProps// все остальные пропсы попадут в объект restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.currentTarget.value)
        // сделайте так чтоб работал onChange и onChangeChecked
    }

    const finalInputClassName = `${classes.checkbox} ${className ? className : ''}`

    return (
        <label>
            <input
                type={'checkbox'}
                onChange={onChangeCallback}
                className={finalInputClassName}

                {...restProps} // отдаём инпуту остальные пропсы если они есть (checked например там внутри)
            />
            {children && <span className={classes.spanClassName}>{children}</span>}
            {name}
        </label> // благодаря label нажатие на спан передастся в инпут
    )
}