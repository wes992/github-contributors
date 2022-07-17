import axios from "axios";

const { REACT_APP_GH_TOKEN } = process.env;

const config = {
  headers: {
    Authorization: REACT_APP_GH_TOKEN ? `Bearer ${REACT_APP_GH_TOKEN}` : null,
  },
};

export const getUserInformation = async (userName) => {
  let result;
  try {
    result = await axios.get(
      `https://api.github.com/users/${userName}`,
      config
    );
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
    result = await axios.get(
      `https://api.github.com/repos/${repo}/contributors`,
      config
    );
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    console.log(err);
  }

  return result;
};
