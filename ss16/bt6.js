let usd = +prompt("Nhập số tiền (USD):");
const exchange = 25000;
let vnd = usd * exchange;
document.write(usd + " USD = " + vnd + " VND");