//starting messages
const { Client } = require("pg");
const dotenv = require('dotenv').config('../.env');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
   id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
   username VARCHAR ( 255 ), 
   text VARCHAR,
   added VARCHAR ( 255 )
);

 INSERT INTO messages (username, text, added) 
VALUES
  ('Amando','Hi there!','${new Date}'),
  ('Charles','Hello World!','${new Date}'),
  ('Alex','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ac blandit dolor. Maecenas sollicitudin malesuada leo. Nulla vel tellus enim. Maecenas pellentesque ante sem, eget.','${new Date}')
`;

async function main() {
  console.log("seeding...");
  const conStr = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;
  const client = new Client({
    connectionString: conStr,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
