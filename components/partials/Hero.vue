<template>
<section class="hero-section relative">
    <div class="container">
         <div class="content-section">
            <div class="title relative">
                 <div class="circle-svg">
                    <img src="@/assets/img/svg/circle.svg" alt="">
                 </div>
                 <h1>
                    Úspěch na internetu si musíte postupně postavit
                </h1>
            </div>
           <DesignTextAnimation />
        </div>
    </div>
</section>
</template>

<style lang="scss" scoped>

.circle-svg {
    position: absolute;
    opacity: .3;
    width: 220px;
    height: 220px;
    top: -50px;
    left: -80px;
}


.hero-section {
    padding-top: 142px;
}

.effect {
    width: max-content;
}

.title {
    max-width: 80%;

    @media (max-width: 1024px) {
        max-width: 100%;
    }

    h1 {
        position: relative;
        z-index: 2;
    }

    &::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        left: -50px;
        top: -54px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(140, 82, 255, 0.7) 38.54%, rgba(18, 18, 18, 0) 100%);
        opacity: .6;
    }
}


</style>