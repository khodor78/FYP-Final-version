const app = require('./app');
const dotenv = require('dotenv');

const connectedDatabase = require('./config/database');

// UnCaught Excepiton
/// Like console.youtube proble,
process.on('uncaughtException', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    `Shutting down The server due to UnCaught Exeption Promise Rejection`
  );

  process.exit(1);
});

//confiq
dotenv.config({ path: 'backend/config/config.env' });
//database
connectedDatabase();

const server = app.listen(process.env.PORT, () => {
  console.log(`Server is Working on http://localhost:${process.env.PORT}`);
});
//prmoise UNhalded like database change
process.on('unhandledRejection', (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down The server due to Unhandled Promise Rejection`);

  server.close(() => {
    process.exit(1);
  });
});
