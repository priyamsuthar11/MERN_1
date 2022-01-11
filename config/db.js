const mongoose = require('mongoose');


const con = mongoose.connect('mongodb+srv://priyam:ubuntu@cluster0.d2rws.mongodb.net/companyDB?retryWrites=true&w=majority', {useNewUrlParser: true});
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

module.exports = con
