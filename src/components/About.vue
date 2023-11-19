<template>
    <Nav />
    <!-- <main>
        <div id="about" class="main-container no-scroll" style="overflow: hidden">
            <div class="d-flex justify-content-center align-items-center min-vh-100">
                <div class="card-container">
                    <div class="card" style="background-color: #1e1e1f; padding: 20px; border-radius: 10px;">
                        <div class="card-header">
                            <h1 class="card-title" style="color: #ff8906;">About</h1>
                        </div>
                        <div class="d-flex align-items-center">
                            <div class="circle-image-container fadein-up" style="padding: 30px;">
                                <img class="rounded-circle" src="img/avatar.jpeg" alt="Foto">
                            </div>
                            <div class="md:w-7/12 fadein-right" style="padding: 20px;">
                                <p class="mb-3 md:mb-7 fadein-right fadeins-1">
                                    &nbsp; &nbsp; &nbsp; Hi everybody! My name is Mochamad Ramdhan Irawan. I am Student from
                                    Sukabumi City, West Java. I,
                                    I am a class 12 student at SMKN2 Sukabumi, and my major is Rekayasa Prangkat Lunak (RPL)
                                </p>
                                <p class="mb-3 fadein-right fadeins-2">
                                    &nbsp; &nbsp; &nbsp; I dream of becoming a programmer who can bring people, more
                                    specifically
                                    students, to like the world of programming, I am still learning here too. With the aim
                                    of making
                                    this web portfolio, I want to practice my programming skills.That's all my description
                                    and goals, Thank you ALL!!
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-container">
        <div class="custom-card">
        <article data-page="about">
            <header>
                <div class="custom-header">
                    <h3 class="custom-title">
                        <div class="custom-title-line"></div>
                        Skills
                    </h3>
                </div>
            </header>
            <section>
                <div>
                    </div>
                    <div v-show="activeTab === 1">
                    <div class="custom-grid">
                        <div v-for="item in tech" :key="item.id" class="custom-item">
                            <div class="custom-img-container">
                                <img alt="HTML" loading="lazy" :src="item.imageUrl" class="custom-img">
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
    </main> -->
</template>

<script setup>
// import Nav from '../components/layout/nav.vue'
</script>

<style scoped>
/* main,
#about {
    background-color: #0f0e17;
}

.card-container {
    margin-top: 30px;
    margin-left: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
}

.card {
    background-color: #1e1e1f;
    padding: 20px;
    border-radius: 10px;
    color: #fffffe;
    max-width: 1000px;
    width: 100%;
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

.custom-card {
    padding: 2rem 1.5rem;
    background-color: #0f0e17;
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
    gap:2rem;
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
    background-color: #0f0e17;
    min-height: 20vh;
} */
</style>

// <script>
// export default {
//     data() {
//         return {
//             activeTab: 1,
//             tech: [
//                 {
//                     id: 1,
//                     name: 'CONTOH UPDATE',
//                     imageUrl: 'https://cdn-icons-png.flaticon.com/512/1051/1051277.png',
//                     status: 'Advanced'
//                 },
//                 {
//                     id: 2,
//                     name: 'CSS',
//                     imageUrl: 'https://cdn-icons-png.flaticon.com/512/732/732190.png',
//                     status: 'Advanced'
//                 },
//                 {
//                     id: 3,
//                     name: 'Laravel',
//                     imageUrl: 'https://cdn.worldvectorlogo.com/logos/laravel-2.svg',
//                     status: 'Advance'
//                 },
//                 {
//                     id: 4,
//                     name: 'VueJS',
//                     imageUrl: 'https://cdn.iconscout.com/icon/free/png-256/free-vue-282497.png?f=webp',
//                     status: 'Intermediate'
//                 },
//                 {
//                     id: 5,
//                     name: 'Tailwind',
//                     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
//                     status: 'Advance'
//                 },
//                 {
//                     id: 6,
//                     name: 'Bootstrap',
//                     imageUrl: 'https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo-shadow.png',
//                     status: 'Intermediate'
//                 },
//                 {
//                     id: 7,
//                     name: 'Python',
//                     imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png',
//                     status: 'Beginner'
//                 },
//                 {
//                     id: 8,
//                     name: 'C#',
//                     imageUrl: 'https://storage.googleapis.com/kotakode-prod-public/images/716ae909-105b-4e00-82fc-584187b5aecf-pngegg.png',
//                     status: 'Beginner'
//                 },
//             ],
//         };
//     }
// }
// </script>