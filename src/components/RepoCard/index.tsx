import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { StarContext, InitialProps } from "../contexts/StarContext";
import {
  Container,
  TopSide,
  Badge,
  LikedStarIcon,
  BotSide,
  RepoIcon,
  StarIcon,
  ForkIcon,
} from "./styles";

interface Repo {
  id: number;
  username: string;
  reponame: string;
  description?: string;
  language?: string;
  stars: number;
  forks: number;
}

const RepoCard: React.FC<Repo> = ({
  id,
  username,
  reponame,
  description,
  language,
  stars,
  forks,
}) => {
  const { giveStar, removeStar } = useContext(StarContext);
  const [liked, setLiked] = useState(false);
  const languageClass = language ? language.toLowerCase() : "other";

  useEffect(() => {
    const starredList = localStorage.getItem("gitProfile:starred-repos");

    if (starredList) {
      const parsedList: InitialProps[] = Object.values(JSON.parse(starredList));

      const foundRepo = parsedList.find(
        (repo) => repo.id === id && repo.username === username
      );

      setLiked(foundRepo?.like ? true : false);
    } else {
      setLiked(false);
    }
  }, [id, username, reponame]);

  function handleStars() {
    if (liked) {
      setLiked(false);
      removeStar({ id, username });
    } else {
      setLiked(true);
      giveStar({ id, username });
    }
  }

  return (
    <Container liked={liked}>
      <Badge liked={liked} onClick={handleStars}>
        <LikedStarIcon liked={liked} />
      </Badge>
      <TopSide>
        <header>
          <RepoIcon />
          <Link to={`/${username}/${reponame}`}>{reponame}</Link>
        </header>

        <p>{description}</p>
      </TopSide>

      <BotSide>
        <ul>
          <li>
            <div className={`language ${languageClass}`} />
            <span>{language}</span>
          </li>
          <li>
            <StarIcon />
            <span>{stars}</span>
          </li>
          <li>
            <ForkIcon />
            <span>{forks}</span>
          </li>
        </ul>
      </BotSide>
    </Container>
  );
};

export default RepoCard;
