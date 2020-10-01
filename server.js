
const express = require('express');
const { response } = require('express');
app = express();
request = require('request')

app.set('appName','design-serempre');
app.set('port',8080)

app.use(express.static('dist/design-serempre'));


app.get('/', function(req, res) {
  res.sendFile('index.html', {root: 'dist/design-serempre/'}
);
});


app.listen(process.env.PORT || 8080, () =>{
    console.log('I´m working right! Yeah')
});