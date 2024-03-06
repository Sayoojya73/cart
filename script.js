function add(){
   
      let name= name1.value;
      let price=parseFloat(price1.value);
      let quantity=parseInt(qty1.value);
     
    if ( name === '' || isNaN(price) || isNaN(quantity) || quantity <= 0 || price <= 0) {
        swal("Please enter valid details for name, price, and quantity.");
    } else {
      
        let itemPrice = price * quantity;
        total += itemPrice; 
        swal("Item added successfully!!!","\nTotal:Rs." + total.toFixed(2), "success");
        
        // alert("Item added to the cart successfully!!! \nTotal:Rs." + total.toFixed(2));
        document.getElementById('summary').innerHTML = `
        <h6>ORDER SUMMARY</h6>
        <hr>
        <p id="subtotal">Subtotal :<span> &#8377; ${total.toFixed(2)}</span> </p>
        <P id="shipping">Shipping : &#8377; 0.00 </P>
        <p id="coupon">Add coupon code &rarr;</p>
        <hr>
        <h6 id="total">Total :&#8377; ${total.toFixed(2)} </h6>
        <hr>
        <button id="checkout">CHECKOUT</button>
       `;
    }
    
}var total =0;