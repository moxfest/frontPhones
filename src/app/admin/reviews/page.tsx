import Reviews from './Reviews'
import { NO_INDEX_PAGE } from '@/constants/seo.constants'

export const metadata = {
	title: 'отзывы',
	...NO_INDEX_PAGE
}

export default function ReviewPage() {
	return <Reviews />
}
