/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../Utils/Interceptor';
import { showErrorToast } from '../Utils/ReactToastify';
import { ADD_POPULAR_MOVIES } from '../Redux/Slices/MovieSlice';

const usePopularMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
      getPopularMovies();
    }, [])
  
    const getPopularMovies = async () => {
      try {
          const response = await axiosInstance.get('/movie/popular?page=1');
          dispatch(ADD_POPULAR_MOVIES(response?.data?.results));
      } catch (error) {
          showErrorToast(error?.response?.data?.status_message)
      }
    }
  
}

export default usePopularMovies;
