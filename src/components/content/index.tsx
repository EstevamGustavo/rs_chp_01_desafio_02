import { FC, useEffect, useState } from "react";
import { api } from "../../services/api";
import { MovieCard } from "../MovieCard";
import { GenreResponseProps } from "../sidebar";
import "../../styles/content.scss";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

type ContentPropType = {
  selectedGenre: GenreResponseProps;
};

export const Content: FC<ContentPropType> = ({ selectedGenre }) => {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  useEffect(() => {
    api
      .get<MovieProps[]>(`movies/?Genre_id=${selectedGenre.id}`)
      .then((response: any) => {
        setMovies(response.data);
      });
  }, [selectedGenre]);

  return (
    <div className="container">
      <header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </header>

      <main>
        <div className="movies-list">
          {movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
