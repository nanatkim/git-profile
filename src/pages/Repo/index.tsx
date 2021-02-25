import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  GithubIcon,
  LinkButton,
  ErrorWrapper,
} from "./styles";

import api from "../../services/api";

import { APIRepo } from "../../@types";
import Spinner from "../../components/Spinner";

interface Data {
  repo?: APIRepo;
  error?: string;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      api
        .get<APIRepo>(`repos/${username}/${reponame}`)
        .then(async (response) => {
          if (response.status === 404) {
            setData({ error: "Repo not found!" });
            return;
          }

          setData({ repo: response.data });
          setLoading(false);
        });
    } catch (error) {
      setData({ error });
      setLoading(false);
    }
  }, [reponame, username]);

  if (data?.error) {
    return <ErrorWrapper>{data.error}</ErrorWrapper>;
  }

  if (!data?.repo || loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <BreadCrumb>
        <RepoIcon />
        <Link className={username} to={"/" + username}>
          {username}
        </Link>

        <span>/</span>

        <Link className={reponame} to={`/${username}/${reponame}`}>
          {reponame}
        </Link>
      </BreadCrumb>

      <p>{data?.repo?.description}</p>

      <Stats>
        <li>
          <StarIcon />
          <b>{data?.repo?.stargazers_count}</b>
          <span>stars</span>
        </li>
        <li>
          <ForkIcon />
          <b>{data?.repo?.forks_count}</b>
          <span>forks</span>
        </li>
      </Stats>

      <LinkButton href={data?.repo?.html_url}>
        <GithubIcon />
        <span>view on github</span>
      </LinkButton>
    </Container>
  );
};

export default Repo;
