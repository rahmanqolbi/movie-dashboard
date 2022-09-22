import axios from "axios";
import axiosClient from "../api/apiClient";

const getGenreList = () => {
  const tvGenre = axiosClient.get("/genre/tv/list");
  const movieGenre = axiosClient.get("/genre/movie/list");
  return Promise.all([tvGenre, movieGenre]).then(
    axios.spread((...responses) => {
      const tv = responses[0].data.genres;
      const movie = responses[1].data.genres;
      let genreList = [];
      genreList = [...tv, ...movie];
      genreList = Object.values(
        genreList.reduce((i, j) => {
          i[j.id] = i[j.id] ? i[j.id] : j;
          return i;
        }, {})
      );
      return genreList;
    })
  );
};

const getGenre = async (id) => {
  let genre;
  await getGenreList().then((data) => {
    data.forEach((genreItem) => {
      if (genreItem.id == id) {
        genre = genreItem.name;
      }
    });
  });
  return genre;
};

export default getGenre;
