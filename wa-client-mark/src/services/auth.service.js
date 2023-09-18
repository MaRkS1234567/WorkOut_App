import Cookies from 'js-cookie'
import { $axios } from '../api'

class AuthService {
	async main(type, email, password) {
		try {
			const { data } = await $axios.post(`users/${type}`, {
				email,
				password
			})

			if (data.token) Cookies.set('mark', data.token)
			return data
		} catch (error) {
			throw new Error(error)
		}
	}
}

export default new AuthService()
