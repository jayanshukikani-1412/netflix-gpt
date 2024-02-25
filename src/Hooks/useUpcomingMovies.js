/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../Utils/Interceptor';
import { showErrorToast } from '../Utils/ReactToastify';
import { ADD_UPCOMING_MOVIES } from '../Redux/Slices/MovieSlice';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getUpcomingMovies();
    }, [])
  
    const getUpcomingMovies = async () => {
      try {
          const response = await axiosInstance.get('/movie/popular?page=1');
          dispatch(ADD_UPCOMING_MOVIES(response?.data?.results));
      } catch (error) {
          showErrorToast(error?.response?.data?.status_message)
      }
    }
  
}

export default useUpcomingMovies
