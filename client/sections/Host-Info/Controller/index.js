import axios from "axios";

const getData = () =>
  Promise.all([
    axios.get("/location/1"),
    axios.get("/hostInfo/1"),
    axios.get("/toKnow/1"),
  ]);

export default getData;
