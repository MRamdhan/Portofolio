<template>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous" />
  <!-- Bagian Utama -->
  <main>
    <div id="home" style="overflow: hidden">
      <div class="d-flex justify-content-center align-items-center" style="min-height: 100vh">
        <div class="container">
          <div class="row align-items-center">
            <!-- Kolom Gambar -->
            <div class="col-md-6 mb-4 order-md-2">
              <div class="flex justify-center md:justify-start fadein-right">
                <img :src="profile" alt="avatar" fetchpriority="high" decoding="async" data-nimg="1" style="
                    width: 80%;
                    max-width: 200%;
                    border-radius: 50%;
                    margin: 0 auto 20px;
                    display: block;
                  " class="rounded-circle pict" />
                  <!-- <img alt="HTML" loading="lazy" :src="item.imageUrl" class="custom-img" /> -->
              </div>
            </div>
            <div class="col-md-6">
              <div class="text-center text-md-left">
                <h5 style="color: #fffffe"><b>Hello, I'm</b></h5>
                <h1 class="text-large" style="color: #ff8906; margin-bottom: 1rem">
                  <span style="font-size: 4rem; font: bold">
                    <b>{{ nama }}</b>
                  </span>
                </h1>
                <div>
                  <h1
                    class="typewrite text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600 text-white md:text-2xl fadein-up"
                    ref="typewriter">
                    <span class="wrap">
                      <b>{{ txt }}</b>
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- About -->
  <div style="background-color: #242629; padding: 15px; color: #fffffe; max-width: 100%">
    <article data-page="about">
      <header>
        <div style="
            font-size: 1.25rem;
            font-weight: bold;
            color: white;
            margin-bottom: 1rem;
            animation: fadeInLeft 0.5s ease-out forwards;
          ">
          About Me &nbsp;
          <div style="
              height: 1px;
              width: 96px;
              background-color: #ff8906;
              animation: zoom-in-left 0.6s;
            " data-aos="zoom-in-left" data-aos-duration="600"></div>
        </div>
      </header>
      <section style="
          font-size: 0.875rem;
          text-align: justify;
          animation: fadeInUp 0.5s ease-out forwards;
        ">
        <div style="width: 100%; font-size: 1rem">
          <p style="animation: fadein-left 0.5s forwards; padding: 20px">
            Hi everybody! My name is Mochamad Ramdhan Irawan. I am Student from Sukabumi
            City, West Java. I, I am a class 12 student at SMKN2 Sukabumi, and my major is
            Rekayasa Prangkat Lunak (RPL).
            <br />
            <br />
            My dream of becoming a programmer who can bring people, more specifically
            students, to like the world of programming, I am still learning here too. With
            the aim of making this web portfolio, I want to practice my programming
            skills. That's all my description and goals, Thank you ALL!!
          </p>
        </div>
      </section>
    </article>
  </div>

  <!-- Card Skills -->
  <div class="page-container">
    <div class="custom-card">
      <article data-page="about">
        <header>
          <div class="custom-header">
            <h3 class="custom-title">
              <div class="custom-title-line"></div>
              Skills
              <div style="
                  height: 1px;
                  width: 96px;
                  background-color: #ff8906;
                  animation: zoom-in-left 0.6s;
                " data-aos="zoom-in-left" data-aos-duration="600"></div>
            </h3>
          </div>
        </header>
        <section>
          <div></div>
          <div v-show="activeTab === 1">
            <div class="custom-grid">
              <div v-for="item in tech" :key="item.id" class="custom-item">
                <div class="custom-img-container">
                  <img alt="HTML" loading="lazy" :src="item.imageUrl" class="custom-img" />
                </div>
                <div class="custom-text">
                  <div class="custom-tech">{{ item.name }}</div>
                  <div class="custom-status">{{ item.status }}</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </div>
  </div>

  <div class="form-container">
    <div style="background-color: #242629">
      <div id="portofolio">
        <div class="d-flex justify-content-center align-items-center min-vh-80">
          <h1 style="
              padding-top: 30px;
              font-family: Arial, Helvetica, sans-serif;
              color: #ff8906;
            ">
            <b> Projects that I've made </b>
          </h1>
        </div>
        <div class="container mt-5">
          <div class="row">
            <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4 mb-4">
              <div class="card">
                <img class="card-img-top" :src="project.imageUrl" alt="Card image cap" />
                <div class="card-body">
                  <h5 class="card-title">{{ project.title }}</h5>
                  <hr style="height: 1px" />
                  <p class="card-text">{{ project.description }}</p>
                  <p class="card-text" style="color: #ff8906">
                    <small>{{ project.technologies }}</small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    // profile : [{
    //   img: "img/pp2.jpg"
    // }],
      projects: [
        {
          id: 1,
          title: "Polling",
          description:
            "a website for creating polls or voting. Such as the election for class president, student council president, RT/RW head",
          technologies: "VueJS 3, Laravel API, Bootstrap 5",
          imageUrl: "img/poll.jpeg",
        },
        {
          id: 2,
          title: "Haji Gemilang",
          description:
            "a website to make it easier for pilgrims who want to carry out the pilgrimage, starting from prayer, procedures for Hajj and others",
          technologies: "VueJS 3, Bootstrap 5",
          imageUrl: "img/haji.jpeg",
        },
        {
          id: 3,
          title: "E-Certificate",
          description:
            "This is a website that was created when I was doing PKL. this website to generate E-Certificates automatically.to make it easier for users to create E-certificates",
          technologies: "VueJS 3, Python API, Tailwind",
          imageUrl: "img/sertifikat.jpeg",
        },
        {
          id: 4,
          title: "Snake Game",
          description: "a simple snake game website, to train me to learn javascript",
          technologies: "Javascript",
          imageUrl: "img/ular.jpeg",
        },
        {
          id: 5,
          title: "Food XYZ",
          description:
            "This is my first android application, for food purchase transactions",
          technologies: "Kotlin, C# API",
          imageUrl: "img/xyz.jpeg",
        },
        {
          id: 6,
          title: "Portofolio",
          description:
            "My personal website, I created this website to display a profile about me and the skills I have",
          technologies: "VueJS 3, Tailwind",
          imageUrl: "img/porto.jpeg",
        },
        {
          id: 7,
          title: "Toko Online",
          description:
            "I was given the task of creating an online shop website from my school, this website can be used to sell goods or buy goods available on this website",
          technologies: "Laravel, Bootstrap 5",
          imageUrl: "img/online.png",
        },
        {
          id: 8,
          title: "Destinasi",
          description:
            "a simple website, I was given the task of creating a destination for my school, this website can see what tourist destinations are on this website",
          technologies: "Laravel, Bootstrap 5",
          imageUrl: "img/destinasi.png",
        },
        {
          id: 9,
          title: "Web Sekolah",
          description:
            "The students were given the task of creating a website for the school, this website is for information about this school",
          technologies: "Wordpress",
          imageUrl: "img/skul.png",
        },
        {
          id: 10,
          title: "Mobil Bersih",
          description:
            "a website to make it easier for a car wash cashier and make it easier for the owner to view car wash transaction data",
          technologies: "Laravel, Bootstrap 5",
          imageUrl: "img/carwash.png",
        },
      ],
      activeTab: 1,
      tech: [
        {
          id: 1,
          name: "HTML 5",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/1051/1051277.png",
          status: "Advanced",
        },
        {
          id: 2,
          name: "CSS",
          imageUrl: "https://cdn-icons-png.flaticon.com/512/732/732190.png",
          status: "Advanced",
        },
        {
          id: 3,
          name: "JavaScript",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
          status: "Beginer",
        },
        {
          id: 4,
          name: "Laravel",
          imageUrl: "https://cdn.worldvectorlogo.com/logos/laravel-2.svg",
          status: "intermedite",
        },
        {
          id: 5,
          name: "VueJS",
          imageUrl:
            "https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp",
          status: "Intermediate",
        },
        {
          id: 6,
          name: "Tailwind",
          imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
          status: "Beginner",
        },
        {
          id: 7,
          name: "Bootstrap",
          imageUrl:
            "https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png",
          status: "Intermediate",
        },
        {
          id: 8,
          name: "Figma",
          imageUrl:
            "https://camo.githubusercontent.com/796ba78ff071648f47bc465148f3cf54670c34c429d775a9f800b59055eff981/68747470733a2f2f6c6f676f7479702e75732f66696c652f6669676d612e737667",
          status: "Intermediate",
        },
      ],
      toRotate: ["Frontend Developer", "UI/UX Designer ", "Student"],
      profile: "img/pp2.jpg",
      period: 2000,
      txt: "as",
      nama: "MRamdhan",
      loopNum: 0,
      isDeleting: false,
      isNavOpen: false,
      isScrolled: false,
      isMobileView: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.tick();
    });
    this.checkMobileView();
    window.addEventListener("resize", this.checkMobileView);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.checkMobileView);
  },
  methods: {
    tick() {
      let typewriter = this.$refs.typewriter;

      if (!typewriter) {
        return;
      }

      let i = this.loopNum % this.toRotate.length;
      let fullTxt = this.toRotate[i];

      this.txt = this.isDeleting
        ? fullTxt.substring(0, this.txt.length - 1)
        : fullTxt.substring(0, this.txt.length + 1);
      typewriter.innerHTML = `<span class="wrap">${this.txt}</span>`;

      let that = this;
      let delta = 200 - Math.random() * 100;

      if (this.isDeleting) {
        delta /= 2;
      }

      if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
      } else if (this.isDeleting && this.txt === "") {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
      }

      setTimeout(() => {
        that.tick();
      }, delta);
    },
    toggleNavbar() {
      this.isNavOpen = !this.isNavOpen;
    },
    handleScroll() {
      this.isScrolled = window.pageYOffset > 0;
    },
    checkMobileView() {
      this.isMobileView = window.innerWidth < 767 && window.innerHeight < 659;
    },
  },
};
</script>

