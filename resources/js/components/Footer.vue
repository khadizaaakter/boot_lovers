<template>
  <footer class="site-footer">
    <div class="max-w-7xl mx-auto px-6 py-14">
      <div class="grid grid-cols-2 md:grid-cols-4 gap-10">
        <div>
          <p class="brand font-display">
            <span>Boot</span><span class="brand-accent"> Lovers</span>
          </p>
          <p class="brand-desc">
            Premium boots, sneakers, formal and sports shoes — delivered anywhere in
            Bangladesh.
          </p>
        </div>

        <div>
          <h4 class="col-title">Shop</h4>
          <ul class="col-links">
            <li><a href="#">Boots</a></li>
            <li><a href="#">Sneakers</a></li>
            <li><a href="#">Formal</a></li>
            <li><a href="#">Sports</a></li>
            <li><a href="#">Kids</a></li>
            <li><a href="#">Belts</a></li>
            <li><a href="#">Premium Bags</a></li>
          </ul>
        </div>

        <div>
          <h4 class="col-title">Help</h4>
          <ul class="col-links">
            <li><a href="#">Order tracking</a></li>
            <li><a href="#">Size guide</a></li>
            <li><a href="#">Returns &amp; exchange</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        <div>
          <h4 class="col-title">Pay with</h4>
          <ul class="col-links">
            <li><a href="#">bKash</a></li>
            <li><a href="#">Cash on delivery</a></li>
          </ul>
        </div>
      </div>

      <div class="copy">© 2026 Boots Lover. All rights reserved.</div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: #efe6d8;
  color: #1a1a1a;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
}

.brand {
  font-size: 1.5rem;
  font-weight: 700;
  letter-spacing: -0.01em;
  margin-bottom: 12px;
}
.brand-accent {
  color: #f59222;
}

.brand-desc {
  color: #6f6a5e;
  font-size: 0.92rem;
  line-height: 1.6;
  max-width: 280px;
}

.col-title {
  font-weight: 600;
  font-size: 0.95rem;
  margin-bottom: 14px;
  color: #1a1a1a;
}

.col-links {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.col-links a {
  color: #6f6a5e;
  font-size: 0.92rem;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease, padding-left 0.3s ease;
}
.col-links a::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  width: 0;
  height: 1px;
  background: #f59222;
  transition: width 0.35s cubic-bezier(0.2, 0.8, 0.2, 1);
}
.col-links a:hover {
  color: #f59222;
  padding-left: 14px;
}
.col-links a:hover::before {
  width: 10px;
}

.copy {
  text-align: center;
  margin-top: 50px;
  padding-top: 22px;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  color: #8a8478;
  font-size: 0.88rem;
}
.py-14 {
  padding-bottom: 1.5rem;
}
</style>
