import Link from 'next/link'
import { FaLock } from 'react-icons/fa'

import FavoriteButton from '@/ui/catalog/product-item/FavoriteButton'

import { IProduct } from '@/types/product.interface'

import { convertPrice } from '@/utils/convertPrice'

import AddToCartInline from './AddToCartInline'

interface IProductInformation {
	product: IProduct
}

export default function ProductInformation({ product }: IProductInformation) {
	return (
		<div className='bg-white rounded-lg shadow-md p-6 relative h-max'>
			<div className='text-3xl font-semibold'>
				{convertPrice(product.price)}
			</div>
			<div className='mt-2'>
				доставка 200 рублей{' '}
				<Link href='/' className='text-aqua font-semibold ml-2'>
					Детали
				</Link>
			</div>
			<span className='opacity-50 mt-1 text-sm block'>
				ндфл включен
			</span>
			<div className='mt-4 text-sm'>
				<span className='opacity-50 mr-1'>Ближайшая доставка</span> сегодня
			</div>
			<AddToCartInline product={product} />
			<p className='flex items-center mt-2 opacity-40 text-sm'>
				<FaLock className='mr-2' /> Безопасная транзакция
			</p>
			<div className='absolute top-6 right-6'>
				<FavoriteButton productId={product.id} />
			</div>
		</div>
	)
}
