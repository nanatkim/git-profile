import React from "react";

import { Container, Main, LeftSide, RightSide, Repos } from "./styles";

import ProfileData from "../../components/ProfileData";
import RepoCard from "../../components/RepoCard";

const Home: React.FC = () => {
  return (
    <Container>
      <Main>
        <LeftSide>
          <ProfileData
            username={"nanatkim"}
            name={"Natsu"}
            avatarUrl={"https://github.com/nanatkim.png"}
            followers={887}
            following={7}
            company={"Company"}
            location={"Ceará, Brazil"}
            email={"natali@email.com"}
            blog={"linkedin.com/in/natali-brito"}
          />
        </LeftSide>

        <RightSide>
          <Repos>
            <h2>Starred repos</h2>
            <div>
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <RepoCard
                  key={n}
                  username={"nanatkim"}
                  reponame={"gitprofile"}
                  description={"a git profile code"}
                  language={n % 3 === 0 ? "JavaScript" : "Typescript"}
                  stars={8}
                  forks={2}
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