<script setup>
// import Nav from '../components/layout/nav.vue'
</script>

<style scoped>
main,
#home {
  background-color: #16161a;
  margin: 0;
  padding: 0;
}

.fadein-left {
  opacity: 0;
  animation: fadeInLeft 0.5s ease-out forwards;
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.pict {
  box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
  -webkit-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
  -moz-box-shadow: 0px 0px 73px -9px rgba(255, 219, 112, 0.44);
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

@keyframes fadeInLeft {
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

@media (max-width: 767px) {
  .card-container {
    padding: 20px;
  }

  .circle-image-container {
    padding: 15px;
  }
}

.card-container {
  margin-top: 30px;
  margin-left: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 30vh;
}

.card {
  background-color: #1e1e1f;
  box-shadow: 0 4px 8px black;
  transition: transform 0.2s;
  padding: 20px;
  border-radius: 10px;
  color: #fffffe;
  max-width: 1000px;
  width: 100%;
}

.card:hover {
  transform: scale(1.05);
}

.card-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
}

.card-title {
  margin: 0;
  font-size: 2rem;
}

.circle-image-container {
  width: 1500px;
  height: 400px;
  border-radius: 50%;
  overflow: hidden;
  margin-right: 20px;
}

.circle-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

p {
  font-family: inherit;
  font-size: large;
}

.fadein-right {
  opacity: 0;
  animation: fadeInRight 0.5s ease-out forwards;
  animation-delay: 500ms;
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    transform: translateX(100%);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadein-up {
  opacity: 0;
  animation-name: fadeInUp;
  animation-duration: 0.5s;
  animation-fill-mode: forwards;
  animation-delay: 500ms;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeins-1 {
  animation-delay: 500ms;
}

.fadeins-2 {
  animation-delay: 800ms;
}

.img-tech,
.tech {
  transition: transform 0.3s ease;
}

.item-tech:hover .img-tech {
  transform: scale(1.3);
}

.item-tech:hover .tech {
  transform: translateY(-12px);
}

.item-tech:hover .status-tech {
  opacity: 1;
}

.custom-card {
  padding: 2rem 1.5rem;
  background-color: #16161a;
  border-radius: 10px;
  color: #fffffe;
  max-width: 1000px;
  width: 100%;
}

.custom-header {
  text-align: left;
  margin-bottom: 1.25rem;
}

.custom-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
  gap: 2rem;
}

.custom-item {
  display: flex;
  cursor: pointer;
  align-items: center;
  gap: 0.5rem;
  padding: 0.25rem 0.5rem;
  border: 1px solid #ff8906;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.custom-item:hover {
  background-color: rgba(255, 137, 6, 0.1);
}

.custom-img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  overflow: hidden;
}

.custom-img {
  width: 100%;
  height: auto;
}

.custom-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.custom-tech {
  font-size: 0.875rem;
  font-weight: medium;
  color: #ff8906;
}

.custom-status {
  opacity: 0;
  font-size: 0.625rem;
  color: #ff8906;
  transition: opacity 0.3s ease;
}

.custom-item:hover .custom-status {
  opacity: 1;
}

.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #16161a;
  min-height: 50vh;
}

.form-container {
  min-height: 100vh;
}
</style>
