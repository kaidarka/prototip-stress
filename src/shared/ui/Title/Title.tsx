import { memo, ReactNode } from 'react';
import classNames from 'classnames';
import './Title.css';

export enum HeadingTypes {
	H1 = 'h1',
	H2 = 'h2',
	H3 = 'h3',
	H4 = 'h4',
	H5 = 'h5',
}

export enum TitleColors {
	WHITE = 'Title-white',
	BLACK = 'Title-black',
}

interface ITitleProps {
	className?: string;
	headingType?: HeadingTypes;
	children: ReactNode;
	color?: TitleColors;
}

export const Title = memo((props: ITitleProps) => {
    const {
        className, headingType = HeadingTypes.H1, children, color = TitleColors.BLACK,
    } = props;

    const Component = headingType;

    return (
        <Component
            className={classNames('Title', {}, [className, color])}
        >
            {children}
        </Component>
    );
});
