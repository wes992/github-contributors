import axios from "axios";
import { auth } from "../auth";

export const getUserInformation = async (userName) => {
  let result;
  try {
    result = await axios.get(`https://api.github.com/users/${userName}`, {
      auth: auth,
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
        auth: auth,
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
