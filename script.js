
  const grid = document.getElementById("grid");
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const whatsappOrder = document.getElementById("whatsappOrder");
  const cartModal = document.getElementById("cartModal");

  const sampleProducts = [
  // Kitchen Utensils
  { name: "Cooking Pot Set", price: 18000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
  { name: "Knife Set", price: 7000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
  { name: "Cutlery Set", price: 5000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
  { name: "Chopping Board", price: 3000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },

  // Home Appliances
  { name: "Blender", price: 15000, image: "https://via.placeholder.com/150", category: "appliances" },
  { name: "Air Fryer", price: 30000, image: "https://via.placeholder.com/150", category: "appliances" },
  { name: "Microwave Oven", price: 50000, image: "https://via.placeholder.com/150", category: "appliances" },
  { name: "Toaster", price: 8000, image: "https://via.placeholder.com/150", category: "appliances" },

  // Office Stationery
  { name: "A4 Paper (500 sheets)", price: 3500, image: "https://via.placeholder.com/150", category: "stationery" },
  { name: "Ballpoint Pens (Pack of 10)", price: 1200, image: "https://via.placeholder.com/150", category: "stationery" },
  { name: "Stapler & Pins Set", price: 2000, image: "https://via.placeholder.com/150", category: "stationery" },
  { name: "Notebook Set", price: 2500, image: "https://via.placeholder.com/150", category: "stationery" },

  // Clothing
  { name: "Men's T-Shirt", price: 6000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidob1XsnsVWcj4zqtoN28boO205T2pd-79_FdNGTgyeB3_RJl5oeoVK1D6gGVkTrkuHt_YRytu0nJKPvlI6YY4rBnju8CRHxImUUPbcbqvpXfd7PiBa8iTLIgMJLlykwtGKgTqdv0-jZDH1EG-Z-Y0-HRtYskVaVbSqiPu9VmLvJNSpSdjX72ZczQUPVg/s320/1000049671.jpg", category: "clothing" },
  { name: "Women's Gown", price: 15000, image: "https://via.placeholder.com/150", category: "clothing" },
  { name: "Children's Wear Set", price: 9000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcKl_6Yi7sb7qzCvqhFw40KwNcYXWPwzdw2ObehpFjGBWP8TrLouyHqnXwo_T0Yg1e3Kr0xvoZY_5tUvCdyIBRVOVF7Mp19J7GtQR_HUa8M4ExH0elHTXBbAh__BwKCMiykkgQnYlHsQXJy65H1wHN4lpX_cGw3E6NNuCsSXTrx1vjBPHL0gfTqCmDnl0/s320/1000049670.jpg", category: "clothing" },
  { name: "Unisex Joggers", price: 8000, image: "https://via.placeholder.com/150", category: "clothing" },

  // Interior Decor
  { name: "Wall Clock", price: 7000, image: "https://via.placeholder.com/150", category: "decor" },
  { name: "Table Lamp", price: 9000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwUUeor0iItkzjIkFvlxGfTefwXOGKevJzJLkFAk0yiOPQIXksZcBlw7xSikBR-Q6GqHbIl9i7d6nLynuzi8TLIGK3Az1UlN3f9CaadWbkpia0lZnGWnp8eUyrgFWpTZTO4DeonsVe2x8-TxfSC3tPb0Ugofr68Vbizctm-uALdB8Jv6cC7TBYLKUdzjI/s320/1000049674.jpg", category: "decor" },
  { name: "Flower Vase", price: 6000, image: "https://via.placeholder.com/150", category: "decor" },
  { name: "Wall Art Canvas", price: 12000, image: "https://via.placeholder.com/150", category: "decor" },
];

  let cart = [];
function toggleMenu() {
  document.getElementById("sideMenu").classList.toggle("show");
}

function toggleAccordion(element) {
  const content = element.nextElementSibling;
  content.style.display = content.style.display === "block" ? "none" : "block";
}

  function filterProducts(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    const itemCat = sampleProducts[index].category;
    card.style.display =
      category === "all" || itemCat === category ? "block" : "none";
  });
}

function filterProducts(category) {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    const itemCat = sampleProducts[index].category;
    card.style.display =
      category === "all" || itemCat === category ? "block" : "none";
  });
}
  function renderCards() {
    grid.innerHTML = "";
    sampleProducts.forEach((product, i) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h4>${product.name}</h4>
        <p>₦${product.price}</p>
        <button class="btn add-btn" onclick="addToCart(${i}, this)">Add to Cart</button>
        <button class="btn buy-btn" onclick="buyNow(${i})">Buy Now</button>
      `;
      grid.appendChild(card);
    });
  }

  function addToCart(index, btn) {
    cart.push(sampleProducts[index]);
    updateCart();

    const buyBtn = btn.nextElementSibling;
    buyBtn.style.display = "block";
  }

  function buyNow(index) {
    const item = sampleProducts[index];
    const message = `I want to buy:\n- ${item.name} for ₦${item.price}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  }
function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      ${item.name} - ₦${item.price}
      <button class="remove-btn" onclick="removeFromCart(${index})">✕</button>
    `;
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;
  totalPriceEl.textContent = total;

  whatsappOrder.href = `https://wa.me/?text=${encodeURIComponent(
    "I'm ordering:\n" +
      cart.map((p) => `- ${p.name}: ₦${p.price}`).join("\n") +
      `\nTotal: ₦${total}`
  )}`;
  
}
  function removeFromCart(index) {
  const confirmed = confirm("Are you sure you want to remove this item?");
  if (!confirmed) return;

  const itemElement = cartItems.children[index];
  itemElement.classList.add("fade-out");

  // Wait for animation to finish before removing
  setTimeout(() => {
    cart.splice(index, 1);
    updateCart();
  }, 300);
}
  
  function showCartModal() {
    cartModal.style.display = cartModal.style.display === "none" ? "block" : "none";
  }

  renderCards();
});


  function toggleAuthFlip(show = true) {
    const wrapper = document.getElementById('authModal');
    const card = document.getElementById('authCard');
    if (show) {
      wrapper.style.display = "block";
      setTimeout(() => card.classList.add("show"), 50);
    } else {
      card.classList.remove("show");
      setTimeout(() => wrapper.style.display = "none", 500);
    }
  }

  function showGreeting(user) {
    const greeting = document.getElementById('userGreeting');
    const text = document.getElementById('greetingText');
    text.textContent = `Welcome, ${user.name}`;
    greeting.style.display = 'flex';
  }

  function logoutUser() {
    localStorage.removeItem("authUser");
    localStorage.setItem("authClosedCount", "0"); // Reset modal show count
    document.getElementById('userGreeting').style.display = "none";
    location.reload(); // Refresh to check state again
  }

  // Show modal or greeting on page load
  window.onload = function () {
    const user = JSON.parse(localStorage.getItem("authUser"));
    const closedCount = parseInt(localStorage.getItem("authClosedCount")) || 0;

    if (user) {
      showGreeting(user);
    } else if (closedCount < 5) {
      setTimeout(() => {
        toggleAuthFlip(true);
      }, 20000);
    }
  }

  // Handle signup
  document.getElementById("authForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const user = { name, email };
    localStorage.setItem("authUser", JSON.stringify(user));
    toggleAuthFlip(false);
    showGreeting(user);
    alert("Signup successful!");
  });

  // Close modal if user dismisses
  function handleAuthClose() {
    let closedCount = parseInt(localStorage.getItem("authClosedCount")) || 0;
    closedCount++;
    localStorage.setItem("authClosedCount", closedCount);
    toggleAuthFlip(false);
  });


 fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // Optional: Load footer JS after injecting
      const script = document.createElement('script');
      script.src = 'footer-dropdown.js';
      document.body.appendChild(script);
    });

let sliderIndex = 0;

function renderSliderCards() {
  const sliderContainer = document.getElementById("productSlider");
  sliderContainer.innerHTML = "";

  const latestProducts = sampleProducts.slice(-8); // Last 8 uploaded
  const first = latestProducts[sliderIndex % latestProducts.length];
  const second = latestProducts[(sliderIndex + 1) % latestProducts.length];

  [first, second].forEach((product, i) => {
    const card = document.createElement("div");
    card.className = "card slider-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h4>${product.name}</h4>
      <p>₦${product.price}</p>
      <button class="btn add-btn" onclick="addToCart(${sampleProducts.indexOf(product)}, this)">Add to Cart</button>
      <button class="btn buy-btn" onclick="buyNow(${sampleProducts.indexOf(product)})">Buy Now</button>
    `;
    sliderContainer.appendChild(card);
  });

  sliderIndex = (sliderIndex + 2) % latestProducts.length;
}

// Start slider
renderSliderCards();
setInterval(renderSliderCards, 3000);

  function showCartModal() {
  const overlay = document.getElementById("cartModalOverlay");
  overlay.style.display = overlay.style.display === "none" ? "flex" : "none";
}
  
  
  window.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.product-card');
  cards.forEach(card => {
    card.style.opacity = "1";
    card.style.transform = "translateY(0)";
  });
});
  

