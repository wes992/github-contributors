import React, { createContext, useContext, useState } from "react";
import { getRepoContributors } from "../API";

const ContributorContext = createContext();

const ContributorContextProvider = ({ children }) => {
  const [contributors, setContributors] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [loading, setLoading] = useState(false);

  const updateContributors = async (repo) => {
    setSelectedUser(null);
    setLoading(true);
    try {
      const repoContributors = await getRepoContributors(repo);
      setContributors(repoContributors);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const updateSelectedUser = (user) => {
    setLoading(true);
    setSelectedUser(user);
    setLoading(false);
  };

  const value = {
    contributors,
    setContributors,
    selectedUser,
    setSelectedUser,
    updateContributors,
    loading,
    setLoading,
    updateSelectedUser,
  };
  return (
    <ContributorContext.Provider value={value}>
      <>{children}</>
    </ContributorContext.Provider>
  );
};

const useContributorContext = () => useContext(ContributorContext);
export { ContributorContextProvider, useContributorContext };
