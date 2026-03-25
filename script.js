// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
// import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

// // const firebaseConfig = {
// // apiKey: "AIzaSyCDND7sW1roDTB57zudBLjhI7nQBaosY68",
// // authDomain: "veg07-87e7e.firebaseapp.com",
// // databaseURL: "https://veg07-87e7e-default-rtdb.firebaseio.com/",
// // projectId: "veg07-87e7e",
// // storageBucket: "veg07-87e7e.firebasestorage.app",
// // messagingSenderId: "638717240569",
// // appId: "1:638717240569:web:6c91b29fc082d21b202e28"
// // };

// const firebaseConfig = {
//   apiKey: "AIzaSyCDND7sW1roDTB57zudBLjhI7nQBaosY68",
//   authDomain: "veg07-87e7e.firebaseapp.com",
//   databaseURL: "https://veg07-87e7e-default-rtdb.asia-southeast1.firebasedatabase.app", // ✅ FIX
//   projectId: "veg07-87e7e",
//   storageBucket: "veg07-87e7e.firebasestorage.app",
//   messagingSenderId: "638717240569",
//   appId: "1:638717240569:web:6c91b29fc082d21b202e28"
// };

// const app = initializeApp(firebaseConfig);
// const db = getDatabase(app);

// // Prices
// let prices = {
// Aloo:15, Tamatar:40, Mirchi:140, Adrak:120,
// Lasun:160, Nimbu:200, Kheera:40, Pyaaz:30
// };

// // Load Prices
// onValue(ref(db,"prices"),(snapshot)=>{
// let data = snapshot.val();
// if(data) prices = data;
// updatePrices();
// });

// // Update UI
// function updatePrices(){
// document.getElementById("priceAloo").innerText="₹"+prices.Aloo+"/kg";
// document.getElementById("priceTamatar").innerText="₹"+prices.Tamatar+"/kg";
// document.getElementById("priceMirchi").innerText="₹"+prices.Mirchi+"/kg";
// document.getElementById("priceAdrak").innerText="₹"+prices.Adrak+"/kg";
// document.getElementById("priceLasun").innerText="₹"+prices.Lasun+"/kg";
// document.getElementById("priceNimbu").innerText="₹"+prices.Nimbu+"/kg";
// document.getElementById("priceKheera").innerText="₹"+prices.Kheera+"/kg";
// document.getElementById("pricePyaaz").innerText="₹"+prices.Pyaaz+"/kg";

// document.querySelectorAll(".gram-input").forEach(input=>{
// input.dataset.rate = prices[input.dataset.name];
// });
// }

// // Calculate
// window.calculate=function(){
// let total=0;

// document.querySelectorAll(".gram-input").forEach(item=>{
// let grams=parseFloat(item.value)||0;
// let rate=parseFloat(item.dataset.rate);
// total += (rate/1000)*grams;
// });

// document.getElementById("grandTotal").innerText=total.toFixed(2);
// }

// // Send Order
// window.sendToWhatsApp=function(){

// let name=document.getElementById("userName").value.trim();
// let addr=document.getElementById("userAddress").value.trim();
// let total=document.getElementById("grandTotal").innerText;

// if(!name || !addr || total=="0.00"){
// alert("Naam, Address aur Sabzi bharna zaroori hai");
// return;
// }

// let itemsArray=[];
// let itemText="";

// document.querySelectorAll(".gram-input").forEach(item=>{
// let grams=parseFloat(item.value)||0;

// if(grams>0){
// itemsArray.push(item.dataset.name+" "+grams+"g");
// itemText+="• "+item.dataset.name+" "+grams+"g\n";
// }
// });

// let message =
// "Naya Sabzi Order\n------------------\n"+
// "Naam: "+name+"\n"+
// "Address: "+addr+"\n\n"+
// "Items:\n"+itemText+
// "\nTotal Bill: ₹"+total;

// let order={
// name, address:addr,
// items:itemsArray.join(", "),
// total,
// date:new Date().toLocaleDateString(),
// time:new Date().toLocaleTimeString(),
// status:"Pending"
// };

// // Save + WhatsApp
// push(ref(db,"orders"),order).then(()=>{

// let url="https://api.whatsapp.com/send?phone=916284843115&text="+encodeURIComponent(message);

// // OPEN WHATSAPP
// window.open(url,"_blank");

// // RESET
// document.querySelectorAll(".gram-input").forEach(i=>i.value="");
// document.getElementById("grandTotal").innerText="0.00";

// }).catch(err=>{
// console.log(err);
// alert("Order save nahi hua");
// });

// }



