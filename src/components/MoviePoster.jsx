const MoviePoster = ({ title_es, title_en }) => {
  return (
    <div className="card">
      <div className="card_left">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/343086/h8fnwL1.png" />
      </div>
      <div className="card_right">
        <h1>
          <span>{title_es}</span>
          <br />
          <sub>{title_en}</sub>
        </h1>

        <div className="card_right__details">
          <ul>
            <li>2003</li>
            <li>111 min</li>
            <li>Action</li>
          </ul>
          <div className="card_right__review">
            <p>
              The lead character, called 'The Bride,' was a member of the Deadly
              Viper Assassination Squad, led by her lover 'Bill.' Upon realizing
              she was pregnant with Bill's child, 'The Bride' decided to escape
              her life as a killer. She fled to Texas, met a young man, who, on
              the day of their wedding rehearsal was gunned down by....
            </p>
          </div>
          <div className="card_right__button">
            <button target="_blank">WATCH TRAILER</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoviePoster;
