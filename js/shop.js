// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]

// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;

// Exercise 1
function buy(id) {

    let counter = document.getElementById('count_product')
    let found = false

    cart.forEach(product => {
        if(product.id === id){
            product.quantity += 1
            found = true
        }
    })

    if(!found) {
        
        for(let i = 0; i < products.length; i++) {
            if(products[i].id === id){
                const newProduct = { ...products[i], quantity: 1 }
                cart.push(newProduct)
                break
            }
        }
    }

    let currentCount = parseInt(counter.textContent)
    counter.textContent = currentCount + 1

    printCart()
    applyPromotionsCart()
}

// Exercise 2
function cleanCart() {
    cart = []
    let cartList = document.getElementById('cart_list')
    let totalPrice = document.getElementById('total_price')
    let counter = document.getElementById('count_product')

    cartList.innerHTML = 'Empty cart'
    totalPrice.textContent = '0'
    counter.textContent = '0'
    
    console.log(cart)
}

// Exercise 3
function calculateTotal() {
    applyPromotionsCart()
    let total = 0
   
    for(let i = 0; i < cart.length; i++){
        if (cart[i].totalWithDiscount !== undefined) {
            total += cart[i].totalWithDiscount;
        } else {
            total += cart[i].price * cart[i].quantity;
        }
    }

    return total
}

// Exercise 4
function applyPromotionsCart() {
    
    for(let i = 0; i < cart.length; i++){
        const product = cart[i]
        if (product.id === 1 && product.quantity >= 3) {
            product.totalWithDiscount = product.price * product.quantity * 0.8;
        } else if (product.id === 3 && product.quantity >= 10) {
            product.totalWithDiscount = product.price * product.quantity * 0.7;
        }
    }
}


// Exercise 5
function printCart() {
    const cartList = document.getElementById("cart_list")
    const totalPrice = document.getElementById("total_price")

    if(cart.length === 0) { 
        cleanCart() 
    } else {

        cartList.innerHTML = ''

        for(let i = 0; i < cart.length; i++){
            const product = cart[i];
            const subtotal = product.totalWithDiscount !== undefined ? product.totalWithDiscount : product.price * product.quantity

            cartList.innerHTML +=
                `<tr>
                    <th scope="row">${product.name}</th>
                    <td>${product.price.toFixed(2)}</td>
                    <td>${product.quantity}</td>
                    <td>${subtotal.toFixed(2)}</td>
                </tr>`
        }
            
        totalPrice.textContent = calculateTotal().toFixed(2)
    }
}
    


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

}

function open_modal() {
    printCart();
}