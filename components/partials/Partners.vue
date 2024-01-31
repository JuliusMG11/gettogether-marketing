<template>
  <section class="partners-section relative pt-32 pb-32">
      <div class="right-object">
        <img src="@/assets/img/svg/big-circle.svg" alt="">
    </div>
    <div class="container">
         <div class="content-section">
            <div class="title">
                <h2>Členové naší rodiny</h2>
            </div>
            <div class="subtitle outline-purple">
                <h2>s dlouhodobou spoluprací</h2>
            </div>
         </div>

         <div class="logos-section pt-24">
            <div class="logo-grid grid grid-cols-5 gap-16">
                <div class="logo">
                    <img src="@/assets/img/partners/cavereon.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/topobytnevozi.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/italskysvetcz.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/regenerujte.jpg" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/veterinarnakozmetika.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/motoklub.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/permanet-makeup.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/stefak-pronajem.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/vino-klub.png" alt="">
                </div>
                <div class="logo">
                    <img src="@/assets/img/partners/zuca.png" alt="">
                </div>
            </div>
         </div>
    </div>
    <div class="gradient-circle"></div>
    </section>
</template>


<style lang="scss" scoped>

.partners-section {
    @media (max-width: 1024px) {
        padding-bottom: 64px;
    }

    @media (max-width: 768px) {
        padding-bottom: 32px;
    }
}

.right-object {
   width: 260px;
    height: 390px;
    position: absolute;
    z-index: 2;
    right: 0px;
    top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    @media (max-width: 768px) {
        width: 190px;
        height: 286px;
    }
}

.gradient-circle {
    position: absolute;
    z-index: 1;
    width: 200px;
    height: 200px;
    left: -80px;
    bottom: 0px;
    background: radial-gradient(50% 50% at 50% 50%, rgba(140, 82, 255, 0.7) 38.54%, rgba(18, 18, 18, 0) 100%);
    filter: blur(60px);
}

.logos-section {
    position: relative;
    z-index: 2;
    .logo {
        max-width: 200px;

        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }
    }

    @media (max-width: 768px) {
        padding-top: 42px;
    }
}

.logo-grid {
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }

    @media (max-width: 640px) {
        align-items: center;
        display: flex;
        flex-direction: column;
    }
}

.content-section {
    @media (max-width: 640px) {
        text-align: center;
        z-index: 2;
        position: relative;
    }
}

</style>