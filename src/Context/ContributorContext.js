import React, { createContext, useContext, useEffect, useState } from "react";
import { getRepoContributors, getUserInformation } from "../API";

const ContributorContext = createContext();

const ContributorContextProvider = ({ children }) => {
  const [contributors, setContributors] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [selectedUserInfo, setSelectedUserInfo] = useState("");

  useEffect(() => {
    let _userInfo = getUserInformation(selectedUser.login);
    _userInfo.then((result) => setSelectedUserInfo(result));
  }, [selectedUser]);

  const updateContributors = (repo) => {
    try {
      getRepoContributors(repo).then((contributors) => {
        if (!!contributors) {
          const allContributors = contributors.reduce(
            async (_contributors, contributor) => {
              const contributorInfo = await getUserInformation(
                contributor.login
              );

              _contributors = [..._contributors, contributorInfo];

              return _contributors;
            },
            []
          );
          console.log(allContributors);
          // setContributors(allContributors);
        }
      });
    } catch (err) {
      console.error(err);
    }
  };

  const value = {
    contributors,
    setContributors,
    selectedUser,
    setSelectedUser,
    updateContributors,
  };
  return (
    <ContributorContext.Provider value={value}>
      <>{children}</>
    </ContributorContext.Provider>
  );
};

const useContributorContext = () => useContext(ContributorContext);
export { ContributorContextProvider, useContributorContext };
