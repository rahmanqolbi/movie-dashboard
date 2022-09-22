import getGenre from "../data/getGenre";

class MovieItem extends HTMLElement {
  connectedCallback() {
    this.position = this.getAttribute("position");
    this.render();
  }
  set movie(movie) {
    this._movie = movie;
    this.render();
  }
  async render() {
    this._genre = [];
    if (this._movie.genre_ids) {
      for (const id of this._movie.genre_ids) {
        this._genre.push(await getGenre(id));
      }
    }
    if (this.position == "horizontal") {
      this.innerHTML = `
      <div class="card h-100" data-bs-toggle="modal" role="button" data-bs-target="#movieInfo">
        <img src="${!this._movie.poster_path || this._movie.poster_path == "undefined" ? `https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg?20160324051252` : `http://image.tmdb.org/t/p/w300/${this._movie.poster_path}`}" loading="lazy" class="card-img-top" alt="${this._movie.title}" />
        <div class="card-body">
          <h6><i class="bi bi-star-fill"></i> ${this._movie.vote_average}</h6>
          <h6 class="card-title">${this._movie.title ? `${this._movie.title}` : `${this._movie.name}`}</h6>
          <p class="card-text">${this._movie.release_date ? `${this._movie.release_date}` : `${this._movie.first_air_date}`}</p>
        </div>
      </div>
      `;
    } else if (this.position == "vertical") {
      this.innerHTML = `
      <div class="card flex-row mb-2 rounded-2" role="button" data-bs-toggle="modal" data-bs-target="#movieInfo">
        <img class="w-25 rounded-start" src="http://image.tmdb.org/t/p/w300/${this._movie.poster_path}" alt="" />
        <div class="card-body">
          <h6 class="card-title">${this._movie.title ? `${this._movie.title}` : `${this._movie.name}`}</h6>
          <h6><i class="bi bi-star-fill"></i> ${this._movie.vote_average}</h6>
        </div>
      </div>
      `;
    }
    this.addEventListener("click", () => {
      const movieInfo = document.querySelector(".modal-body");
      movieInfo.innerHTML = `
      <div class="container-fluid">
        <div class="row">
          <div class="col-4">
            <img src="${!this._movie.poster_path || this._movie.poster_path == "undefined" ? `https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg?20160324051252` : `http://image.tmdb.org/t/p/w300/${this._movie.poster_path}`}" loading="lazy" class="card-img-top" alt="${this._movie.title}" />
          </div>
          <div class="col-8">
            <h4 class="">${this._movie.title ? `${this._movie.title}` : `${this._movie.name}`}</h4>
            <div class="d-flex justify-content-between">
              <h6><i class="bi bi-star-fill"></i> ${this._movie.vote_average}</h6>
              <p class="card-text">${this._movie.release_date ? `${this._movie.release_date}` : `${this._movie.first_air_date}`}</p>
            </div>
            <p>${this._genre
              .map((item) => {
                return `<span class="badge text-bg-primary">${item}</span>`;
              })
              .join(" ")}</p>
            <p>${this._movie.overview}</p>
          </div>
        </div>
      </div>
      `;
    });
  }
}

customElements.define("movie-item", MovieItem);
