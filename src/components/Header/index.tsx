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

  function handleNavigate() {
    setSearch("");
    navigate("/");
  }

  return (
    <Container>
      <GithubLogo />
      <Title onClick={handleNavigate}>
        Git Profile
      </Title>
      <SearchForm onSubmit={handleSubmit}>
        <input
          aria-label="username/reponame"
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
