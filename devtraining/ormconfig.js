module.exports = {
  type: 'postgres',
  host: 'db',
  port: 5432,
  username: 'postgres',
  password: 'admin',
  database: 'cursonestjs',
  synchronize: false,
  keepConnectionAlive: true,
  entities: ['dist/**/*.js'],
  migrations: ['dist/migrations/*.js'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};