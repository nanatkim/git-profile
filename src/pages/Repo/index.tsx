import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Card,
  BreadCrumb,
  RepoIcon,
  Stats,
  StarIcon,
  ForkIcon,
  GithubIcon,
  LinkButton,
} from "./styles";

import api from "../../services/api";

import { APIRepo, Error } from "../../@types";
import Spinner from "../../components/Spinner";
import NotFound from "../../components/NotFound";

interface Data {
  repo?: APIRepo;
  error?: Error;
}

const Repo: React.FC = () => {
  const { username, reponame } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    api
      .get<APIRepo>(`repos/${username}/${reponame}`)
      .then(async (response) => {
        setData({ repo: response.data });

        setLoading(false);
      })
      .catch((error) => {
        if (error.response) {
          setData({
            error: {
              message: error.response.data.message,
              status: error.response.status,
            },
          });
        }

        setLoading(false);
      });
  }, [reponame, username]);

  if (data?.error) {
    return <NotFound message={data.error.message} status={data.error.status} />;
  }

  if (!data?.repo || loading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Card>
        <BreadCrumb>
          <RepoIcon />
          <Link className={"username"} to={"/" + username}>
            {username}
          </Link>

          <span>/</span>

          <Link className={"reponame"} to={`/${username}/${reponame}`}>
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
      </Card>
    </Container>
  );
};

export default Repo;