import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getDatabase, ref, push, onValue } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCDND7sW1roDTB57zudBLjhI7nQBaosY68",
  authDomain: "veg07-87e7e.firebaseapp.com",
  databaseURL: "https://veg07-87e7e-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "veg07-87e7e",
  storageBucket: "veg07-87e7e.firebasestorage.app",
  messagingSenderId: "638717240569",
  appId: "1:638717240569:web:6c91b29fc082d21b202e28"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Prices
let prices = {
Aloo:15, Tamatar:40, Mirchi:140, Adrak:120,
Lasun:160, Nimbu:200, Kheera:40, Pyaaz:30
};

// Load Prices
onValue(ref(db,"prices"),(snapshot)=>{
let data = snapshot.val();
if(data) prices = data;
updatePrices();
});

// Update UI
function updatePrices(){
document.getElementById("priceAloo").innerText="₹"+prices.Aloo+"/kg";
document.getElementById("priceTamatar").innerText="₹"+prices.Tamatar+"/kg";
document.getElementById("priceMirchi").innerText="₹"+prices.Mirchi+"/kg";
document.getElementById("priceAdrak").innerText="₹"+prices.Adrak+"/kg";
document.getElementById("priceLasun").innerText="₹"+prices.Lasun+"/kg";
document.getElementById("priceNimbu").innerText="₹"+prices.Nimbu+"/kg";
document.getElementById("priceKheera").innerText="₹"+prices.Kheera+"/kg";
document.getElementById("pricePyaaz").innerText="₹"+prices.Pyaaz+"/kg";

document.querySelectorAll(".gram-input").forEach(input=>{
input.dataset.rate = prices[input.dataset.name];
});
}

// 🔥 Update rate display (kg / 100g)
function updateRateDisplay(){
document.querySelectorAll(".veg-card").forEach(card=>{

let priceSpan = card.querySelector("span");
let input = card.querySelector(".gram-input");
let unit = card.querySelector(".unit-select").value;
let rate = parseFloat(input.dataset.rate);

if(unit==="kg"){
priceSpan.innerText = "₹"+rate+"/kg";
}else{
priceSpan.innerText = "₹"+(rate/10).toFixed(1)+"/100g";
}

});
}

// Calculate
window.calculate=function(){
let total=0;

document.querySelectorAll(".gram-input").forEach(item=>{

let qty=parseFloat(item.value)||0;
let rate=parseFloat(item.dataset.rate);

// 🔥 get unit
let unit = item.parentElement.querySelector(".unit-select").value;

// convert kg → grams
let grams = (unit==="kg") ? qty*1000 : qty;

total += (rate/1000)*grams;
});

document.getElementById("grandTotal").innerText=total.toFixed(2);

// 🔥 update UI rate
updateRateDisplay();
}

// Send Order
window.sendToWhatsApp=function(){

let name=document.getElementById("userName").value.trim();
let addr=document.getElementById("userAddress").value.trim();
let total=document.getElementById("grandTotal").innerText;

if(!name || !addr || total=="0.00"){
alert("Naam, Address aur Sabzi bharna zaroori hai");
return;
}

let itemsArray=[];
let itemText="";

document.querySelectorAll(".gram-input").forEach(item=>{

let qty=parseFloat(item.value)||0;
let unit = item.parentElement.querySelector(".unit-select").value;

// convert kg → grams for calculation
let grams = (unit==="kg") ? qty*1000 : qty;

if(grams>0){

let displayQty = qty + (unit==="kg" ? "kg" : "g");

itemsArray.push(item.dataset.name+" "+displayQty);
itemText+="• "+item.dataset.name+" "+displayQty+"\n";
}
});

let message =
"Naya Sabzi Order\n------------------\n"+
"Naam: "+name+"\n"+
"Address: "+addr+"\n\n"+
"Items:\n"+itemText+
"\nTotal Bill: ₹"+total;

let order={
name,
address:addr,
items:itemsArray.join(", "),
total,
date:new Date().toLocaleDateString(),
time:new Date().toLocaleTimeString(),
status:"Pending"
};

// Save + WhatsApp
push(ref(db,"orders"),order).then(()=>{

let url="https://api.whatsapp.com/send?phone=916284843115&text="+encodeURIComponent(message);

window.open(url,"_blank");

// RESET
document.querySelectorAll(".gram-input").forEach(i=>i.value="");
document.querySelectorAll(".unit-select").forEach(s=>s.value="g");
document.getElementById("grandTotal").innerText="0.00";

}).catch(err=>{
console.log(err);
alert("Order save nahi hua");
});

}