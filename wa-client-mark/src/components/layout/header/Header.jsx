import { useAuth } from '../../../hooks/useAuth'
import styles from './Header.module.scss'
import { IoMdArrowBack } from 'react-icons/io'
import Hamburger from '../hamburger/Hamburger'
import { AiOutlineUser } from 'react-icons/ai'
import { useLocation, useNavigate } from 'react-router-dom'

const Header = ({ backLink = '' }) => {
	const { isAuth } = useAuth()

	const { pathname } = useLocation()
	const navigate = useNavigate()

	return (
		<header className={styles.header}>
			{pathname != '/' || !isAuth ? (
				<button
					onClick={() => {
						navigate(isAuth ? backLink : '/auth')
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate('/profile')
					}}
				>
					<AiOutlineUser fill='#fff' fontSize={28} />
				</button>
			)}
			{isAuth && <Hamburger />}
		</header>
	)
}

export default Header
