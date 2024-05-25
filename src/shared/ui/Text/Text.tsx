import { memo, ReactNode } from 'react';
import classNames from 'classnames';
import './Text.css';

export enum TextSizes {
    XXS = 'Text-xxs',
    XS = 'Text-xs',
    S = 'Text-s',
    M = 'Text-m',
    L = 'Text-l',
    XL = 'Text-xl',
}

export enum TextColors {
    WHITE = 'Text-white',
    BLACK = 'Text-black',
}

export enum TextStyle {
    BASE = 'Text-base',
    UNDERLINE = 'Text-underline',
}

interface ITextProps {
    className?: string;
    children: ReactNode;
    size?: TextSizes;
    color?: TextColors;
    style?: TextStyle;
}

export const Text = memo((props: ITextProps) => {
    const {
        className, children, size = TextSizes.M, color = TextColors.BLACK, style = TextStyle.BASE,
    } = props;

    return (
        <p
            className={classNames('Text', {}, [className, size, color, style])}
        >
            {children}
        </p>
    );
});
