import React from 'react';

import { Container, Label, MovieScroll, MovieCard, MoviePoster } from './styles';

const Movies = ({ label, item }) => {
	return (
		<Container>
			<Label>{label}</Label>
			<MovieScroll horizontal>
				{item.map((movie, item) => {
					return (
						<MovieCard key={String(item)}>
							<MoviePoster resizeMode='cover' source={movie} />
						</MovieCard>
					)
				})}
			</MovieScroll>
		</Container>
	)
}

export default Movies;