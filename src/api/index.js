import axios from "axios";

const baseUrl = 'https://654f3bc3358230d8f0cd227e.mockapi.io/';

export const fetchUserList = () => {
  return axios.get(`${baseUrl}users`)
  .then((res) => {
    return res.data;
  })
  .catch((err) => {
    console.log(err);
  });
};
