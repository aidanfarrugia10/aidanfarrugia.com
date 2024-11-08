<template>
  <section id="available-services" class="container">
    <h1 class="section-title">Available Services</h1>
    <div v-for="(service, index) in services" :key="index" class="service-row">
      <h3 class="service-title">{{ service.title }}</h3>
      <div class="service-details">
        <p v-for="(detail, i) in service.details" :key="i">{{ detail }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      services: [
        {
          title: 'eCommerce',
          details: ['Campaign Designs', 'SEO optimizing', 'Shopify'],
        },
        {
          title: 'UX/UI Design',
          details: [
            'eCommerce website design',
            'Wireframes',
            'Mobile applications and software prototypes',
            'Any mockups',
          ],
        },
        {
          title: 'Web Development',
          details: [
            'SEO & Analysis',
            'Landing Pages',
            'Back-end development',
            'Tech Related Support',
          ],
        },
        {
          title: 'Graphics and Illustrations',
          details: [
            'Rebranding',
            'Logos',
            'Business Cards, Email Signatures & Advertisements',
            'Any Design related support',
          ],
        },
      ],
    };
  },
  mounted() {
    this.addScrollListener();
  },
  methods: {
    addScrollListener() {
      const serviceRows = document.querySelectorAll('.service-row');
      
      // Scroll event listener
      window.addEventListener('scroll', () => {
        serviceRows.forEach((row) => {
          const rect = row.getBoundingClientRect();
          if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            row.classList.add('visible');
          } else {
            row.classList.remove('visible');
          }
        });
      });
    }
  }
};
</script>

<style scoped>
/* Available Services Section Styling */
#available-services {
  padding: 60px 0;
  background-color: #f9f9f9;
  text-align: right;
}

#available-services .container {
  max-width: 800px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #333;
  text-align: center;
  margin-bottom: 3rem;
}

.service-row {
  position: relative;
  margin-bottom: 2.5rem;
  padding: 20px;
  border-bottom: 1px solid #ddd;
  transition: transform 0.3s ease;
  opacity: 0; /* Initially invisible for scroll effect */
  transform: translateY(20px); /* Slide-in effect on scroll */
}

.service-title {
  font-size: 1.8rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 0.5rem;
}

.service-details p {
  font-size: 1rem;
  color: #555;
  margin: 0.3rem 0;
}

/* Lines Styling */
.service-row::before,
.service-row::after {
  content: '';
  position: absolute;
  height: 2px;
  width: 0;
  background-color: #007bff; /* Start with blue */
  left: 50%;
  transition: width 0.6s ease, background-color 0.4s ease;
  opacity: 0; /* Start invisible */
}

.service-row::before {
  top: 0;
}

.service-row::after {
  bottom: 0;
}

/* Scroll Effect (for Mobile) */
.service-row.visible {
  opacity: 1;
  transform: translateY(0);
}

.service-row.visible::before,
.service-row.visible::after {
  width: 100%; /* Full line width */
  left: 0;
  opacity: 1;
  background-color: #ffa726; /* Transition to orange */
}
</style>