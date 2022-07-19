import React, { createContext, useContext, useState } from "react";
import { useAxios } from "../API";

const ContributorContext = createContext();

const ContributorContextProvider = ({ children }) => {
  const [contributors, setContributors] = useState([]);
  const [selectedUser, setSelectedUser] = useState("");
  const [error, setError] = useState(null);

  const { getRepoContributors, getUserInformation, loading } = useAxios();

  const updateContributors = async (repo) => {
    setSelectedUser(null);
    try {
      const result = await getRepoContributors(repo);
      if (result.status === 200) {
        setContributors(result.data);
        setError(null);
      } else {
        setError(result);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const getUser = async (name) => {
    if (name) {
      try {
        const result = await getUserInformation(name);

        if (result.status === 200) {
          setSelectedUser(result.data);
          setError(null);
        } else {
          setError(result);
        }
      } catch (err) {
        console.error(err);
      }
    }
  };

  const value = {
    error,
    contributors,
    setContributors,
    selectedUser,
    setSelectedUser,
    updateContributors,
    loading,
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
