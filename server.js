  
const { Console } = require('console');

const express = require('express');
const { response } = require('express');
app = express();
request = require('request')

app.set('appName','design-serempre');
app.set('port',3000)

const path = require('path'); 

app.use(express.static(path.join("dist/design-serempre/")));


app.get('*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/design-serempre/'}
);
});


app.listen(process.env.PORT || 3000, () =>{
    console.log('I´m working right! Yeah')
});