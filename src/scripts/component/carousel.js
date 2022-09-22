import getGenre from "../data/getGenre";

class Carousel extends HTMLElement {
  set carousel(movies) {
    this._movies = movies;
    this.render();
  }
  render() {
    this.innerHTML = `
      <div class="swiper carousel-slider mb-4 rounded-4">
          <div class="swiper-wrapper"></div>
          <div class="swiper-button-next carousel-next"></div>
          <div class="swiper-button-prev carousel-prev"></div>
        </div>
    `;
    this.setCarouselItem();
  }
  setCarouselItem() {
    this._movies.forEach(async (movie) => {
      const genre = [];
      for (const id of movie.genre_ids) {
        genre.push(await getGenre(id));
      }
      const carouselItem = document.querySelector(".swiper-wrapper");
      carouselItem.innerHTML += `
        <div class="swiper-slide">
          <img src="http://image.tmdb.org/t/p/original/${movie["backdrop_path"]}" loading="lazy" class="w-100"/>
          <div class="overlay-image px-3 p-1 p-md-4 d-flex flex-column justify-content-end">
            <h5 class="fw-semibold">${movie.title}</h5>
            <p>${genre
              .map((item) => {
                return `<span class="badge rounded-pill text-bg-primary">${item}</span>`;
              })
              .join(" ")}</p>
          </div>
        </div>
      `;
    });
  }
}

customElements.define("carousel-element", Carousel);
