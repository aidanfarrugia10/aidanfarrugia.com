<template>
    <section id="contact" class="container py-5">
      <form @submit.prevent="handleSubmit" style="max-width: 500px; margin: 0 auto; padding: 2rem; border-radius: 8px; box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1); background-color: #f9f9f9;">
        <h3 style="text-align: center; color: #3a3a3a; margin-bottom: 1rem; font-size: 1.5rem; font-weight: bold;">Contact Me</h3>
  
        <!-- Name Field -->
        <div class="form-group mb-3">
          <input type="text" name="name" v-model="formData.name" class="form-control" placeholder="Your Name" required />
        </div>
  
        <!-- Email Field -->
        <div class="form-group mb-3">
          <input type="email" name="email" v-model="formData.email" class="form-control" placeholder="Your Email" required />
        </div>
  
        <!-- Message Field -->
        <div class="form-group mb-3">
          <textarea name="message" v-model="formData.message" class="form-control" rows="4" placeholder="Your Message" required></textarea>
        </div>
  
        <!-- Budget Field with Currency Selector -->
        <div class="form-group mb-3 d-flex">
          <select v-model="formData.currency" class="form-control" style="width: 30%;" required>
            <option v-for="currency in currencies" :value="currency.code" :key="currency.code">
              {{ currency.name }}
            </option>
          </select>
          <input type="text" v-model="formData.budget" name="budget" class="form-control" placeholder="Budget (Optional)" style="flex: 1; margin-left: 10px;" />
        </div>
  
        <!-- Country Selector and Mobile Number Field -->
        <div class="form-group mb-3 d-flex align-items-center">
          <select v-model="formData.countryCode" name="countryCode" class="form-control" style="width: 35%;" required>
            <option v-for="country in countries" :value="country.code" :key="country.code">
              {{ country.name }}
            </option>
          </select>
          <input type="tel" v-model="formData.mobile" name="mobile" class="form-control" placeholder="Your Mobile Number" title="Enter a valid mobile number" required style="flex: 1; margin-left: 10px;" />
        </div>
  
        <!-- Submit Button -->
        <button type="submit" class="btn btn-primary">Send Message</button>
      </form>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          message: '',
          currency: 'USD',
          budget: '',
          countryCode: '+356',
          mobile: '',
        },
        currencies: [
          { name: 'USD - $', code: 'USD' },
          { name: 'EUR - €', code: 'EUR' },
          { name: 'GBP - £', code: 'GBP' },
          { name: 'AUD - A$', code: 'AUD' },
          { name: 'CAD - CA$', code: 'CAD' },
          { name: 'INR - ₹', code: 'INR' },
          { name: 'JPY - ¥', code: 'JPY' },
          { name: 'CNY - ¥', code: 'CNY' },
          { name: 'MXN - $', code: 'MXN' },
          { name: 'BRL - R$', code: 'BRL' },
          { name: 'ZAR - R', code: 'ZAR' },
        ],
        countries: [
          { name: 'USA (+1)', code: '+1' },
          { name: 'UK (+44)', code: '+44' },
          { name: 'Australia (+61)', code: '+61' },
          { name: 'India (+91)', code: '+91' },
          { name: 'France (+33)', code: '+33' },
          { name: 'Germany (+49)', code: '+49' },
          { name: 'Spain (+34)', code: '+34' },
          { name: 'Italy (+39)', code: '+39' },
          { name: 'Brazil (+55)', code: '+55' },
          { name: 'China (+86)', code: '+86' },
          { name: 'Japan (+81)', code: '+81' },
          { name: 'Russia (+7)', code: '+7' },
          { name: 'South Korea (+82)', code: '+82' },
          { name: 'South Africa (+27)', code: '+27' },
          { name: 'Egypt (+20)', code: '+20' },
          { name: 'UAE (+971)', code: '+971' },
          { name: 'Mexico (+52)', code: '+52' },
          { name: 'Malta (+356)', code: '+356' },
        ],
      };
    },
    methods: {
      handleSubmit() {
        // POST request to Formspree
        fetch("https://formspree.io/f/xyzywewk", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        })
          .then(response => {
            if (response.ok) {
              alert("Message sent successfully!");
              this.resetForm();
            } else {
              alert("Error sending message.");
            }
          })
          .catch(error => {
            console.error("Error:", error);
            alert("There was an error submitting the form.");
          });
      },
      resetForm() {
        this.formData = {
          name: '',
          email: '',
          message: '',
          currency: 'USD',
          budget: '',
          countryCode: '+356',
          mobile: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  /* Contact Form Styling */
  form {
    max-width: 500px;
    margin: 0 auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }
  
  h3 {
    text-align: center;
    color: #3a3a3a;
    margin-bottom: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  </style>