import axios from "axios";

const { REACT_APP_GH_TOKEN, REACT_APP_BASE_URL } = process.env;

const config = {
  baseURL: REACT_APP_BASE_URL || "https://api.github.com",
  headers: {
    Authorization: REACT_APP_GH_TOKEN ? `Bearer ${REACT_APP_GH_TOKEN}` : null,
  },
};

export const getUserInformation = async (userName) => {
  let result;
  try {
    result = await axios.get(`/users/${userName}`, config);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    console.log(err);
  }

  return result;
};

export const getRepoContributors = async (repo) => {
  let result;
  try {
    result = await axios.get(`/repos/${repo}/contributors`, config);
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    console.log(err);
  }

  return result;
};
