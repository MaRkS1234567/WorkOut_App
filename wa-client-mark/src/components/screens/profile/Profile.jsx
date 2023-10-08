import { useProfile } from './useProfile'
import styles from './Profile.module.scss'
import stylesLayout from '../../layout/Layout.module.scss'
import cn from 'clsx'
import Header from '../../layout/header/Header'
import Loader from '../../ui/Loader'
import { AiOutlineUser } from 'react-icons/ai'
import Statistics from './statistics/Statistics'

const Profile = () => {
	const { data, isLoading } = useProfile()

	return (
		<>
			<div
				className={cn(stylesLayout.wrapper, stylesLayout.otherPage)}
				style={{ backgroundImage: `url('/images/auth_bg.jpeg')`, height: 356 }}
			>
				<Header />

				<div className={styles.center}>
					{isLoading ? (
						<Loader />
					) : (
						<>
							<AiOutlineUser size={40} />
							{/* <img
							src='images/header/user.svg'
							alt='Profile'
							height='56'
							draggable={false}
						/> */}
							<h1 className={stylesLayout.heading}>{data?.email}</h1>
						</>
					)}
				</div>
				<Statistics />
			</div>
			<div className={styles.before_after}>
				<div>
					<div className={styles.heading}>Before</div>
					<img src='/images/before.jpg' />
				</div>
				<div>
					<div className={styles.heading}>After</div>
					<img src='/images/after.jpg' />
				</div>
			</div>
		</>
	)
}

export default Profile
