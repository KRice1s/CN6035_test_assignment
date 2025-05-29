const express = require('express');
const app = express();
const port = 3000;
// Route δοκιμής
app.get('/', (req, res) => {
res.send('Το backend τρέχει σωστά!');
});
// Εκκίνηση του server
app.listen(port, () => {
console.log(`Server is running at http://localhost:${port}`);
});