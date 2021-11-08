ObjectRelationalMapping/server.js /
@Hiroshi77300ER
Hiroshi refactor
Latest commit 725d06a on November 05, 2021
 History
 1 contributor
16 lines (12 sloc)  404 Bytes
   
const express = require('express');
const routes = require('./routes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

/
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
© 2021 GitHub, Inc.
