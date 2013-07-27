$(function(){
    var html_products = '';
    var html_cart = '', qty, id, aCart = [];
    var arrColors = ['teal','magenta','brown','green','red','blue','orange','purple'];

    /*$.each(products, function(i, product){
        var r = i % 7;
        html_products += '<li data-id="p_'+product.id+'" data-qty="'+product.qty+'" class="product '+arrColors[r]+'">';
        html_products += '<img class="thumb" src="'+product.image+'" />';
        html_products += '<h2>'+product.name+'</h2>';
        html_products += '<span class="price"><strong>Price:</strong> Rs. '+product.price+'</span><br />';
        html_products += '<span class="qty"><strong>Quantity:</strong> <span class="amount">'+product.qty+' pcs.</span></span><br />';
        html_products += '<button name="addtocart">Add to Cart</button>';
        html_products += '</li>';
    });
    $('#Content ul.list-products').append(html_products);*/

    $('#Content ul.list-products button[name=addtocart]').on('click', function(){
        id = $(this).parent('li').attr('data-id');
        qty = $(this).parent('li').attr('data-qty');
        aCart = [];
        $.each(products, function(i, product){
            if(id == 'p_'+product.id){
                aCart.push({id:product.id, qty:1});

                $.each(aCart, function(j, cart){
                    if(cart.id == product.id){

                        html_cart += '<li>';
                        html_cart += '<h2>'+product.name+'</h2>';
                        html_cart += '<span class="price"><strong>Price:</strong> Rs. '+product.price+'</span><br />';
                        html_cart += '<span class="qty"><strong>Quantity:</strong> '+cart.qty+'</span><br />';
                        html_cart += '</li>';
                    }
                });
                $('#Cart').html(html_cart);
            }
        });


        //alert(aCart);


        /*var li = $(this).parent('li').clone();
        var oldQty = li.attr('data-qty');
        var newQty = li.attr('data-qty',oldQty-1);
        $(this).parent('li').children('span.qty').children('span.amount').text(newQty);

        if(li.attr('data-id') == $('#Cart li').attr('data-id')){
            li.children('span.qty').html('<strong>Quantity:</strong> '+li.attr('data-qty'));
        } else {
            $('#Cart').append(li);
            $('#Cart img.thumb').remove();
            $('#Cart span.qty').children('span.amount').text(qty-1);
            $(li).children('span.amount').text(qty-1);
            $('#Cart button[name=addtocart]').remove();
        }*/

        //li.append('<button name="remove" class="remove">Remove</button>');
    });

    $('.remove').on('click', function(){
        $(this).parent('li').remove();
    });
});

function containsObject(obj, list) {
    var i;
    for (i = 0; i < list.length; i++) {
        if (list[i] === obj) {
            return true;
        }
    }

    return false;
}