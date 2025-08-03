<!-- PWA Service Worker -->
<script>
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js')
      .then(function() { console.log("Service Worker Registered"); });
  }
</script>
<div id="footer-placeholder"></div>

<script>
  fetch("footer.html")
    .then(res => res.text())
    .then(data => {
      document.getElementById("footer-placeholder").innerHTML = data;

      // Optional: Load footer JS after injecting
      const script = document.createElement('script');
      script.src = 'footer-dropdown.js';
      document.body.appendChild(script);
    });
</script>







<script>
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
</script>
