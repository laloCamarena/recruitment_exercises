const express = require('express');

const app = express();
var bodyParser = require('body-parser');

function reverse_string(str) {
    const splitString = str.split("");
    const reverseArray = splitString.reverse(); 
    const joinArray = reverseArray.join("");
    return joinArray;
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.post('/palindrome', (req, res, next) => {
    let phrase = req.query['phrase'].replace(/\s/g, '');
    if(phrase === reverse_string(phrase)) {
        res.status(201).json({
            'palindrome': true
        });
    } else {
        res.status(201).json({
            'palindrome': false
        });
    }
});

module.exports = app;