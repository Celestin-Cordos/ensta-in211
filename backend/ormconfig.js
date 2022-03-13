module.exports = {
  type: "postgres",
  host: "93.19.47.123",
  port: 15432,
  username: "postgres",
  password: process.env.DATABASE_PASSWORD,
  database: "postgres",
  synchronize: false,
  entities: ["entities/*.js"],
  migrations: ["migrations/*.js"],
  cli: {
    migrationsDir: "migrations",
  },
};
