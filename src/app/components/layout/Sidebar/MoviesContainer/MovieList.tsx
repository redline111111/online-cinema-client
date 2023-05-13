import Link from 'next/link'
import { FC } from 'react'

import { IMovieList } from './movie.types'
import MovieItem from './MovieItem'

import styles from './MovieList.module.scss'

const MovieList: FC<{ list: IMovieList }> = ({
	list: { link, movies, title },
}) => {
	return (
		<div className={styles.list}>
			<div className={styles.heading}>{title}</div>
			{movies.map(movie => (
				<MovieItem key={movie._id} movie={movie} />
			))}
			<Link href={link}>
				<a className={styles.button}>{link === '/trending' ? 'All trending movies' : 'All popular movies'}</a>
			</Link>
		</div>
	)
}

export default MovieList
