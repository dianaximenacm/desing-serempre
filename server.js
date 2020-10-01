// server.js
const express = require('express');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static('./dist/design-serempre'));
// Start the app by listening on the default
// Heroku port

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/design-serempre/'}
);
});


app.listen(process.env.PORT || 8080, () =>{
    console.log('I´m working right! Yeah')
});