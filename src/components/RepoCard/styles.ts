import styled, { css } from "styled-components";
import { RiBookMarkLine, RiStarLine, RiStarFill } from "react-icons/ri";
import { AiOutlineFork } from "react-icons/ai";

interface LikedProps {
  liked: boolean;
}

export const Container = styled.div<LikedProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
  border: 1px solid
    ${({ liked }) => (liked ? "var(--liked)" : "var(--border)")};
  border-radius: 6px;
  position: relative;
`;

export const Badge = styled.div<LikedProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -10px;
  top: -6px;
  background-color:  var(--primary);
  border-radius: 50%;
  width: 25px;
  height: 25px;
  border: 1px solid ${({ liked }) => (liked ? "var(--liked)" : "var(--border)")};
  cursor: pointer;

  * {
    font-size: 12px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const LikedStarIcon = styled(RiStarFill)<LikedProps>`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
  fill: ${({ liked }) => (liked ? "var(--liked)" : "var(--icon)")};
`;


export const TopSide = styled.div`
  > header {
    display: flex;
    align-items: center;

    > a {
      margin-left: 8px;
      font-size: 14px;
      font-weight: 600;
      color: var(--link);

      text-decoration: none;

      &:focus,
      &:hover {
        text-decoration: underline;
      }
    }
  }

  > p {
    margin: 8px 0 16px;
    font-size: 12px;
    color: var(--gray);
    letter-spacing: 0.1px;
  }
`;

const iconCSS = css`
  width: 16px;
  height: 16px;
  fill: var(--icon);
  flex-shrink: 0;
`;

export const RepoIcon = styled(RiBookMarkLine)`
  ${iconCSS}
`;

export const BotSide = styled.div`
  > ul {
    display: flex;
    align-items: center;

    > li {
      display: flex;
      align-items: center;
      margin-right: 16px;

      span {
        margin-left: 5px;
        font-size: 12px;
        color: var(--gray);
      }
    }
  }

  .language {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    flex-shrink: 0;
    background: var(--other-language);

    &.javascript {
      background: var(--javascript);
    }

    &.typescript {
      background: var(--typescript);
    }
  }
`;

export const StarIcon = styled(RiStarLine)`
  ${iconCSS}
`;

export const ForkIcon = styled(AiOutlineFork)`
  ${iconCSS}
`;
