import { ROUTES } from '@constants/navigation';
import { NavLink } from 'react-router-dom';

interface MobileMenuProps {
	isHumbergerOpen: boolean;
}

const MobileMenu = ({ isHumbergerOpen }: MobileMenuProps): JSX.Element => {
	return (
		<div
			className={`fixed top-0 left-0 w-full h-screen bg-black/70 backdrop-blur-sm  transform ${
				isHumbergerOpen ? 'translate-x-0' : '-translate-x-full'
			} transition-transform duration-300 ease-in-out md:hidden  w-screen overflow-hidden`}
		>
			<ul className='flex pt-20 w-full flex-col items-center space-y-2'>
				{ROUTES.map((link) => (
					<li key={link.path} className='w-full'>
						<NavLink
							to={link.path}
							className={({ isActive }) =>
								`${
									isActive
										? ' bg-blue-700/80'
										: 'hover:text-secondary hover:bg-primary'
								} px-4 py-4 rounded font-Montserrat text-sm text-secondary font-medium inline-block w-full text-center`
							}
						>
							{link.name}
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};
export default MobileMenu;
