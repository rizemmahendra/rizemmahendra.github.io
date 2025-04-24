interface HumbergerButtonProps {
	isHumbergerOpen: boolean;
	handleHumbergerClick: () => void;
}

const HumbergerButton = ({
	isHumbergerOpen,
	handleHumbergerClick,
}: HumbergerButtonProps): JSX.Element => {
	return (
		<button className='relative group' onClick={handleHumbergerClick}>
			<div className='relative flex overflow-hidden items-center justify-center  w-[35px] h-[35px] transform transition-all  duration-200 shadow-md'>
				<div className='flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden'>
					<div
						className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
							isHumbergerOpen ? 'translate-x-10' : ''
						} delay-150`}
					></div>
					<div
						className={`bg-white h-[2px] w-7 rounded transform transition-all duration-300 ${
							isHumbergerOpen ? 'translate-x-10' : ''
						} delay-75`}
					></div>
					<div
						className={`bg-white h-[2px] w-7 transform transition-all duration-300 origin-left ${
							isHumbergerOpen ? 'translate-x-10' : ''
						} delay-150`}
					></div>

					<div
						className={`absolute items-center justify-between transform transition-all duration-500 top-2.5 -translate-x-10 ${
							isHumbergerOpen ? 'translate-x-0 w-12' : ''
						} flex w-0 `}
					>
						<div
							className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 rotate-0 delay-300 ${
								isHumbergerOpen ? 'rotate-45' : ''
							}`}
						></div>
						<div
							className={`absolute bg-white h-[2px] w-5 transform transition-all duration-500 -rotate-0 delay-300 ${
								isHumbergerOpen ? '-rotate-45' : ''
							}`}
						></div>
					</div>
				</div>
			</div>
		</button>
	);
};

export default HumbergerButton;
