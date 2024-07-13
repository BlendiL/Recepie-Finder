<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light transparent-navbar">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Recipe Finder</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/favorites" class="nav-link">Favorites</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100..700;1,100..700&display=swap');

body {
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  background-color: #f8f9fa;
}

#app {
  text-align: center;
  background-image: url('views/background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  z-index: 1;
}

#app::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.3); /* Adjust the opacity to make it darker or lighter */
  z-index: -1;
}

.transparent-navbar {
  background: rgba(49, 77, 18, 0.3);
  backdrop-filter: blur(10px);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-brand {
  font-size: 1.75em;
  font-weight: 700;
  color: #1977d5;
}

.nav-link {
  margin: 0 15px;
  font-size: 1.1em;
  color: #555;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #1977d5;
}

.container-fluid {
  padding-left: 0;
  padding-right: 0;
}

/* Remove gap between header and page start */
body, #app {
  padding-top: 0;
  margin-top: 0;
}

.navbar {
  margin-bottom: 0;
}

@media (max-width: 767px) {
  .navbar-brand {
    font-size: 1.5em;
  }

  .nav-link {
    margin: 0 10px;
    font-size: 1em;
  }
}
</style>
