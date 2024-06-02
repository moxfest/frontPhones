import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import { BsSearch } from 'react-icons/bs'

const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState<string>('')

	const { push } = useRouter()

	return (
		<div>
			<div
				className='border border-solid border-gray/10 grid w-1/3 max-xl:w-[100%] rounded-xl overflow-hidden'
				style={{
					gridTemplateColumns: '1fr 0.1fr'
				}}
			>
				<input
					className='bg-gray text-sm py-2 px-4 text-white outline-none'
					value={searchTerm}
					onChange={e => setSearchTerm(e.target.value)}
					placeholder='Поиск...'
				/>
				<button
					onClick={() => push(`/explorer?searchTerm=${searchTerm}`)}
					className='bg-primary text-white flex items-center justify-center p-2.5'
				>
					<BsSearch />
				</button>
			</div>
		</div>
	)
}

export default Search
