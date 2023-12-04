import { DataItem } from "../types/data";

export const getData = () => {
  return require("../../../data.json") as DataItem[];
};
