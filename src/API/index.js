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
    try {
      const result = await axios.get(`/users/${userName}`, config);
      loading = false;

      return result;
    } catch (err) {
      console.log(err);
    }
  };

  const getRepoContributors = async (repo) => {
    loading = true;
    try {
      const result = await axios.get(`/repos/${repo}/contributors`, config);

      loading = false;
      return result;
    } catch (err) {
      console.log(err);
    }
  };

  return { getRepoContributors, getUserInformation, loading };
};
