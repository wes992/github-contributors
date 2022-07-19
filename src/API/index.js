import axios from "axios";

const { REACT_APP_GH_TOKEN, REACT_APP_BASE_URL } = process.env;

const config = {
  baseURL: REACT_APP_BASE_URL || "https://api.github.com",
  headers: {
    Authorization: REACT_APP_GH_TOKEN ? `Bearer ${REACT_APP_GH_TOKEN}` : null,
  },
};

let loading = false;

export const useAxios = () => {
  const getUserInformation = async (userName) => {
    loading = true;
    const result = await axios
      .get(`/users/${userName}`, config)
      .catch((err) => console.log(err));
    loading = false;

    return result;
  };

  const getRepoContributors = async (repo) => {
    loading = true;
    const result = await axios
      .get(`/repos/${repo}/contributors`, config)
      .catch((err) => console.log(err));
    loading = false;

    return result;
  };

  return { getRepoContributors, getUserInformation, loading };
};
