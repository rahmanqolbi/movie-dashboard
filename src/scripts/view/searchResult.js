import axiosClient from "../api/apiClient";

let page = 1;
let type = "movie";
const searchResult = () => {
  const searchBar = document.querySelector("search-bar");
  searchBar.querySelector("#searchButtonElement").addEventListener("click", (event) => {
    event.preventDefault();
    showSearchResult(type);
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
      page += 1;
      if (searchBar.value) {
        getSearchResult(type, page, searchBar.value);
      }
    }
  });
};

const showSearchResult = (typeParam) => {
  const homePage = document.querySelector("#homePage");
  homePage.classList.add("d-none");
  const navBarResult = document.querySelector("#navBarResult");
  navBarResult.classList.add("d-none");
  const searchBar = document.querySelector("search-bar");
  const searchPage = document.querySelector("#searchPage");
  searchPage.classList.remove("d-none");
  const movieList = document.querySelector("#searchResult");
  movieList.innerHTML = ``;
  const resultTitle = document.querySelector("#resultTitle");
  resultTitle.innerText = `Result for "${searchBar.value}"`;

  page = 1;
  type = typeParam;
  if (searchBar.value) {
    getSearchResult(type, page, searchBar.value);
  }
};

const getSearchResult = (type, page, query) => {
  axiosClient
    .get(`/search/${type}`, {
      params: {
        query: query,
        page: page,
      },
    })
    .then((response) => {
      const movieList = document.querySelector("#searchResult");
      movieList.movies = response.data.results;
    });
};

export { searchResult, showSearchResult };
