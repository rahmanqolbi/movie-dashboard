import { getCarousel, getNowPlaying, getPopular, getTrending, getAiringToday } from "./data/getMovieList";
import showMovie from "./view/navResult";
import { searchResult, showSearchResult } from "./view/searchResult";

const main = () => {
  getCarousel();
  getPopular("movie");
  getTrending("day");
  getNowPlaying();
  getAiringToday();
  searchResult("movie");

  const popularMovieTab = document.getElementById("popularMovieTab");
  const popularTVTab = document.getElementById("popularTVTab");
  const trendingTodayTab = document.getElementById("trendingTodayTab");
  const trendingWeekTab = document.getElementById("trendingWeekTab");
  const searchMovieTab = document.getElementById("searchMovieTab");
  const searchTVTab = document.getElementById("searchTVTab");
  const logo = document.querySelector(".navbar-brand");

  logo.addEventListener("click", () => {
    const searchPage = document.querySelector("#searchPage");
    searchPage.classList.add("d-none");
    const navBarResult = document.querySelector("#navBarResult");
    navBarResult.classList.add("d-none");
    const homePage = document.querySelector("#homePage");
    homePage.classList.remove("d-none");
  });

  const dropDownList = document.querySelectorAll(".dropdown-item");
  for (const item of dropDownList) {
    item.addEventListener("click", () => {
      switch (item.id) {
        case "popularMovie":
          showMovie("movie", "popular");
          break;
        case "nowPlayingMovie":
          showMovie("movie", "now_playing");
          break;
        case "upcomingMovie":
          showMovie("movie", "upcoming");
          break;
        case "topRatedMovie":
          showMovie("movie", "top_rated");
          break;
        case "popularTV":
          showMovie("tv", "popular");
          break;
        case "airingTV":
          showMovie("tv", "airing_today");
          break;
        case "onTV":
          showMovie("tv", "on_the_air");
          break;
        case "topRatedTV":
          showMovie("tv", "top_rated");
          break;
      }
    });
  }

  const navList = document.querySelectorAll(".nav-link");
  for (const item of navList) {
    item.addEventListener("click", () => {
      switch (item.id) {
        case "popularMovieTab":
          popularTVTab.classList.remove("active");
          popularMovieTab.classList.add("active");
          getPopular("movie");
          break;
        case "popularTVTab":
          popularMovieTab.classList.remove("active");
          popularTVTab.classList.add("active");
          getPopular("tv");
          break;
        case "trendingTodayTab":
          trendingWeekTab.classList.remove("active");
          trendingTodayTab.classList.add("active");
          getTrending("day");
          break;
        case "trendingWeekTab":
          trendingTodayTab.classList.remove("active");
          trendingWeekTab.classList.add("active");
          getTrending("week");
          break;
        case "searchMovieTab":
          searchTVTab.classList.remove("active");
          searchMovieTab.classList.add("active");
          showSearchResult("movie");
          break;
        case "searchTVTab":
          searchMovieTab.classList.remove("active");
          searchTVTab.classList.add("active");
          showSearchResult("tv");
          break;
      }
    });
  }
};

export default main;
