/* eslint-disable react-hooks/exhaustive-deps */
import  { useEffect } from "react";
import { useDispatch } from "react-redux";
import axiosInstance from "../Utils/Interceptor";
import { showErrorToast } from "../Utils/ReactToastify";
import { SET_TRAILER_DATA } from "../Redux/Slices/MovieSlice";

const useGetMovieTrailer = (id) => {
  const dispatch = useDispatch();

  const getMovieTrailerData = async () => {
    try {
      const response = await axiosInstance.get(`/movie/${id}/videos`);
      const trailerData = response.data.results.find(
        (video) => video.type === "Trailer"
      );
      dispatch(SET_TRAILER_DATA(trailerData));
    } catch (error) {
      showErrorToast(error?.response?.data?.status_message);
    }
  };

  useEffect(() => {
    getMovieTrailerData();
  }, []);
};

export default useGetMovieTrailer;
