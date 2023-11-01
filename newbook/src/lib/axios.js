import axios from "axios";

import { _BaseUrluser } from "../components/config/dev";

const instance = axios.create({
  baseURL: _BaseUrluser,
  headers: {},
});

export { instance as _axios };
