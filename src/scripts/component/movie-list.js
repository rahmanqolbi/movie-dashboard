import "./movie-info.js";

class MovieList extends HTMLElement {
  set movies(movies) {
    this._movies = movies;
    this.render();
  }
  render() {
    if (this.id === "nowPlaying" || this.id === "airingToday") {
      for (let i = 0; i < 4; i++) {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.setAttribute("position", "vertical");
        movieItemElement.movie = this._movies[i];
        this.appendChild(movieItemElement);
      }
    } else if (this.id === "popular" || this.id === "trending") {
      document.querySelector(`#${this.id} .swiper-wrapper`).innerHTML = ``;
      this._movies.forEach((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.setAttribute("position", "horizontal");
        movieItemElement.movie = movie;
        movieItemElement.classList.add("swiper-slide");
        document.querySelector(`#${this.id} .swiper-wrapper`).appendChild(movieItemElement);
      });
    } else {
      this._movies.forEach((movie) => {
        const movieItemElement = document.createElement("movie-item");
        movieItemElement.setAttribute("position", "horizontal");
        movieItemElement.movie = movie;
        movieItemElement.classList.add("col-lg-2", "col-md-3", "col-sm-4", "col-6", "gy-3");
        this.appendChild(movieItemElement);
      });
    }
  }
}

customElements.define("movie-list", MovieList);

export default MovieList;
