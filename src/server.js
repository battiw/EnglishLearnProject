import { app } from "./app.js";

import { config } from "./common/config.js";

const { PORT } = config;

app.listen(PORT, () =>
  console.log(`App is running on http://localhost:${PORT}`)
);
