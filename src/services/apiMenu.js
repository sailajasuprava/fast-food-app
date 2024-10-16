const BASE_URL = "https://pizza-and-desserts.p.rapidapi.com";
const options = {
  method: "GET",
  headers: {
    "x-rapidapi-key": "7897065645msh7a9041d1c39bd72p10e7f3jsnd545f5b9822b",
    "x-rapidapi-host": "pizza-and-desserts.p.rapidapi.com",
  },
};

export async function getMenu(url) {
  const res = await fetch(`${BASE_URL}/${url}`, options);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const data = await res.json();
  console.log(data);

  return data;
}

const API_URL = "https://react-fast-pizza-api.onrender.com/api";

export async function getPizza() {
  const res = await fetch(`${API_URL}/menu`);
  if (!res.ok) throw Error("Failed getting menu");
  const { data } = await res.json();
  return data;
}
