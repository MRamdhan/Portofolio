<template>
<nav class="navbar navbar-expand-lg navbar-dark shadow-lg fixed-top" :class="{ 'navbar-scrolled': isScrolled }" style="background-color: #0f0e17;">    <div class="container">
      <div class="px-5 d-flex flex-row">
        <a class="navbar-brand" href="/" style="color: #fffffe;"><h2>MRamdhan;</h2></a>
        <button class="navbar-toggler ms-5" type="button" @click="toggleNavbar">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" :class="{ 'show': isNavOpen }" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item" style="margin-right: ;">
              <a class="nav-link fs-5" href="/" style="color: #fffffe;">Home</a>                          
              </li>
            <li class="nav-item" style="margin-right: ;">
              <a class="nav-link fs-5" href="/about" style="color: #fffffe;">About</a>              
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
  
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

export default {
  data() {
    return {
      isNavOpen: false,
      isScrolled: false
    };
  },
  methods: {
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0;
    },
    scrollToSection(sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: "smooth"
        });
      }
    }
  },
  mounted() { 
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  }
};
</script>

<style scoped>
.navbar-scrolled {
  background-color: rgba(255, 255, 255, 0.9);
  transition: background-color 0.3s ease;
}
a[href^="#"] {
  scroll-behavior: smooth;
}
</style>