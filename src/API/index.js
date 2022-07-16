import axios from "axios";

let credentials = btoa("wes992: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");
var auth = { Authorization: `Basic${credentials}` };
var auth2 = {
  username: "wes992",
  password: "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",
};

export const getUserInformation = async (userName) => {
  let result;
  try {
    result = await axios.get(`https://api.github.com/users/${userName}`, {
      auth: auth2,
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
        auth: auth2,
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
