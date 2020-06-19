const moviesDiv = document.getElementById('movies')
const movies = moviesDiv.querySelectorAll('.movie')

moviesDiv.addEventListener('scroll', () => {
	for (const movie of movies) {
		if (
			movie.getBoundingClientRect().left <= window.innerWidth * 0.75 &&
			movie.getBoundingClientRect().left > 0
		) {
			document.body.dataset.movieselected = movie.dataset.movie
		}
	}
})
