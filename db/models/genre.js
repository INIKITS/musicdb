const {
    album,
    artist,
    genre,
    producer,
    song,
    user,
    writer
} = require("./")

async function buildTables() {
    try {
      client.connect();
  
      await client.query(`
        DROP TABLE IF EXISTS genre;
        DROP TABLE IF EXISTS song;
        DROP TABLE IF EXISTS writer;
        DROP TABLE IF EXISTS producer;
        DROP TABLE IF EXISTS artist;
        DROP TABLE IF EXISTS album;
        DROP TABLE IF EXISTS users;
      `)
         await client.query(`
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        "isAdmin" BOOLEAN DEFAULT false
      );

      CREATE TABLE products (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) UNIQUE NOT NULL,
        description VARCHAR(255),
        price NUMERIC(19,2) NOT NULL,
        "qtyAvailable" INTEGER NOT NULL,
        category VARCHAR(255) NOT NULL
      );

      CREATE TABLE reviews (
        id SERIAL PRIMARY KEY,
        "creatorId" INTEGER REFERENCES users(id),
        "productId" INTEGER REFERENCES products(id),
        name VARCHAR(255),
        description VARCHAR(1000) UNIQUE NOT NULL
      );

      CREATE TABLE guests (
        id SERIAL PRIMARY KEY,
        "isActive" BOOLEAN DEFAULT true
      );

      CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        "isUserId" INTEGER REFERENCES users(id),
        "isGuestId" INTEGER REFERENCES guests(id)
      );

      CREATE TABLE photos (
        id SERIAL PRIMARY KEY,
        description VARCHAR(1000) NOT NULL,
        link VARCHAR(1000) NOT NULL,
        "productId" INTEGER REFERENCES products(id)
      );

      CREATE TABLE carts (
        id SERIAL PRIMARY KEY,
        "productPrice" NUMERIC(19,2),
        "productId" INTEGER REFERENCES products(id),
        "productQtyAvailable" INTEGER,
        "productQty" INTEGER CHECK ("productQty" <= "productQtyAvailable"),
        "cartUserId" INTEGER REFERENCES users(id),
        "cartGuestId" INTEGER REFERENCES guests(id),
        "isActive" BOOLEAN DEFAULT true,
        "orderId" INTEGER
      );`);

    }catch (error) {
        throw error;
      }
    }