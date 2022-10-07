// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";

const baseUrl = process.env.API_URL;

const fetchRobots = async (req, res) => {
  try {
    const robotData = await axios.get(
      `${baseUrl}/${req.query.id}?select=username,image,email,gender,macAddress`
    );
    res.send(robotData.data);
  } catch (error) {
    res.status(500).json(error.response);
  }
};

export default async function handler(req, res) {
  if (req.method === "GET") {
    await fetchRobots(req, res);
  } else {
    res.status(404);
  }
}
