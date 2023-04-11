import axios from 'axios'
import { IGenre } from '../shared/types/movie.types'
import { getGenresUrl } from '../configs/api.config'
import { axiosClassic } from '../api/interceptors'

export const GenreService = {
    async getAll(searchTerm?: string){
        return axiosClassic.get<IGenre[]>(getGenresUrl(''), {
            params: searchTerm ? {
                searchTerm,
            } : {}
        })
    }
}