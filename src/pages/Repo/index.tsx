import React from "react";
import {Link} from 'react-router-dom';
import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  GithubIcon,
  LinkButton,
} from "./styles";

const Repo: React.FC = () => {
  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={"username"} to={"/nanatkim"}>
          nanatkim
        </Link>

        <span>/</span>

        <Link className={"reponame"} to={"/nanatkim/git-profile"}>
          git-profile
        </Link>
      </BreadCrumb>

      <p>contains git profile code</p>

      <Stats>
        <li>
          <StarIcon />
          <b>9</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>0</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={"https://github.com/nanatkim/git-profile"}>
        <GithubIcon />
        <span>view on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
