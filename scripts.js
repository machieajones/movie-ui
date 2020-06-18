const moviesDiv = document.getElementById('movies')
const movies = moviesDiv.querySelectorAll('.movie')

moviesDiv.addEventListener('scroll', () => {
	for (const movie of movies) {
		if (
			movie.getBoundingClientRect().left <= window.innerWidth * 0.75 &&
			movie.getBoundingClientRect().left > 0
		) {
			movie.classList.add('visible')
			handleContentChange(movie.dataset.movie)
		} else {
			movie.classList.remove('visible')
		}
	}
})

const contentDivs = document.querySelectorAll('.content')

const handleContentChange = id => {
	if (!id) return

	for (const contentDiv of contentDivs) {
		contentDiv.classList.remove('visible')
	}

	document.getElementById(id).classList.add('visible')

	document.body.dataset.movieselected = id
}
