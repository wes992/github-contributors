import axios from "axios";

const { REACT_APP_USERNAME, REACT_APP_GH_TOKEN } = process.env;

const auth = {
  username: REACT_APP_USERNAME || "",
  password: REACT_APP_GH_TOKEN || "",
};

export const getUserInformation = async (userName) => {
  let result;
  try {
    result = await axios.get(`https://api.github.com/users/${userName}`, {
      auth,
    });
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
      {
        auth,
      }
    );
    if (result.status === 200) {
      return result.data;
    }
  } catch (err) {
    console.log(err);
  }

  return result;
};
