import axios from "axios";

const baseUrl = 'http://localhost:8080/api/v1/';
const header = {
  headers: {
    Authorization: 'Bearer ' + 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsInJvbGVzIjoiUk9MRV9BRE1JTiIsInVzZXJJZCI6MSwiZXhwIjoxNzMyNzExNzQyfQ.DmDLcXs3mmIPJZ-hizEhdt_U50hfrADZTx8XEq03eao'
  }
};

export const fetchUserList = async () => {
  try {
    const res = await axios.get(
      `${baseUrl}user/listUser`,
      header,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};


export const fetchProductList = async () => {
  try {
    const res = await axios.get(`${baseUrl}products/all`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createProductAPI = async (data) => {
  try {
    await axios.post(`${baseUrl}products/add`, data);
  } catch (err) {
    console.log(err);
  }
}