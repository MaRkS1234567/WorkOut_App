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
			{pathname != '/' ? (
				<button
					onClick={() => {
						navigate(backLink)
					}}
				>
					<IoMdArrowBack fill='#fff' fontSize={29} />
				</button>
			) : (
				<button
					onClick={() => {
						navigate(isAuth ? '/profile' : '/auth')
					}}
				>
					<AiOutlineUser fill='#fff' fontSize={28} />
				</button>
			)}
			<Hamburger />
		</header>
	)
}

export default Header
