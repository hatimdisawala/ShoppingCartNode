
/*
 * GET users listing.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://hatimgenius:scorp152@ds037508.mongolab.com:37508/shoppingcart');

var schema = {
    id : Number,
    name : String,
    price : Number,
    qty : Number,
    image : String,
    colors: Array
}
var Products = mongoose.model('products', schema);


exports.list = function(req, res){
  res.send("respond with a resource");
};

exports.addProduct = function (req,res){

    var data = new Products({id : 1,
        name : 'Nokia Asha 205',
        price : 2000,
        qty : 200,
        image : '',
        colors: ['Black', 'White', 'Red']});

    data.save(function (err,data){
        if(err){
            console.log("error = "+err);
        }
        else {
            console.log(data);
        }

        res.send("done");
    });

};