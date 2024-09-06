import * as HTTPRequest from "./HTTPRequest";

const endpoints = {
  // all: "/data/comments?sortBy=_createdOn%20des",
  all: "/data/comments",
  getLatest: (number) => {
    return `/data/comments?limit=${number}`;
  },
  create: "/data/comments",
  byId: "/data/comments/",
  deleteById: "/data/comments/",
  update: "/data/comments/",
};

export const getLatest = async (number) => {
  const result = await HTTPRequest.get(endpoints.getLatest(number));
  return result;
};

export const getAll = async () => {
  const result = await HTTPRequest.get(endpoints.all);
  return Object.values(result);
};

export const create = async (data) => {
  const result = await HTTPRequest.post(endpoints.create, data);
};

export const update = async (data, id) => {
  let result = await HTTPRequest.put(endpoints.update + id, data);
};

export const deleteById = async (id) => {
  const result = await HTTPRequest.remove(endpoints.deleteById + id);
};
