import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Main,
  LeftSide,
  RightSide,
  Repos,
  ErrorWrapper,
  StarIcon,
  Tab,
} from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";
import { APIRepo, APIUser } from "../../@types";
import Spinner from "../../components/Spinner";

interface Data {
  user?: APIUser;
  repos?: APIRepo[];
  error?: string;
}

const Home: React.FC = () => {
  const { username = "nanatkim" } = useParams();
  const [data, setData] = useState<Data>();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    Promise.all([
      fetch(`https://api.github.com/users/${username}`),
      fetch(`https://api.github.com/users/${username}/starred`),
    ]).then(async (responses) => {
      const [userResponse, reposResponse] = responses;

      if (userResponse.status === 404) {
        setData({ error: "User not found!" });
        return;
      }

      const user = await userResponse.json();
      const repos = await reposResponse.json();

      setData({
        user,
        repos,
      });
      setLoading(false);
    });
  }, [username]);

  if (data?.error) {
    return <ErrorWrapper>{data.error}</ErrorWrapper>;
  }

  if (!data?.user || !data?.repos || loading) {
    return (
      <Spinner />
    );
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
            company={data.user.company}
            location={data.user.location}
            email={data.user.email}
            blog={data.user.blog}
            bio={data.user.bio}
          />
        </LeftSide>

        <RightSide>
          <Tab className="mobile">
            <TabContent />
            <span className="line" />
          </Tab>

          <Repos>
            <div>
              {data.repos.map((item) => (
                <RepoCard
                  key={item.id}
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
        </RightSide>
      </Main>
    </Container>
  );
};

export default Home;
