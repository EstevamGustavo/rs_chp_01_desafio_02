import { useState } from "react";

import "./styles/global.scss";

import "./styles/sidebar.scss";
import "./styles/content.scss";
import { GenreResponseProps, SideBar } from "./components/sidebar";
import { Content } from "./components/content";

export function App() {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>(
    {} as GenreResponseProps
  );

  function handleClickButton(gender: GenreResponseProps) {
    setSelectedGenre(gender);
  }

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      <SideBar
        handleClickButton={handleClickButton}
        selectedGenre={selectedGenre}
      />

      <Content selectedGenre={selectedGenre} />
    </div>
  );
}
