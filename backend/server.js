import connect from "./config/db.js";
import { server } from "./socket/socket.js";

const PORT = process.env.PORT || 8000;

server.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log(`Server is runing on port ${PORT}`);
  connect();
});
