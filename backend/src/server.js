const express = require("express");
const app = require("./index");

const connect = require("./config/db");

const start = async () => {
  await connect();
  app.listen("3000", () => {
    console.log("Listening to port 3000");
  });
};

start();
