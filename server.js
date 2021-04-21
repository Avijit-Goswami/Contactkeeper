//bring in express
const express = require('express')

// initialize a variable called app with express
const app = express();

//create your endpoints/ routehandlers
app.get('/', (req, res) => {
    res.send('<h1>HELLO WORLD!!!!!</h1>')
})

//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/contacts', require('./routes/contacts'))
app.use('/api/auth', require('./routes/auth'))

// we need to listen on a port
const PORT = process.env.PORT || 5000;


app.listen(PORT, ()=> console.log(`server is running on ${PORT}`))