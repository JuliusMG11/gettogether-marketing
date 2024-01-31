<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import "swiper/css/free-mode"
import "swiper/css/navigation"
import "swiper/css/thumbs"

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper';

export default defineComponent({
    components: {
        Swiper,
      SwiperSlide,
    },
    setup() {
        const thumbsSwiper = ref(null)

        const setThumbsSwiper = (swiper) => {
            thumbsSwiper.value = swiper;
        }

    return {
      setThumbsSwiper,
      thumbsSwiper,
      modules: [FreeMode, Navigation, Thumbs],
    }
    },
})
</script>
<template>
  <section class="testimonials-section relative pt-32 pb-16">
    <div class="container">
         <div class="content-section text-center">
            <div class="title">
                <h2>Napsali</h2>
            </div>
            <div class="subtitle outline-purple">
                <h2>o nás</h2>
            </div>
         </div>
        <div class="testimonials pt-8 flex justify-center">
            <div class="testimonials-content relative">
                <div class="bg-object">
                    <img src="@/assets/img/svg/circle-bg.svg" alt="">
                </div>
                <swiper 
                    class="slider"
                    @swiper="setThumbsSwiper"
                    :navigation="true"
                    :slidesPerView="1"
                    :watchSlidesProgress="true"
                    :modules="modules"
                >
                    <swiper-slide>
                        <div class="box-content flex justify-center">
                            <div class="box flex flex-col items-center">
                                <div class="logo">
                                    <img src="@/assets/img/testimonials/amk.png" alt="">
                                </div>
                                <div class="description text-center pt-6">
                                    <p>
                                        “Díky webovým stránkám můžeme naším 
                                        návštěvníkům nabídnout detailní přehled o 
                                        pořádaných závodech u nás v Hořicích.”
                                    </p>
                                </div>
                                <div class="profile pt-8 text-center">
                                    <h3 class="p-2">Zdeněk Brabec</h3>
                                    <span>Ředitel AMK Hořice</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="box-content flex justify-center">
                            <div class="box flex flex-col items-center">
                                <div class="logo">
                                    <img src="@/assets/img/testimonials/regenerujte.png" alt="">
                                </div>
                                <div class="description text-center pt-6">
                                    <p>
                                        “Při využití kompletního marketingového se nám zvýšili 
                                        tržby o 200% a naše náklady na marketing se snížili o 65%.”
                                    </p>
                                </div>
                                <div class="profile pt-8 text-center">
                                    <h3 class="p-2">Jana Hrinková</h3>
                                    <span>Majitelka eshopu</span>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper> 
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.bg-object {
    position: absolute;
    top: 20px;
    z-index: 2;
    width:320px;
    height: 320px;

}

.testimonials-section {
    @media (max-width: 768px) {
        padding-top: 32px;
    }
}

.testimonials-content {
    display: flex;
    justify-content: center;
    max-width: 80%;
    position: relative;

    @media (max-width: 1024px) {
        max-width: 100%;
    }
}

.slider {
    position: relative;
    z-index: 5;
}

.box {
    max-width: 70%;

    @media (max-width: 520px) {
        max-width: 100%;
        padding-left: 32px;
        padding-right: 32px;

        .profile {
            padding-top: 16px;
        }

        .description {
            padding-top: 12px;
        }
    }

    p {
        font-size: 22px;
        line-height: 32px;

        @media (max-width: 520px) {
            font-size: 16px;
            line-height: 26px;
        }
    }

    h3 {
        font-size: 20px;
        font-weight: 800;
    }

    span {
        font-size: 18px;
        font-weight: 400;
    }

    .logo {
        width: 220px;
        img {
            width: 100%;
            height: 100%;
        }
    }
}
</style>