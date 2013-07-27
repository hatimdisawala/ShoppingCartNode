
/*
 * GET home page.
 */

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/shoppingcart');
//mongoose.connect('mongodb://hatimgenius:scorp152@ds037508.mongolab.com:37508/shoppingcart');

/*var schema = {
    id : Number,
    name : String,
    price : Number,
    qty : Number,
    image : String,
    colors: Array
}
var Products = mongoose.model('products', schema);
  */
exports.index = function(req, res){
  res.render('index', {
      title: 'Electronics Shop',
      subtitle: 'Everything you need',
      products: JSON.stringify(products())
  });
};

/*exports.addProduct = function (req,res){

    var data = new Products({"id" : 1,
        "name" : "Nokia Asha 205",
        "price" : 2000,
        "qty" : 200,
        "image" : '',
        "colors": ['Black', 'White', 'Red']});

    data.save(function (err,data){
        if(err){
            console.log("error = "+err);
        }
        else {
            console.log(data);
        }

        res.send("done");
    });

};*/

products = function(){
    return [
        {
            id : 1,
            name : 'Nokia Asha 205',
            price : '2000',
            qty : 200,
            image : '',
            colors: ['Black', 'White', 'Red']
        },
        {
            id : 2,
            name : 'Samsung S3',
            price : '50000',
            qty : 50,
            image : '',
            colors: ['Red', 'Yellow', 'Green']
        },
        {
            id : 3,
            name : 'HTC Wildfire S',
            price : '12500',
            qty : 150,
            image : ''
        },
        {
            id : 4,
            name : 'Motorola Razr',
            price : '13500',
            qty : 200,
            image : '',
            colors: ['Black', 'White']
        },
        {
            id : 5,
            name : 'Samsung NoteII',
            price : '45000',
            qty : 80,
            image : ''
        },
        {
            id : 6,
            name : 'Nokia Lumia 600',
            price : '25000',
            qty : 120,
            image : ''
        },
        {
            id : 7,
            name : 'Nokia Lumia 900',
            price : '23500',
            qty : 20,
            image : '',
            colors: ['Blue', 'Yellow', 'Red']
        },
        {
            id : 8,
            name : 'HTC One X',
            price : '45000',
            qty : 75,
            image : ''
        },
        {
            id : 9,
            name : 'HTC Sensation',
            price : '41500',
            qty : 100,
            image : ''
        }
    ];
}