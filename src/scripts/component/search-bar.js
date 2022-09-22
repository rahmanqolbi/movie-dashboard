class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <form class="input-group row mx-auto container no-gutters my-4 px-0">
      <div class="col">
      <input class="form-control border-end-0 border rounded-pill rounded-end py-2 ps-3 pe-4" type="search" id="searchElement" placeholder="Search For Movie and TV Series..." />
      </div>
        <div class="col-auto">
          <button id="searchButtonElement" class="btn btn-light border-bottom-0 mx-0 border rounded-pill ms-n5 py-2 px-3" type="submit">
            <i class="bi bi-search"></i>
          </button>
        </div>
      </form>
    `;
  }
  get value() {
    return this.querySelector("#searchElement").value;
  }
}

customElements.define("search-bar", SearchBar);
