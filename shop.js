const products = [
  { name: "Shoes", price: 1000 },
  { name: "Shirt", price: 500 },
  { name: "Watch", price: 1500 }
];

let cart = [];
let total = 0;

const productList = document.getElementById("productList");

products.forEach((p, index) => {
  const div = document.createElement("div");
  div.className = "card";

  div.innerHTML = `
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${index})">Add</button>
  `;

  productList.appendChild(div);
});

function addToCart(index) {
  cart.push(products[index]);
  total += products[index].price;

  const li = document.createElement("li");
  li.textContent = products[index].name + " - ₹" + products[index].price;

  document.getElementById("cart").appendChild(li);
  document.getElementById("total").textContent = total;
}
