import connect from "./config/db.js";

import app from "./app.js";

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  connect();
  console.log(`App is runing on port ${PORT}`);
});
