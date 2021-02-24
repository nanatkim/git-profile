export interface APIUser {
  login: string;
  name: string;
  followers: number;
  following: number;
  avatar_url: string;
  blog?: string;
  company?: string;
  email?: string;
  location?: string;
  bio?: string;
}

export interface APIRepo {
  id: number;
  name: string;
  owner: {
    login: string;
  }
  stargazers_count: number;
  forks: number;
  html_url: string;
  language?: string;
  description?: string;
}