import axios from "axios";

export async function getPaginationData() {
  let p = await axios.get(
    `https://jsonplaceholder.typicode.com/comments`
  );
  return p;
}