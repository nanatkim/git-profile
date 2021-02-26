import { waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RepoCard from "../components/RepoCard";
import { renderWithRouter } from "../utils/renderWithRouter";
import { APIRepo } from "../@types";

const repo: APIRepo = {
  id: 1,
  name: "git-profile",
  owner: {
    login: "nanatkim",
  },
  stargazers_count: 10,
  forks_count: 0,
  html_url: "https://nanatkim/git-profile",
};

describe("RepoCard", () => {
  test("should render RepoCard", async () => {
    const { getByText } = renderWithRouter(
      <RepoCard
        key={repo.id}
        username={repo.owner.login}
        reponame={repo.name}
        description={repo.description}
        language={repo.language}
        stars={repo.stargazers_count}
        forks={repo.forks_count}
      />
    );

    await waitFor(() => {
      expect(getByText("git-profile")).toBeInTheDocument();
    });
  });
});
