const express = require('express');
const dotenv = require('dotenv').config();
const bodyParser = require('body-parser');
const {mongoose} = require('./DB/mongoose');
const path = require('path');
const userRoutes = require('./routes/userRoutes');
const busRoutes = require('./routes/busRoutes');
const reservationRoutes = require('./routes/reservationRoutes');
const app = express();

app.use(bodyParser.json());
app.use('/api/user',userRoutes);
app.use('/api/bus',busRoutes);
app.use('/api/reservations',reservationRoutes);

if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname,'..', 'client' ,'build')));
    app.get('*', (req,res) => {
        // console.log(path.join(__dirname,'..', 'frontend' ,'build',  'index.html'));
         res.sendFile(path.resolve(__dirname,'..', 'client' ,'build',  'index.html'))


    })
}else{
    app.get('/',(req,res) => {res.send('API RUNNING');})
}




app.listen(process.env.PORT, (e) => {
    if(e){
        console.log("An error occured",e);
    }
    console.log(`Server running on port ${process.env.PORT}`);
})