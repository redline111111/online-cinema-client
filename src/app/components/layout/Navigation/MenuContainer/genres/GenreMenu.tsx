
import { FC } from 'react'
import Menu from '../Menu'

import { usePopularGenres } from './usePopularGenres'

const GenreMenu: FC = () => {
	const {isLoading, data} = usePopularGenres()
	return isLoading ? <div>Loading...</div> : 
	<Menu menu={{title: 'Popular genres', items: data || []}}/>
}

export default GenreMenu
