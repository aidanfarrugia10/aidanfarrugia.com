<template>
  <section id="clients" class="container py-5">
    <h2 class="text-center">Clients I've Worked With</h2>
    <div class="d-flex flex-wrap justify-content-center client-logos">
      <div
        v-for="(client, index) in clients"
        :key="index"
        class="client-logo"
        @mouseover="hoverClient(index)"
        @mouseleave="resetClients"
      >
        <img
          :src="client.image"
          :alt="client.name"
          :class="{
            'hovered': hoveredClientIndex === index,
            'other': hoveredClientIndex !== null && hoveredClientIndex !== index
          }"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      hoveredClientIndex: null,
      clients: [
        { name: 'TKA', image: new URL('@/assets/Images/TKA.png', import.meta.url).href },
        { name: 'DJIZAK', image: new URL('@/assets/Images/DJIZAK.png', import.meta.url).href },
        { name: 'Avelon', image: new URL('@/assets/Images/Avelon.png', import.meta.url).href },
      ],
    };
  },
  methods: {
    hoverClient(index) {
      this.hoveredClientIndex = index;
    },
    resetClients() {
      this.hoveredClientIndex = null;
    },
  },
};
</script>

<style scoped>
/* Client Logo Styling */
.client-logo img {
  width: 19rem; /* Adjust the size as needed */
  filter: grayscale(0); /* Normal state is full color */
  transition: filter 0.6s ease-in-out, transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
  display: block;
  opacity: 1; /* Normal state opacity */
}

.client-logo img.other {
  filter: grayscale(100%) blur(3px); /* Apply blur and grayscale to other logos */
  transform: scale(0.8); /* Make other logos smaller */
  opacity: 0.5; /* Dim the other logos */
}

.client-logo img.hovered {
  filter: grayscale(0) blur(0); /* No blur or grayscale on the hovered logo */
  transform: scale(1.2); /* Slightly enlarge the hovered logo */
  opacity: 1; /* Make the hovered logo fully visible */
}

.client-logos {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px; /* Add space between logos */
}

.client-logo {
  padding: 10px;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

#clients {
  display: block;
  padding-top: 50px; /* Add some top padding for spacing */
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}


/* Tablet Adjustments */
@media (max-width: 992px) {
   

    .client-logo img {
        width: 80px; /* Adjusted for tablet */
        transform: scale(0.8);
        
    }

    .client-logo:hover img {
        transform: scale(1);
    }

   
    /* DJIZAK Adjustment for Tablet */
    #DJIZAK {
        margin-left: -1.5rem;
        margin-top: 1rem;
    }

    

}

/* Mobile Adjustments */
@media (max-width: 768px) {
    


   
}

@media (max-width: 576px) {
  

  .client-logo img {
  width: 17rem; /* Adjust the size as needed */
  filter: grayscale(0); /* Normal state is full color */
  transition: filter 0.6s ease-in-out, transform 0.6s ease-in-out, opacity 0.6s ease-in-out;
  display: block;
  opacity: 1; /* Normal state opacity */
}


.client-logo:nth-child(3) img {
  margin-top: -4rem;
}

.client-logo{
  margin-bottom: -4rem;
}

}



</style>