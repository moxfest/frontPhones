'use client'

import cn from 'clsx'
import Link from 'next/link'
import { FC, useState } from 'react'
import { FiLogIn, FiLogOut } from 'react-icons/fi'

import Loader from '@/ui/Loader'

import { useCategories } from '@/hooks/queries/useCategories'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useIsAdminPanel } from '@/hooks/useIsAdminPanel'

import { ADMIN_MENU } from './admin-menu.data'
import { convertToMenuItems } from './convert-to-menu-items'

const Sidebar: FC = () => {
	const { data, isLoading } = useCategories()

	const { user } = useAuth()
	const { logout } = useActions()

	const { isAdminPanel, pathname } = useIsAdminPanel()
	const [shadow, useShadow]=useState(true)
	return (
		<aside
			className='bg-secondary z-10  max-lg:hidden flex flex-col justify-between'
			style={{
				minHeight: 'calc(100% - 91px)',
				height: 'calc(100vh - 91px)'
			}}
		>
			<div>
				{isLoading ? (
					<Loader />
				) : data ? (
					<>
						<div className='text-xl text-black mt-4 mb-6 ml-6'>
							{isAdminPanel ? 'Меню: ' : 'Категории: '}👇
						</div>
						<ul>
							{(isAdminPanel ? ADMIN_MENU : convertToMenuItems(data)).map(
								(item,index) => (
									<li key={item.href}>
										<Link
											className={cn(
												'block text-lg my-3 px-10 hover:text-primary transition-colors duration-200',
												pathname === item.href ? 'text-primary' : 'text-black'
											)}
											href={item.href}
										>
											{item.label}
										</Link>
									</li>
								)
							)}
						</ul>
					</>
				) : (
					<div> Категории не обнаружены</div>
				)}
			</div>

			{user? (
				<button
					className='text-black flex items-center ml-10 mb-10 hover:text-primary transition-colors duration-200'
					onClick={() => logout()}
				>
					<FiLogOut className={'scale-150'} />
					<span className='ml-2'>Выйти из аккаунта</span>
				</button>
			): (<Link className={'text-black flex items-center mb-10 ml-10 hover:text-primary transition-colors duration-200 '}
			href={'/auth'}
			>
				<FiLogIn className={'scale-150'}/>
				<span className='ml-2'>Войти/Зарегистрироваться</span>
			</Link>)}
		</aside>
	)
}

export default Sidebar
