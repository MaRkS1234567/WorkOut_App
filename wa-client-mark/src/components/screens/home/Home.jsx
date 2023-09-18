import './App.css'
import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'

function Home() {
	const navigate = useNavigate()

	const { isAuth } = useAuth()

	return (
		<Layout bgImage='/images/home_bg.jpeg'>
			<Button clickHandler={() => navigate(!isAuth ? '/auth' : '/new-workout')}>
				{!isAuth ? 'Sign in' : 'New workout'}
			</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
		</Layout>
	)
}
export default Home
