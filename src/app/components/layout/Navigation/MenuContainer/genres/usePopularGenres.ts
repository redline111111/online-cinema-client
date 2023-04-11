import { GenreService } from "../../../../../services/genre.service"
import {useQuery} from 'react-query'
import { getGenreUrl } from "../../../../../configs/url.config"
import { IMenuItem } from "../menu.interface"

export const usePopularGenres = () => {
	const queryData = useQuery('popular genre menu', () => GenreService.getAll(), {
		select: ({data}) => data.map(genre => ({
			icon: genre.icon,
			link: getGenreUrl(genre.slug),
			title: genre.name
		} as IMenuItem)).splice(0, 4)
	})
	return queryData
}
