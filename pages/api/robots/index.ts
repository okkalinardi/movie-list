// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const baseUrl = process.env.API_URL;

const fetchRobots = async (res) => {
  try {
    const robotList = await axios.get(
      `${baseUrl}?limit=100&select=userName,image,email,gender`
    );
    res.send(robotList.data.users);
  } catch (error) {
    res.status(500).json(error.response);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    await fetchRobots(res);
  } else {
    res.status(404);
  }
}
