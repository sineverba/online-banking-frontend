import {
  LOCALSTORAGE_ACCESS_TOKEN
} from "../constants/constant";

const prepareHeaders = (headers) => {
  if (localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN)) {
    headers.set(
      "authorization",
      `Bearer ${localStorage.getItem(LOCALSTORAGE_ACCESS_TOKEN)}`
    );
  }
  return headers;
};

export default prepareHeaders;
