<script>
// Sample product data (replace with real dynamic data if needed)
const latestProducts = [
  { name: "Blender Pro 5000", image: "img/blender1.jpg", price: "$39.99" },
  { name: "Air Fryer Max", image: "img/airfryer1.jpg", price: "$59.99" },
  { name: "Compact Juicer", image: "img/juicer1.jpg", price: "$29.99" },
  { name: "Multi-cooker 9in1", image: "img/multicooker1.jpg", price: "$79.99" },
  { name: "Hand Mixer Turbo", image: "img/mixer1.jpg", price: "$19.99" },
  { name: "Toaster 4-slice", image: "img/toaster1.jpg", price: "$24.99" },
  { name: "Espresso Maker", image: "img/espresso1.jpg", price: "$89.99" },
  { name: "Rice Cooker Mini", image: "img/ricecooker1.jpg", price: "$34.99" }
];

const slider = document.getElementById("productSlider");

let currentIndex = 0;

// Inject product cards
function renderCards() {
  slider.innerHTML = '';
  for (let i = 0; i < 2; i++) {
    const product = latestProducts[(currentIndex + i) % latestProducts.length];
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="card">
        <img src="${product.image}" alt="${product.name}" style="width:100%; border-radius: 8px;">
        <h3>${product.name}</h3>
        <p style="color: green;"><strong>${product.price}</strong></p>
      </div>
    `;
    slider.appendChild(card);
  }
}

// Slide every 3 seconds
renderCards();
setInterval(() => {
  currentIndex = (currentIndex + 2) % latestProducts.length;
  renderCards();
}, 3000);
</script>
