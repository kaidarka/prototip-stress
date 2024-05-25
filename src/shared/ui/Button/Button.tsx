import React, { ButtonHTMLAttributes } from 'react';
import classNames from 'classnames';
import './Button.css';

export enum ButtonSize {
	S = 'Button-s',
	M = 'Button-m',
	L = 'Button-l',
}

export enum ButtonTypes {
	PRIMARY = 'Button-primary',
	SECONDARY = 'Button-secondary',
	DASHED = 'Button-dashed',
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
	children?: React.ReactNode;
	size?: ButtonSize;
	styleType?: ButtonTypes;
}

export const Button = (props: IButtonProps) => {
    const {
        className,
        children,
        size = ButtonSize.M,
        styleType = ButtonTypes.PRIMARY,
        disabled,
        ...restProps
    } = props;
    return (
        <button
            type="button"
            className={classNames(
                'Button',
                { 'Button-disabled': disabled },
                [size, styleType, className],
            )}
            disabled={disabled}
            {...restProps}
        >
            {children}
        </button>
    );
};
