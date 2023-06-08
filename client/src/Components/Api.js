import axios from "axios";

const hostname = process.env.RENDER_EXTERNAL_HOST || 'localhost';
const port = process.env.PORT || 3000;

const baseURL = `http://${hostname}:${port}`;

export default axios.create({ baseURL: baseURL });
