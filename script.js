<script>
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
  }
</script>





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
