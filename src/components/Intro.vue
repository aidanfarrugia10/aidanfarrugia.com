<template>
    <section id="intro" class="d-flex align-items-center">
      <div class="left-side">
        <img src="@/assets/Images/MainLogo.png" class="logo" alt="Logo" />
      </div>
      <div class="right-side">
        <h1>Hello, I'm</h1>
        <h2>AIDAN FARRUGIA</h2>
      </div>
    </section>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>


/* Intro Section Styling */
#intro {
    display: flex;  /* Use flexbox to create two columns */
    justify-content: space-between;
    align-items: center;
    height: 100vh;  /* Take full height of the viewport */
    color: #fff;
    background-color: #ffffff;
    padding: 0 20px;
}

#intro img{
    margin-left: 3rem;
}

#intro .left-side {
    flex: 1;  /* Left side takes up 50% of the section */
}

#intro .right-side {
    flex: 1;  /* Right side takes up 50% of the section */
    text-align: left;  /* Align text to the left */
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 20px;  /* Add some space on the left */
}

#intro h1 {
    font-size: 4rem;  /* Adjust size for "Hello, I'm" */
    color: #3a3a3a;
    margin-bottom: 20px; /* Space between texts */
    
}


#intro h2 {
    font-size: 6rem;  /* Adjust size for name */
    font-weight: bold;
    font-family: Helvetica, Arial, sans-serif;
    color: #ff4500; /* Orange color for name */
    margin-bottom: 0;
   
}



/* Logo Animation */
#intro .left-side .logo {
    max-width: 90%;  /* Ensure the logo is responsive */
    height: auto;
    animation: rotateAndScale 3s ease-in-out infinite, bounce 2s ease-in-out infinite;
    transform-origin: center;
    margin-left: -1rem;
}


/* Continuous Rotate and Scale Animation */
@keyframes rotateAndScale {
    0% {
        transform: rotate(0deg) scale(1);
    }
    50% {
        transform: rotate(180deg) scale(1.2);  /* Scale up and rotate */
    }
    100% {
        transform: rotate(360deg) scale(1);  /* Rotate back to original position */
    }
}

/* Bouncing Animation */
@keyframes bounce {
    0%, 100% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-20px);  /* Bounce effect */
    }
}

@import './base.css';

* {
  font-family: 'Figtree', sans-serif;
}

#app {
  padding: 0 !important; /* Ensures padding is removed */
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: 0;
}

@media (max-width: 992px) {
 

  #intro h1 {
      font-size: 3rem;
  }

  #intro h2 {
      font-size: 5rem;
  }

  #intro img{
      margin-left: -3rem;
  }

}

/* Mobile Adjustments */
@media (max-width: 768px) {
  #intro {
    margin-top: 5rem;
      flex-direction: column;  /* Stack elements vertically */
      height: auto;
      padding: 10px;
      text-align: center; /* Center-align for smaller screens */
  }

  #intro h1 {
    margin-top: 3rem;
      margin-bottom: 1.5rem;
      text-align: center;
  }

  #intro h2 {
      font-size: 3rem; /* Adjusted for mobile */
      margin-bottom: 10rem;
      text-align: center;
  }


  #intro img{
      margin-left: -3rem;
  }


 
}

@media (max-width: 576px) {
  #intro h1 {
      font-size: 2rem; /* Further reduced for very small screens */
  }

  #intro h2 {
      font-size: 3rem;
  }

  #intro .left-side .logo {
      max-width: 60%; /* Further reduction for extra-small screens */
  }



}

/* Additional styling for smoother transitions */
#intro h1, #intro h2 {
  transition: font-size 0.3s ease;
}

#intro .left-side .logo {
  transition: max-width 0.5s ease;
}

  </style>

 