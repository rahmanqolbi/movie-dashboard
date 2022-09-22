class MovieInfo extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  async render() {
    this.innerHTML = `
      <div class="modal fade" id="movieInfo" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body"></div>
            <div class="modal-footer"></div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("movie-info", MovieInfo);
