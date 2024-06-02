
import type { Metadata } from 'next'
import { Golos_Text } from 'next/font/google'
import { PropsWithChildren } from 'react'

import Providers from '@/providers/Providers'

import '@/assets/styles/globals.scss'

import { getSiteUrl } from '@/config/url.config'

import Header from '@/app/layout/header/Header'
import Sidebar from '@/app/layout/sidebar/Sidebar'
import { SITE_NAME } from '@/constants/seo.constants'
import { FaInstagram, FaOdnoklassniki, FaTelegram, FaVk } from 'react-icons/fa'
import Link from 'next/link'

export const metadata: Metadata = {
	icons: {
		icon: '/favicon.svg'
	},
	title: {
		absolute: SITE_NAME,
		template: `%s | ${SITE_NAME}`
	},
	metadataBase: new URL(getSiteUrl()),
	openGraph: {
		type: 'website',
		siteName: SITE_NAME,
		emails: ['info@rushMobile.ru']
	}
}

const golos = Golos_Text({
	weight: ['400', '500', '600', '700'],
	subsets: ['latin', 'cyrillic-ext'],
	display: 'swap',
	style: ['normal'],
	variable: '--font-golos'
})

export default function RootLayout({ children }: PropsWithChildren<unknown>) {
	return (
		<html lang='en' className={golos.variable}>
		<body>
		<Providers>
			<div className='bg-secondary'>
				<Header />
				<div
					className='grid grid-cols-[1fr,4fr] max-lg:grid-cols-[1fr] '

				>
					<Sidebar />
					<main className='p-12 pb-52 bg-bg-color rounded-tl-lg '>
						{children}
					</main>
				</div>
			</div>
		<footer>
			<div className="bg-white">
				<div className="container mx-auto py-8 px-4">
					<div className="grid grid-cols-4 gap-12">
						<div>
							<h3 className="text-black mb-1">Каталог</h3>
							<ul>
								<li>
									<Link href='/category/smartphones' className="hover:text-primary flex">
										Смартфоны
									</Link>
								</li>
								<li>
									<Link href='/category/laptops' className="hover:text-primary flex">
										Ноутбуки
									</Link>
								</li>
								<li>
									<Link href='/category/tablets' className="hover:text-primary flex">
										Планшеты
									</Link>
								</li>
								<li>
									<Link href='/category/accessories' className="hover:text-primary flex">
										Аксессуары
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-black mb-1">Доставка</h3>
							<ul>
								<li>
									<Link href='/delivery' className="hover:text-primary flex">
										Способы доставки
									</Link>
								</li>
								<li>
									<Link href='/delivery' className="hover:text-primary flex">
										Стоимость доставки
									</Link>
								</li>
								<li>
									<Link href='/delivery' className="hover:text-primary flex">
										Сроки доставки
									</Link>
								</li>
								<li>
									<Link href='/delivery' className="hover:text-primary flex">
										Отслеживание заказа
									</Link>
								</li>
							</ul>
						</div>
						<div>
							<h3 className="text-black mb-1">Контакты</h3>
							<ul>
								<li>Адрес: ул. Шамиля, г. Каспийск</li>
								<li>Телефон: +7 (999) 999-99-99</li>
								<li>Email: info@rushmobile.ru</li>
							</ul>
						</div>
						<div>
							<h3 className="text-black mb-1">Социальные сети</h3>
							<ul>
								<li>
									<Link href="#" className="hover:text-primary flex">
										ВКонтакте <FaVk className={'ml-1'} />
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-primary flex">
										Одноклассники <FaOdnoklassniki className={'ml-1'} />
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-primary flex">
										Instagram <FaInstagram className={'ml-1'} />
									</Link>
								</li>
								<li>
									<Link href="#" className="hover:text-primary flex">
										Telegram <FaTelegram className={'ml-1'} />
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
		</Providers>
		</body>
		</html>
	)
}
