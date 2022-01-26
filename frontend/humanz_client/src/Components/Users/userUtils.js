import axios from "axios";

export const checkIfEmpty = (jsonObject) => {
  if (Object.keys(jsonObject).length > 0) return true;
  return false;
};

export const getAllUsers = async () => {
  //   return axios({
  //     url: `http://localhost:5001/api/users`,
  //     method: "get",
  //   })
  //     .then((data) => {
  //       console.log(`Received users: ${data}`);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log(`Error getting all users: ${err}`);
  //       return null;
  //     });
  axios
    .get("http://localhost:5001/api/users")
    .then((res) => {
      console.log(`Received users: ${res.data[0]}`);
      return res;
    })
    .catch((err) => {
      console.log(`Error getting all users: ${err}`);
      return null;
    });
};

export const getUser = async (userName) => {
  return axios({
    url: `http://localhost:5001/api/users/${userName}`,
    method: "get",
  })
    .then((data) => {
      console.log(`Received user: ${data.data}`);
      return data.data;
    })
    .catch((err) => {
      console.log(`Error getting all users: ${err}`);
      return null;
    });
};
