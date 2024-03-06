const MoviePoster = ({ title_es, title_en }) => {
  return (
    <div className="movie-poster">
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png"
        alt={title_es}
      />

      <div>
        <h1>
          <span>{title_es}</span>
          <br />
          <sub>{title_en}</sub>
        </h1>

        <ul className="mp-details">
          <li>2003</li>
          <li>111 min</li>
          <li>Action</li>
        </ul>

        <p>
          The lead character, called 'The Bride,' was a member of the Deadly
          Viper Assassination Squad, led by her lover 'Bill.' Upon realizing she
          was pregnant with Bill's child, 'The Bride' decided to escape her life
          as a killer. She fled to Texas, met a young man, who, on the day of
          their wedding rehearsal was gunned down by....
        </p>

        <button target="_blank">WATCH TRAILER</button>
      </div>
    </div>
  );
};

export default MoviePoster;
