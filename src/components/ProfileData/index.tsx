import React from "react";

import {
  Container,
  Flex,
  Avatar,
  Row,
  PeopleIcon,
  Column,
  CompanyIcon,
  LocationIcon,
  EmailIcon,
  BlogIcon,
  Url,
  UrlIcon,
} from "./styles";

interface User {
  username: string;
  name: string;
  avatarUrl: string;
  followers: number;
  following: number;
  url: string;
  company?: string;
  location?: string;
  email?: string;
  blog?: string;
  bio?: string;
}

const ProfileData: React.FC<User> = ({
  username,
  name,
  avatarUrl,
  followers,
  following,
  url,
  company,
  location,
  email,
  blog,
  bio,
}) => {
  return (
    <Container>
      <Flex>
        <Avatar src={avatarUrl} alt={username} />

        <div>
          <h1>{name}</h1>
          <h2>{username}</h2>
        </div>
      </Flex>

      <Column>
        <li>{bio}</li>
      </Column>

      <Row>
        <li>
          <PeopleIcon />
          <b>{followers}</b>
          <span>followers</span>
          <span>·</span>
        </li>
        <li>
          <b>{following}</b>
          <span>following</span>
        </li>
      </Row>

      <Column>
        {url && (
          <li>
            <UrlIcon />
            <Url href={url}>{url}</Url>
          </li>
        )}
        {company && (
          <li>
            <CompanyIcon />
            <span>{company}</span>
          </li>
        )}
        {email && (
          <li>
            <EmailIcon />
            <span>{email}</span>
          </li>
        )}
        {blog && (
          <li>
            <BlogIcon />
            <Url href={blog}>{blog}</Url>
          </li>
        )}
        {location && (
          <li>
            <LocationIcon />
            <span>{location}</span>
          </li>
        )}
      </Column>
    </Container>
  );
};

export default ProfileData;
