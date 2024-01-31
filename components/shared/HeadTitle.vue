
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    buttonText: {
        type: String,
        required: false,
        default: ''
    },
    buttonActive: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>

<template>
  <section class="container header-title relative flex justify-center text-center">
    <div class="circle-svg">
        <img src="@/assets/img/svg/circle.svg" alt="">
    </div>
    <div class="hero-title relative flex flex-col items-center">
        <h2 class="pb-4">{{ title }}</h2>
        <p v-html="description"></p>
         <div v-show="buttonActive" class="button pt-6">
            <SharedLinkBtn link="/contact" size="big" theme="outline-theme">
                {{ buttonText }}
            </SharedLinkBtn>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.header-title {
    &::after {
        content: '';
        position: absolute;
        width: 200px;
        height: 200px;
        top: -54px;
        background: radial-gradient(50% 50% at 50% 50%, rgba(140, 82, 255, 0.7) 38.54%, rgba(18, 18, 18, 0) 100%);
        opacity: .6;
    }
}

.hero-title {
     position: relative;
    z-index: 10;
    max-width: 60%;

    @media (max-width: 1024px) {
        max-width: 80%;
    }

    @media (max-width: 768px) {
        max-width: 100%;
    }
}

.button {
    max-width: 300px;
}


.circle-svg {
    position: absolute;
    opacity: .2;
    width: 220px;
    height: 220px;
    top: -50px;
}

</style>