// Data keranjang (dari LocalStorage)
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Memuat data keranjang
function loadCart() {
  const cartTableBody = document.getElementById("cartTableBody");
  const totalPriceElement = document.getElementById("totalPrice");
  cartTableBody.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const subtotal = item.price * item.quantity;
    total += subtotal;

    cartTableBody.innerHTML += `
      <tr>
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>Rp${item.price.toLocaleString()}</td>
        <td>${item.quantity}</td>
        <td>Rp${subtotal.toLocaleString()}</td>
        <td><button class="btn btn-danger btn-sm" onclick="removeItem(${index})">Hapus</button></td>
      </tr>
    `;
  });

  totalPriceElement.textContent = Rp${total.toLocaleString()};
}

// Menghapus item dari keranjang
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

// Memuat data saat halaman dibuka
document.addEventListener("DOMContentLoaded", loadCart);