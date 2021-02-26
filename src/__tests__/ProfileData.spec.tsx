import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import ProfileData from "../components/ProfileData";
import { APIUser } from "../@types";

const user: APIUser = {
  login: "nanatkim",
  name: "Natali",
  avatar_url: "https://github.com/nanatkim.png",
  followers: 10,
  following: 2,
  html_url: "https://github.com/nanatkim",
  location: "Juazeiro do norte",
  email: "nbs.natali@gmail.com",
};

describe("ProfileData", () => {
  test("should render ProfileData", async () => {
    render(
      <ProfileData
        username={user.login}
        name={user.name}
        avatarUrl={user.avatar_url}
        followers={user.followers}
        following={user.following}
        url={user.html_url}
        company={user.company}
        location={user.location}
        email={user.email}
        blog={user.blog}
        bio={user.bio}
      />
    );

    await waitFor(() => {
      expect(screen.getByRole("heading", { level: 2 })).toHaveTextContent(
        "nanatkim"
      );
    });
  });
});
