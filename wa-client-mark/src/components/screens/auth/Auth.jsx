import { useEffect, useState } from 'react'
import Layout from '../../layout/Layout'
import { useForm } from 'react-hook-form'
import Button from '../../ui/button/Button'
import Field from '../../ui/field/Field'
import Loader from '../../ui/Loader'
import styles from './Auth.module.scss'
import { useMutation } from '@tanstack/react-query'
import AuthService from '../../../services/auth.service'
import { useAuth } from '../../../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
import { useAuthPage } from './useAuthPage'

const Auth = () => {
	const { setType, register, handleSubmit, errors, isLoading, onSubmit } =
		useAuthPage()
	return (
		<>
			<Layout heading='Sign in' bgImage='/images/auth_bg.jpeg' />
			<div className='wrapper-inner-page'>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Field
						error={errors?.email?.message}
						type='email'
						name='email'
						register={register}
						options={{
							...register('email', {
								required: 'Email is required'
							})
						}}
						placeholder='Enter email'
					/>
					<Field
						error={errors?.password?.message}
						type='password'
						name='password'
						register={register}
						options={{
							...register('password', {
								required: 'Password is required'
							})
						}}
						placeholder='Enter password'
					/>
					<div className={styles.wrapperButtons}>
						<Button clickHandler={() => setType('login')}>Sign in</Button>
						<Button clickHandler={() => setType('register')}>Sign up</Button>
					</div>
				</form>
			</div>
		</>
	)
}

export default Auth
