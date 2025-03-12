import { ApiRoute } from "jcc-express-mvc/Route";

ApiRoute.get("/", async function (req, res) {
  return res.json({ msg: [] });
});
