<!-- src/App.vue -->
<template>
    <div id="app">
      <Navbar />
      <Intro />
      <Clients />
      <AvailableServices />
      <Footer />
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Nav.vue';
  import Intro from '../components/Intro.vue';
  import Clients from '../components/Clients.vue';
  import AvailableServices from '../components/AvailableServices.vue';
  import Footer from '../components/Footer.vue';
  
  export default {
    components: {
      Navbar,
      Intro,
      Clients,
      AvailableServices,
      Footer,
    },
  };
  </script>
  
  <style>
  
  /* General Styling and Overflow Fixes */
  *,
  *::before,
  *::after {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
  }
  
  html, body {
      width: 100%;
      overflow-x: hidden;
      font-family: Arial, sans-serif;
      color: #554f4f;
  }
  
  
  </style>