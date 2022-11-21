const express= require('express');
const path= require('path');
const bodyParser= require('body-parser');
const app= express();

app.set('view engine','ejs');
app.set('views', path.join(__dirname,'view'));
app.use(bodyParser.urlencoded({ extended: false }))


const PRODUCTS = [
    { id: 10, name: 'Food', description: 'This is product Food', price: 200 },
    { id: 20, name: 'Candy', description: 'This is product Candy', price: 300 },
    { id: 30, name: 'Shampoo', description: 'This is product Shampoo', price: 400 },
    { id: 40, name: 'Laundry detergent', description: 'This is product Laundry detergent', price: 500 }]

    // adding to cart in hard coded way
    const Cart= [{ name: 'Food', price: 200, quantity: 3 },
    { name: 'Shampoo', price: 400, quantity: 5}]


    var prodIndex;

    app.get('/product/:id',(req,res)=>{
        prodIndex= PRODUCTS.findIndex(pr=>pr.id==parseInt(req.params.id));
        if(prodIndex<0){
            res.send("this requested product is not avialble")
        }
        else{
            res.render('product',{
                id:PRODUCTS[prodIndex].id,
                name:PRODUCTS[prodIndex].name,
                description:PRODUCTS[prodIndex].description,
                price:PRODUCTS[prodIndex].price
            })
        }
    })

    app.post('/product/addToCart',(req,res)=>{

        Cart.push(PRODUCTS.find(e => e.id === parseInt(req.body.id)));
    res.render("shoppingcart", {
        products: Cart
    });
    })

    app.listen(3300);
