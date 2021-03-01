import React, { createContext, useCallback } from "react";

export interface InitialProps {
  id: number;
  username: string;
  like?: boolean;
}

interface ContextData {
  giveStar(props: InitialProps): void;
  removeStar(props: InitialProps): void;
}

export const StarContext = createContext<ContextData>({} as ContextData);

export const StarProvider: React.FC = ({ children }) => {
  const giveStar = useCallback(({ id, username }: InitialProps) => {
    const starredList = localStorage.getItem("gitProfile:starred-repos");

    let starredArray: InitialProps[] = [];

    if (starredList) {
      starredArray = Object.values(JSON.parse(starredList));

      const repoIdx = starredArray.findIndex(
        (repo) => repo.id === id && repo.username === username
      );

      if (repoIdx > -1) {
        starredArray[repoIdx].like = true;
      } else {
        starredArray = [...starredArray, { id, username, like: true }];
      }
    } else {
      starredArray = [{ id, username, like: true }];
    }

    localStorage.setItem(
      "gitProfile:starred-repos",
      JSON.stringify(starredArray)
    );
  }, []);

  const removeStar = useCallback(({ id, username }: InitialProps) => {
    const starredList = localStorage.getItem("gitProfile:starred-repos");

    if (starredList) {
      const starredArray: InitialProps[] = Object.values(
        JSON.parse(starredList)
      );

      const findIndexStar = starredArray.findIndex(
        (repo) => repo.id === id && repo.username === username
      );

      if (findIndexStar > -1) {
        starredArray[findIndexStar].like = false;

        localStorage.setItem(
          "gitProfile:starred-repos",
          JSON.stringify(starredArray)
        );
      }
    }
  }, []);

  return (
    <>
      <StarContext.Provider value={{ giveStar, removeStar }}>
        {children}
      </StarContext.Provider>
    </>
  );
};
