import { Random, mock } from "mockjs";
export default mock(/api/, "get", {
  context: Random.ctitle(),
});
