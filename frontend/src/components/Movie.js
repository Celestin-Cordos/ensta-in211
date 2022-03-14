import './Movie.css';
export const Movie = ({ movie }) => {
  return (
    <div className="movie">
      <p>Titre : {movie.title} </p>
      <p>Date de sortie : {movie.release_date} </p>
    </div>
  );
};
