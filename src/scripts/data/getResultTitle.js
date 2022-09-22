const getResultTitle = (type, category) => {
  if (type == "movie") {
    switch (category) {
      case "popular":
        return "Popular Movies";
      case "now_playing":
        return "Now Playing Movies";
      case "upcoming":
        return "Upcoming Movies";
      case "top_rated":
        return "Top Rated Movies";
    }
  } else if (type == "tv") {
    switch (category) {
      case "popular":
        return "Popular TV Shows";
      case "airing_today":
        return "TV Shows Airing Today";
      case "on_the_air":
        return "Currently Airing TV Shows";
      case "top_rated":
        return "Top Rated TV Shows";
    }
  }
};

export default getResultTitle;
