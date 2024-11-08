<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#intro" id="navbarBrand">Aidan Farrugia</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item" v-for="item in navItems" :key="item.name">
          <a class="nav-link" :href="item.link">{{ item.name }}</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      navItems: [
        { name: 'CV', link: '#Portfolio' },
        { name: 'Portfolio', link: '#clients' },
        { name: 'Services', link: '#available-services' },
        { name: 'Career', link: '#career' },
        { name: 'Contact', link: '../views/ContactView.vue' },
      ],
    };
  },
};
</script>

<style scoped>
/* Navbar Brand Styling */
#navbarBrand {
  font-weight: bold;
  color: #333; /* Dark grey */
  font-size: 1.6rem;
  transition: color 0.3s ease, transform 0.3s ease;
  text-decoration: none;
  margin-left: 1.4rem;
}

#navbarBrand:hover {
  color: #ff4500; /* Orange on hover */
  transform: scale(1.1); /* Slight scaling effect on hover */
}

/* Navbar Styles */
.navbar {
  background-color: #fff; /* Light background */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.navbar-nav .nav-link:hover {
  color: #ff4500; /* Orange color on hover */
}

/* Navbar Button Alignment */
.navbar-nav {
  margin-left: auto; /* Aligns the buttons to the far right */
  margin-right: 1rem;
}

.navbar-nav .nav-link:last-child {
  padding-right: 0;
}
</style>