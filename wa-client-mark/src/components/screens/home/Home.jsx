import './App.css'
import Layout from '../../layout/Layout'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import styles from './Home.module.scss'
import { useAuth } from '../../../hooks/useAuth'
import Statistics from '../profile/statistics/Statistics'

function Home() {
	const navigate = useNavigate()

	return (
		<Layout bgImage='/images/home_bg.jpeg'>
			<Button clickHandler={() => navigate('/new-workout')}>New</Button>
			<h1 className={styles.heading}>EXERCISES FOR THE SHOULDERS</h1>
			<Statistics />
		</Layout>
	)
}
export default Home
