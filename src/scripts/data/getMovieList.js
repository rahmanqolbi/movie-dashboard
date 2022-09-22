import axiosClient from "../api/apiClient";
import Swiper from "swiper/bundle";

const getCarousel = () => {
  const carouselElement = document.querySelector("#swiperCarousel");
  axiosClient.get(`/discover/movie`).then((response) => {
    carouselElement.carousel = response.data.results;
    const carouselSlider = new Swiper(".carousel-slider", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 2500,
      },
      navigation: {
        nextEl: ".carousel-next",
        prevEl: ".carousel-prev",
      },
    });
  });
};

const getTrending = (time) => {
  const trendingListElement = document.querySelector("#trending");
  axiosClient.get(`/trending/movie/${time}`).then((response) => {
    trendingListElement.movies = response.data.results;
    const trendingSlider = new Swiper(".trending-slider", {
      slidesPerView: 2,
      spaceBetween: 30,
      navigation: {
        nextEl: ".trending-next",
        prevEl: ".trending-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });
};

const getAiringToday = () => {
  const airingListElement = document.querySelector("#airingToday");
  axiosClient.get(`/tv/airing_today`).then((response) => {
    airingListElement.movies = response.data.results;
  });
};

const getNowPlaying = () => {
  const nowPlayingListElement = document.querySelector("#nowPlaying");
  axiosClient.get(`/movie/now_playing`).then((response) => {
    nowPlayingListElement.movies = response.data.results;
  });
};

const getPopular = (category) => {
  const popularListElement = document.querySelector("#popular");
  axiosClient.get(`/${category}/popular`).then((response) => {
    popularListElement.movies = response.data.results;
    const popularSlider = new Swiper(".popular-slider", {
      slidesPerView: 2,
      spaceBetween: 20,
      navigation: {
        nextEl: ".popular-next",
        prevEl: ".popular-prev",
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  });
};

export { getCarousel, getPopular, getTrending, getNowPlaying, getAiringToday };
