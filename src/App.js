import { useState, useEffect } from "react";
import { getUserInformation } from "./API";
import "./App.css";
import { ContributorContextProvider } from "./Context/ContributorContext";
import { SelectContributors } from "./Contributors/SelectContributors";

// const getData = async () => {
//   const userInformation = await getUserInformation("wes992");

//   console.log("userInfo", userInformation.url);
//   return userInformation;
// };
function App() {
  const [userInfo, setUserInfo] = useState({
    login: "wes992",
    id: 49044919,
    node_id: "MDQ6VXNlcjQ5MDQ0OTE5",
    avatar_url: "https://avatars.githubusercontent.com/u/49044919?v=4",
    gravatar_id: "",
    url: "https://api.github.com/users/wes992",
    html_url: "https://github.com/wes992",
    followers_url: "https://api.github.com/users/wes992/followers",
    following_url: "https://api.github.com/users/wes992/following{/other_user}",
    gists_url: "https://api.github.com/users/wes992/gists{/gist_id}",
    starred_url: "https://api.github.com/users/wes992/starred{/owner}{/repo}",
    subscriptions_url: "https://api.github.com/users/wes992/subscriptions",
    organizations_url: "https://api.github.com/users/wes992/orgs",
    repos_url: "https://api.github.com/users/wes992/repos",
    events_url: "https://api.github.com/users/wes992/events{/privacy}",
    received_events_url: "https://api.github.com/users/wes992/received_events",
    type: "User",
    site_admin: false,
    name: null,
    company: null,
    blog: "",
    location: null,
    email: null,
    hireable: null,
    bio: null,
    twitter_username: null,
    public_repos: 20,
    public_gists: 0,
    followers: 1,
    following: 0,
    created_at: "2019-03-28T22:00:22Z",
    updated_at: "2022-07-16T01:29:21Z",
  });

  return (
    <ContributorContextProvider>
      {userInfo.url}
      <SelectContributors />
    </ContributorContextProvider>
  );
}

export default App;
