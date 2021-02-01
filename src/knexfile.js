module.exports = {
  dev: {
    client: process.env.DB_CLIENT || "pg",
    connection: {
      host: process.env.LOCALHOST || "127.0.0.1",
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME
    },
  }
};
