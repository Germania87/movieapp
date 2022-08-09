export const api = {
  Url: "https://www.omdbapi.com",
  Key: "c594dcd0",
};

export const authUsers = [
  {
    id: "1001",
    username: "admin",
    name: "Admin",
    pass: "1234",
  },
  {
    id: "1002",
    username: "germania",
    name: "Germania Toro",
    pass: "1234",
  },
  {
    id: "1003",
    username: "linder",
    name: "Linder Hassinger",
    pass: "1234",
  },
];

const Config = {
  authUsers,
  api,
};

export default Config;
