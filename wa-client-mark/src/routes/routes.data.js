import Home from '../components/screens/home/Home'
import Auth from '../components/screens/auth/Auth'
import NewWorkout from '../components/screens/new-workout/NewWorkout'
import Profile from '../components/screens/profile/Profile'
import NewExercise from '../components/screens/new-exercise/NewExercise'
import Workout from '../components/screens/workout/detail/Workout'
import ListWorkouts from '../components/screens/workout/ListWorkouts'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	},
	{
		path: '/new-workout',
		component: NewWorkout,
		isAuth: true
	},
	{
		path: '/new-exercise',
		component: NewExercise,
		isAuth: true
	},
	{
		path: '/profile',
		component: Profile,
		isAuth: false
	},
	{
		path: '/workout/:id',
		component: Workout,
		auth: true
	},
	{
		path: '/workouts',
		component: ListWorkouts,
		isAuth: true
	},
	{
		path: '/exercise/:id',
		component: SingleExercise,
		isAuth: true
	}
]
