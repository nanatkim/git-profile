import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  StarIcon,
  Tab,
} from "./styles";

import api from "../../services/api";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import { APIRepo, APIUser, Error } from "../../@types";
import Spinner from "../../components/Spinner";
import Map from "../../components/Map";
import NotFound from "../../components/NotFound";
import { StarProvider } from "../../components/contexts/StarContext";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: Error;
}

const Home: React.FC = () => {
  const { username = "nanatkim" } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      api.get<APIUser>(`users/${username}`),
      api.get<APIRepo[]>(`users/${username}/starred`),
    ])
      .then(async (responses) => {
        const [userResponse, reposResponse] = responses;

        setData({
          user: userResponse.data,
          repos: reposResponse.data,
        });

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
  }, [username]);

  if (data?.error) {
    return <NotFound message={data.error.message} status={data.error.status} />;
  }

  if (!data?.user || !data?.repos || loading) {
    return <Spinner />;
  }

  const TabContent = () => (
    <div className="content">
      <StarIcon />
      <span className="label">Starred</span>
      <span className="number">{data.repos?.length}</span>
    </div>
  );

  return (
    <Container>
      <Tab className="desktop">
        <div className="wrapper">
          <span className="offset" />
          <TabContent />
        </div>

        <span className="line" />
      </Tab>

      <Main>
        <LeftSide>
          <ProfileData
            username={data.user.login}
            name={data.user.name}
            avatarUrl={data.user.avatar_url}
            followers={data.user.followers}
            following={data.user.following}
            url={data.user.html_url}
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
          />
          {data.user.location && <Map location={data.user.location} />}
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <StarProvider>
            <Repos>
              <div>
                {data.repos.map((item) => (
                  <RepoCard
                    key={item.id}
                    id={item.id}
                    username={item.owner.login}
                    reponame={item.name}
                    description={item.description}
                    language={item.language}
                    stars={item.stargazers_count}
                    forks={item.forks_count}
                  />
                ))}
              </div>
            </Repos>
          </StarProvider>
        </RightSide>
      </Main>
    </Container>
  );
};

export default Home;
