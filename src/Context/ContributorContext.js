import React, { createContext, useContext, useState } from "react";
import { getRepoContributors, getUserInformation } from "../API";

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

  const getUser = async (name) => {
    setLoading(true);
    if (name) {
      try {
        const result = await getUserInformation(name);
        setSelectedUser(result);
      } catch (err) {
        console.error(err);
      }
    }
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
    getUser,
  };
  return (
    <ContributorContext.Provider value={value}>
      <>{children}</>
    </ContributorContext.Provider>
  );
};

const useContributorContext = () => useContext(ContributorContext);
export { ContributorContextProvider, useContributorContext };
