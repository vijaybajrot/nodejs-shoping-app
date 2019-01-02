var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shoping',{useNewUrlParser:true})

var products = [
    new Product({
        imgPath: 'https://via.placeholder.com/320',
        title: 'Thugs Of Hindostan',
        description: 'Based on Philip Meadows Taylor\'s 1839 novel Confessions of a Thug, the movie tells us about a thug named Ameer Ali and his gang, whose nefarious ways posed a serious challenge to the British Empire in India between 1790 and 1805.',
        price : '120'
    }),
    new Product({
        imgPath: 'https://via.placeholder.com/320',
        title: 'Zero',
        description: 'Born to a wealthy family and raised in an environment of affluence and indulgence, Bauua was never failed by Meerut or its people.',
        price : '120'
    }),
    new Product({
        imgPath: 'https://via.placeholder.com/320',
        title: 'Dangle',
        description: 'After his failure at winning a gold medal for the country, Mahavir Phogat, a wrestler, vows to realise his dreams by training his daughters for the Commonwealth Games despite societal pressures.',
        price : '120'
    }),
    new Product({
        imgPath: 'https://via.placeholder.com/320',
        title: 'Ek Tha Tiger',
        description: 'RAW agent Tiger is sent to Dublin to observe an Indian scientist who is suspected of sharing nuclear secrets with the ISI. He meets and falls for his caretaker Zoya, a girl with a dark secret.',
        price : '120'
    }),
    new Product({
        imgPath: 'https://via.placeholder.com/320',
        title: 'Dhoom 3',
        description: 'Sahir, a circus entertainer who is trained in magic and acrobatics, turns into a thief to take down a corrupt bank in Chicago in order to avenge his father\'s death.',
        price : '120'
    }),
];

var inserted = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save().then(function(data){
        inserted++;
        if(inserted === products.length){
            exit();
        }
    });
    
}

function exit() {
    mongoose.disconnect();
}