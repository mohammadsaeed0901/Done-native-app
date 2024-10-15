import api from "./client";

const send = (message: string, listingId: number) =>
  api.post("/messages", {
    message,
    listingId,
  });

export default {
  send,
};
