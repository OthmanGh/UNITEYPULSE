import connect from "./config/db.js";

import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, err => {
  if (err) throw new Error(err);
  console.log(`Server is runing on port ${PORT}`);
  connect();
});
