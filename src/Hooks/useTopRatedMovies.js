/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import axiosInstance from '../Utils/Interceptor';
import { showErrorToast } from '../Utils/ReactToastify';
import { ADD_TOPRATED_MOVIES } from '../Redux/Slices/MovieSlice';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getTopRatedMovies();
    }, [])
  
    const getTopRatedMovies = async () => {
      try {
          const response = await axiosInstance.get('/movie/top_rated?page=1');
          dispatch(ADD_TOPRATED_MOVIES(response?.data?.results));
      } catch (error) {
          showErrorToast(error?.response?.data?.status_message)
      }
    }
  
}

export default useTopRatedMovies;
