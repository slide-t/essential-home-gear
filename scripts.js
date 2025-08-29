document.addEventListener("DOMContentLoaded", function() {
  // HTML elements
  const grid = document.getElementById("grid");
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const totalPriceEl = document.getElementById("totalPrice");
  const whatsappOrder = document.getElementById("whatsappOrder");
  const cartModal = document.getElementById("cartModal");

  // Products array
  const sampleProducts = [
    // Kitchen
    { name: "Cooking Pot Set", price: 18000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
    { name: "Knife Set", price: 7000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
    { name: "Cutlery Set", price: 5000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },
    { name: "Chopping Board", price: 3000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLVUrkBzsG8_J-VDvcSYd_yaqeyyZNpdqfASLApwDtwPpPkBA_KwwmovV2LitgVygj23zchNe-3OYQddkuXv_4huONpnOELk6P7WHDuobpyZ3bDGrDcbY41bMNUADLNszrhrX-1i7KKxq9yCwRMrwv91AGvZXEK1kasVYq77kxQgvnJQaiP0E13y1WYLU/s320/1000049051.jpg", category: "kitchen" },

    // Appliances
    { name: "Blender", price: 15000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhQoMOtChyGTRYnk_eJeYsWL_dIyiohmTu78VjL8aOZwRlsXETQngiIhiCPJx1tWpwrgaZxWUJCngt4KfGfHH0RzlJnoDG8RrAPV03TVPNV-nbasYboYy9Jb0-M6oKIt-DMdrW2za_zFzSijR09RN6Uy3px5ouflaDRdMMcmQPmENtUusj4DmINv-alp5o/s320/1000050060.png", category: "appliances" },
    { name: "Air Fryer", price: 30000, image: "https://via.placeholder.com/150", category: "appliances" },
    { name: "Microwave Oven", price: 50000, image: "https://via.placeholder.com/150", category: "appliances" },
    { name: "Toaster", price: 8000, image: "https://via.placeholder.com/150", category: "appliances" },

    // Stationery
    { name: "A4 Paper (500 sheets)", price: 3500, image: "https://via.placeholder.com/150", category: "stationery" },
    { name: "Ballpoint Pens (Pack of 10)", price: 1200, image: "https://via.placeholder.com/150", category: "stationery" },
    { name: "Stapler & Pins Set", price: 2000, image: "https://via.placeholder.com/150", category: "stationery" },
    { name: "Notebook Set", price: 2500, image: "https://via.placeholder.com/150", category: "stationery" },

    // Clothing
    { name: "Men's T-Shirt", price: 6000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEidob1XsnsVWcj4zqtoN28boO205T2pd-79_FdNGTgyeB3_RJl5oeoVK1D6gGVkTrkuHt_YRytu0nJKPvlI6YY4rBnju8CRHxImUUPbcbqvpXfd7PiBa8iTLIgMJLlykwtGKgTqdv0-jZDH1EG-Z-Y0-HRtYskVaVbSqiPu9VmLvJNSpSdjX72ZczQUPVg/s320/1000049671.jpg", category: "clothing" },
    { name: "Women's Gown", price: 15000, image: "https://via.placeholder.com/150", category: "clothing" },
    { name: "Children's Wear Set", price: 9000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcKl_6Yi7sb7qzCvqhFw40KwNcYXWPwzdw2ObehpFjGBWP8TrLouyHqnXwo_T0Yg1e3Kr0xvoZY_5tUvCdyIBRVOVF7Mp19J7GtQR_HUa8M4ExH0elHTXBbAh__BwKCMiykkgQnYlHsQXJy65H1wHN4lpX_cGw3E6NNuCsSXTrx1vjBPHL0gfTqCmDnl0/s320/1000049670.jpg", category: "clothing" },
    { name: "Unisex Joggers", price: 8000, image: "https://via.placeholder.com/150", category: "clothing" },

    // Decor
    { name: "Wall Clock", price: 7000, image: "https://via.placeholder.com/150", category: "decor" },
    { name: "Table Lamp", price: 9000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjwUUeor0iItkzjIkFvlxGfTefwXOGKevJzJLkFAk0yiOPQIXksZcBlw7xSikBR-Q6GqHbIl9i7d6nLynuzi8TLIGK3Az1UlN3f9CaadWbkpia0lZnGWnp8eUyrgFWpTZTO4DeonsVe2x8-TxfSC3tPb0Ugofr68Vbizctm-uALdB8Jv6cC7TBYLKUdzjI/s320/1000049674.jpg", category: "decor" },
    { name: "Flower Vase", price: 6000, image: "https://via.placeholder.com/150", category: "decor" },
    { name: "Wall Art Canvas", price: 12000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6NQZTzrMhGPrPakzJ0V1w9qFO2hEZ8lt3aNCZdqVB5kI8vCv-6IO2CMSgrEb06oNu4HXV28DX5tL0glmx1v5noxzq_xWsUkuLM28M1kVU9mBCUARkF_xPBO6HnZltYNiI7byiE2oVmCIFvq3rNYG1bntxUnI-B0cdV2dKn3asCcrm5QZ4rpCtfgC93cc/s320/1000050069.png", category: "decor" },

    // Laptops
    { name: "ASUS ROG Strix G16 (2025) Gaming", price: 230000, image: "https://m.media-amazon.com/images/I/71zuMSjwDfL._AC_SY300_SX300_QL70_FMwebp_.jpg ", category: "asus" },
    { name: "ASUS ZenBook 14", price: 390000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAsus3.jpg", category: "asus" },
    { name: "Acer Chromebook 314", price: 160000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAcer1.jpg", category: "acer" },
    { name: "Acer Chromebook Plus 515", price: 280000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgAcer4.jpg", category: "acer" },
    { name: "HP Envy x360", price: 385000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEil4Rhb-woHJB5EpT8rL7cIRAFdbM6E-6aSdGEaStVGu_gpAjeCaPLnVKFIJRnhwM_a8PaCUXyhxMTtWiiHThJ_ndp7TRrjv_8GDdO-1TsDSQ9IzRbdJ3qStnlw61QJvOjhGMhCEYUKm20rTxgdi6EnBrO72WcEFHMQT-Q8Md5FX3WCfjAUOxCeMwa7IUo/s320/1000050061.png", category: "HP" },
    { name: "HP ProBook 450", price: 295000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiaaeLBtJHrvoIR78R2t0q7AvfkCm3aApAK7hlmhuOmxwZHcSHtKWGwCxRxqExptKgOXplUud9jeYU9lBjJr0_pZZOzGqREGFTKMMcX7-TkAPOsuqGMqMO7SyGJs7DrGkQzj0_8lPijzXa08gPRWizRa3TlPtHntrFoyIz_YLUQwb_mnExSlSyzVuEtGhQ/s320/1000050057.png", category: "HP" },
    { name: "MacBook Pro 14", price: 880000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj66oEIKUkJ0kpcEvdsEC8qZdS7uSlZzxYRuHWsHnyyArfxyBIr6EBEnD8JzR5cEglQIXksSgBNfi6Hr_e0-vT6PCaujtHSdX93XTZxilSdVbAs37Uz_OosMbWzd2maP882CcqXgk0ynyneq2oN5Ftsew4eMT-CTwo23cRPiYtKsfs-kexTF0qQ-nK3eOU/s320/1000050053.png", category: "Apple" },
    { name: "MacBook Pro 16", price: 1120000, image: "https://example.com/images/macbook-pro-16.jpg", category: "Apple" },
    { name: "Lenovo Yoga 7i", price: 375000, image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh2Ptwy6-RJEIncHHHCY1OmvKqwnjT42BBPZaJXbhfQ2o08jBBPo5bkjukmnVANwGKl4nQsqC5HHY2X6atiXjdqDiyE5Forfqpb7Ves8CqcLkM2xmWnAK8wAabufF3pzM5JME3I2Jnr3_acnVwpn5uGzJlYupBYnqbH4dCOsTQPRV29z2WR4izBkEc8du8/s320/1000050058.png", category: "Lenovo" },
    { name: "Lenovo Legion 5", price: 510000, image: "https://example.com/images/lenovo-legion.jpg", category: "Lenovo" },
    { name: "Dell XPS 13", price: 520000, image: "https://example.com/images/dell-xps.jpg", category: "Dell" },
    { name: "Dell Vostro 3400", price: 270000, image: "https://example.com/images/dell-vostro.jpg", category: "Dell" }
  ];

  // Cart
  let cart = [];

  // Render products
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

  // Add to cart
  window.addToCart = function(index, btn) {
    cart.push(sampleProducts[index]);
    updateCart();
    const buyBtn = btn.nextElementSibling;
    buyBtn.style.display = "block";
  };

  // Buy now
  window.buyNow = function(index) {
    const item = sampleProducts[index];
    const message = `I want to buy:\n- ${item.name} for ₦${item.price}`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/?text=${encoded}`, "_blank");
  };

  // Update cart display
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
      "I'm ordering:\n" + cart.map(p => `- ${p.name}: ₦${p.price}`).join("\n") + `\nTotal: ₦${total}`
    )}`;
  }

  // Remove from cart
  window.removeFromCart = function(index) {
    if (!confirm("Are you sure you want to remove this item?")) return;
    const itemElement = cartItems.children[index];
    itemElement.classList.add("fade-out");
    setTimeout(() => {
      cart.splice(index, 1);
      updateCart();
    }, 300);
  };

  // Filter products
  window.filterProducts = function(category) {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
      const itemCat = sampleProducts[index].category;
      card.style.display = category === "all" || itemCat === category ? "block" : "none";
    });
  };

  // Menu & accordion
  window.toggleMenu = function() {
    document.getElementById("sideMenu").classList.toggle("show");
  };
  window.toggleAccordion = function(element) {
    const content = element.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
  };
  window.showCartModal = function() {
    cartModal.style.display = cartModal.style.display === "none" ? "block" : "none";
  };

  // Auto-close menu links
  const menuLinks = document.querySelectorAll("#sideMenu a");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => document.getElementById("sideMenu").classList.remove("show"));
  });

  // Initial render
  renderCards();
});
