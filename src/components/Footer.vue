<template>
    <footer class="text-center py-3 bg-dark text-white">
      <div class="container">
        <p class="mb-1">&copy; {{ currentYear }} All rights reserved to Aidan Farrugia.</p>
        <p class="small">Logos are property of their respective owners.</p>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    data() {
      return {
        currentYear: new Date().getFullYear(),
      };
    },
  };
  </script>
  
  <style scoped>
  footer{

    width: 100%;
  }
  </style>