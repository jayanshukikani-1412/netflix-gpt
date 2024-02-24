/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axiosInstance from '../Utils/Interceptor';
import { showErrorToast } from '../Utils/ReactToastify';
import { ADD_NOW_PLAYING_MOVIES } from '../Redux/Slices/MovieSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    getNowPlayingMovies();
  }, [])

  const getNowPlayingMovies = async () => {
    try {
        const response = await axiosInstance.get('/movie/now_playing?page=1');
        dispatch(ADD_NOW_PLAYING_MOVIES(response?.data?.results));
    } catch (error) {
        showErrorToast(error?.response?.data?.status_message)
    }
  }

}

export default useNowPlayingMovies
