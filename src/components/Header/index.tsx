import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { Container, GithubLogo, Title, SearchForm } from "./styles";

const Header: React.FC = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    navigate("/" + search.toLocaleLowerCase().trim());
  }

  return (
    <Container>
      <GithubLogo />
      <Title>
        <Link to={"/"}>Git Profile</Link>
      </Title>
      <SearchForm onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter username or username/repo..."
          value={search}
          onChange={(e) => setSearch(e.currentTarget.value)}
        />
      </SearchForm>
    </Container>
  );
};

export default Header;
