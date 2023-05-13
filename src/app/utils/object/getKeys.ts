import { IActorEditInput } from '@/components/screens/admin/actor/actor-edit.interface'
import { IGenreEditInput } from '@/components/screens/admin/genre/genre-edit.interface'
import { IMovieEditInput } from '@/components/screens/admin/movie/movie-edit.interface'

export const getKeys = <
	T = IGenreEditInput | IActorEditInput | IMovieEditInput
>(
	obj: IGenreEditInput | IActorEditInput | IMovieEditInput
) => Object.keys(obj) as Array<keyof T>
