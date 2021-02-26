import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 20px;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border: 1px solid var(--border);
  border-radius: 6px;

  > p {
    font-size: 16px;
  }
`;

export const BreadCrumb = styled.div`
  margin-bottom: 16px;

  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  white-space: nowrap;

  font-size: 18px;

  > a {
    color: var(--link);
    text-decoration: none;

    &:hover,
    &:focus {
      text-decoration: underline;
    }

    &.username {
      margin-left: 8px;
    }

    &.reponame {
      font-weight: 600;
    }
  }

  > span {
    padding: 0 5px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  color: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const Stats = styled.ul`
  margin-top: 16px;
  display: flex;
  align-items: center;

  > li {
    display: flex;
    align-items: center;
    margin-right: 9px;

    > * {
      margin-right: 7px;
      color: var(--gray);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;

export const LinkButton = styled.a`
  text-decoration: none;

  margin-top: 24px;
  background: var(--gray-dark);
  padding: 17px 17px;
  border-radius: 24px;
  width: max-content;

  display: flex;
  align-items: center;

  > span {
    color: var(--primary);
  }

  > svg {
    fill: var(--primary);
    margin-right: 10px;
  }
`;

export const GithubIcon = styled(FaGithub)`
  ${iconCSS}
`;

export const ErrorWrapper = styled.div`
  display: flex;
  justify-content: center;
  background: #f9826c;
  padding: 20px;
  margin: 10rem;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
`;
