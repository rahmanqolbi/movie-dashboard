class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }
  render() {
    this.innerHTML = `
      <nav class="navbar navbar-dark navbar-expand-md bg-primary">
        <div class="container-fluid container">
          <a class="navbar-brand fw-bold text-white" href="#"><i class="bi bi-tv-fill"></i> MOVIEKU</a>
          <div class="bg-transparent border-0 d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <i class="bi bi-list"></i>
          </div>
          <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header justify-content-between">
              <a class="navbar-brand fw-bold text-white" href="#"><i class="bi bi-tv-fill"></i> MOVIEKU</a>
              <button type="button" class="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle mx-lg-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Movies</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="popularMovie" href="#">Popular</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="nowPlayingMovie" href="#">Now Playing</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="upcomingMovie" href="#">Upcoming</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="topRatedMovie" href="#">Top Rated</a></li>
                  </ul>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle mx-lg-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">TV Shows</a>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="popularTV" href="#">Popular</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="airingTV" href="#">Airing Today</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="onTV" href="#">On TV</a></li>
                    <li><a class="dropdown-item" data-bs-dismiss="offcanvas" id="topRatedTV" href="#">Top Rated</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define("app-bar", AppBar);
