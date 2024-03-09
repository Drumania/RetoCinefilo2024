const MoviePoster = ({
  title_es,
  title_en,
  director,
  description,
  picture,
}) => {
  return (
    <div className="movie-poster">
      {picture && <img src={picture} alt={title_es} />}

      <div>
        <h1>
          {title_es}
          <br />
          <div className="mp-subtitle">{title_en}</div>
        </h1>

        <p>{description}</p>

        {/* <button target="_blank">WATCH TRAILER</button> */}
      </div>
    </div>
  );
};

export default MoviePoster;
