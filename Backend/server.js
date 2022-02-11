const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const {mongoose} = require('./DB/mongoose');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/user',userRoutes);
app.use('/api/bus',busRoutes);
app.use('/api/reservations',reservationRoutes);

app.get('/',(req,res) => {
    res.status(200).send("Hello")
})




app.listen(process.env.PORT, (e) => {
    if(e){
        console.log("An error occured",e);
    }
    console.log(`Server running on port ${process.env.PORT}`);
})