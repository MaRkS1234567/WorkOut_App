import styles from './Alert.module.scss'
import cn from 'clsx'

export const Alert = ({ type = 'success', text }) => {
	return <div className={cn(styles.alert, styles[type])}>{text}</div>
}
