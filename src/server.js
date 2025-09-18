const express = require("express");
const apiRoutes = require("./routers");
const { serverConfig, logger } = require("./config");

const app = express();

app.use(express.json());

app.use("/api", apiRoutes);

const startServer = async () => {
  try {
    app.listen(serverConfig.PORT, () => {
      console.log(`Server is running on http://localhost:${serverConfig.PORT}`);
    });
  } catch (error) {
    console.error(`Failed to start server: ${error.message}`);
  }
};

startServer();
