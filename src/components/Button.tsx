import React from 'react';

interface ButtonProps extends React.PropsWithChildren {
	width?: number;
	value?: number;
	handleClick: () => void;
}

const Button = ({
	children,
	width,
	value,
	handleClick,
}: ButtonProps): JSX.Element => {
	return (
		<button
			className='bg-black font-serif text-red-600 hover:border-red-600'
			style={{ width: width ?? 200 }}
			onClick={handleClick}
		>
			{children} {value}
		</button>
	);
};

export default Button;
