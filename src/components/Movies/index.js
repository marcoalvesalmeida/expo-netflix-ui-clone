import React from 'react';
import PropTypes from 'prop-types';

import {
  Container, Label, MovieScroll, MovieCard, MoviePoster, PreviewPoster,
} from './styles';

const renderMovie = (movie) => (
  <MoviePoster resizeMode="cover" source={movie} />
);

const renderPreview = (movie) => (
  <PreviewPoster resizeMode="cover" source={movie} />
);

const Movies = ({ label, item, type }) => (
  <Container>
    <Label>{label}</Label>
    <MovieScroll horizontal>
      {item.map((movie, i) => (
        <MovieCard key={String(i)}>
          { type === 'preview' ? renderPreview(movie) : renderMovie(movie) }
        </MovieCard>
      ))}
    </MovieScroll>
  </Container>
);

Movies.propTypes = {
  label: PropTypes.string.isRequired,
  item: PropTypes.arrayOf(PropTypes.number).isRequired,
  type: PropTypes.string.isRequired,
};

export default Movies;
