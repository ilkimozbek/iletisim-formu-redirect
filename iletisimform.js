/* server.js - Express server*/
'use strict';
const log = console.log
log('Express server')

const express = require('express')
const app = express();

const path = require('path');

app.get('/', async function(req, res) {
    
    const links= ['https://bit.ly/3MDRrYe', 'https://bit.ly/Barutotel', 'https://bit.ly/kayaotel', 'https://bit.ly/rixosotel']
    const link = links[Math.floor(Math.random() * links.length)]

    let open = link
    res.redirect(open)
})

const port = process.env.PORT || 5000
app.listen(port, () => {
	log(`Listening on port ${port}...`)
}) 

////\r\n