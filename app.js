const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');

app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/signup.html');
})

app.post('/', (req, res) => {
    const FirstName = req.body.firstName;
    const LastName = req.body.lastName;
    const Email = req.body.inputEmail;
    const str = 'First Name : ' + FirstName + '<br>' + 
                'Last Name : ' + LastName + '<br>' +
                'Email is : ' + Email + '<br>';
    res.send(str);
})

app.listen(process.env.PORT || 3001, () => {
    console.log('server running at 3001');
})



// 8b9a59fb7c82811b105eff76d9aafba7-us1