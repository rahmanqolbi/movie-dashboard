import axiosClient from "../api/apiClient";
import getResultTitle from "../data/getResultTitle";

const showMovies = (type, category) => {
  let page = 1;
  const homePage = document.querySelector("#homePage");
  homePage.classList.add("d-none");
  const searchPage = document.querySelector("#searchPage");
  searchPage.classList.add("d-none");
  const movieList = document.querySelector("#navBarResult");
  movieList.innerHTML = ``;
  movieList.innerHTML = `<h4>${getResultTitle(type, category)}</h4>`;
  movieList.classList.remove("d-none");
  getMovies(type, category, page);
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      page += 1;
      getMovies(type, category, page);
    }
  });
};

const getMovies = (type, category, page) => {
  const movieList = document.querySelector("#navBarResult");
  axiosClient
    .get(`/${type}/${category}`, {
      params: {
        page: page,
      },
    })
    .then((response) => {
      movieList.movies = response.data.results;
    });
};

export default showMovies;
