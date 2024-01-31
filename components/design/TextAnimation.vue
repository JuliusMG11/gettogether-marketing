<script setup>
  const xMarketing = ref(0);
  const yMarketing = ref(0);
  const hoverMarketing = ref(false);
  const textMarketing = ref(null);
  const marketingCircle = ref(null);

  const xSeo = ref(0);
  const ySeo = ref(0);
  const hoverSeo = ref(false);
  const textSeo = ref(null);
  const seoCircle = ref(null);

  const xWeb = ref(0);
  const yWeb = ref(0);
  const hoverWeb = ref(false);
  const textWeb = ref(null);
  const webCircle = ref(null);

  const handleMouseMove = (event) => {
    xMarketing.value = event.clientX;
    yMarketing.value = event.clientY - textMarketing.value.offsetHeight;

    console.log(window.pageYOffset)

    xSeo.value = event.clientX;
    ySeo.value = event.clientY + textSeo.value.offsetHeight;

    xWeb.value = event.clientX;
    yWeb.value = event.clientY + textSeo.value.offsetHeight;
  };

  onMounted(() => {

    // MOUSEENTER

      textMarketing.value.addEventListener('mouseenter', () => {hoverMarketing.value = true;});
      
      // document.addEventListener('scroll', handleMouseMove);      
      textSeo.value.addEventListener('mouseenter', () => {hoverSeo.value = true;});
      textWeb.value.addEventListener('mouseenter', () => {hoverWeb.value = true;});
    
       // MOUSELEAVE
      textMarketing.value.addEventListener('mouseleave', () => {hoverMarketing.value = false;});
      textSeo.value.addEventListener('mouseleave', () => {hoverSeo.value = false;});
      textWeb.value.addEventListener('mouseleave', () => {hoverWeb.value = false;});

      // MOUSEMOVE
      textMarketing.value.addEventListener('mousemove', handleMouseMove);
      textSeo.value.addEventListener('mousemove', handleMouseMove);
      textWeb.value.addEventListener('mousemove', handleMouseMove);
      
  });


  onBeforeMount(() => {
    
  })

  // onUnmounted(() => {

  //   // MOUSEENTER

  //   textMarketing.value.removeEventListener('mouseenter', () => {hoverMarketing.value = true;});
  //   textSeo.value.removeEventListener('mouseenter', () => {hoverSeo.value = true;});
  //   textWeb.value.removeEventListener('mouseenter', () => {hoverWeb.value = true;});

  //   // MOUSELEAVE
  //   textMarketing.value.removeEventListener('mouseleave', () => { hoverMarketing.value = false;});
  //   textSeo.value.removeEventListener('mouseleave', () => {hoverSeo.value = false;});
  //   textWeb.value.addEventListener('mouseleave', () => {hoverWeb.value = false;});


  //   // MOSUEMOVE
  //   textMarketing.value.removeEventListener('mousemove', handleMouseMove);
  //   textSeo.value.removeEventListener('mousemove', handleMouseMove);
  //   textWeb.value.addEventListener('mousemove', handleMouseMove);
  // });

</script>

<template>
<section class="animation-text flex gap-24 pt-16">
  <div class="textMarketing">
    <router-link to="/online-marketing">
      <div ref="textMarketing" class="text-marketing">
        Online marketing
      </div>
      <transition name="fade">
        <div 
          ref="marketingCircle"
          class="hover-marketing"
          v-if="hoverMarketing"
          :style="{
            left: xMarketing - 90 + 'px',
            top: yMarketing - 20 + 'px',
          }"
        >
          <img src="@/assets/img/references/reference1.jpg" />
        </div>
      </transition>
    </router-link>
  </div>

  <div class="textSeo">
   <router-link to="/seo">
      <div ref="textSeo" class="text-seo">
        SEO
      </div>
      <transition name="fade">
        <div 
          ref="seoCircle"
          class="hover-seo"
          v-if="hoverSeo"
          :style="{
            left: xSeo - 90 + 'px',
            top: ySeo - 160 + 'px',
          }"
        >
          <img src="@/assets/img/references/seo-anim.png" />
        </div>
      </transition>
    </router-link>
  </div>

  <div class="textWeb">
    <router-link to="/online-marketing">
      <div ref="textWeb" class="text-web">
        Websites
      </div>
      <transition name="fade">
        <div 
          ref="webCircle"
          class="hover-web"
          v-if="hoverWeb"
          :style="{
            left: xWeb - 90 + 'px',
            top: yWeb - 160 + 'px',
          }"
        >
          <img src="@/assets/img/references/example1.jpg" />
        </div>
      </transition>
    </router-link>
  </div>
</section>
</template>

<style lang="scss" scoped>
.animation-text {
  @media (max-width: 1024px) {
    gap: 32px;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
}

.text-marketing,
.text-seo,
.text-web {
  // padding: 20px;
  -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: $color-primary;
  font-weight: 900;
  font-size: 52px;
  z-index: 20;
  position: relative;
  width: max-content;

  &:hover {
    cursor: pointer;
  }

  @media (max-width: 1024px){
    font-size: 42px;
  }

  @media (max-width: 520px){
    font-size: 32px;
  }
}

.hover-marketing,
.hover-seo,
.hover-web {
  position: absolute;
  width: 180px;
  height: 180px;
  border-radius: 50%;
  background-color: #ddd;
  overflow: hidden;
  border: solid 2px $color-primary;

}

.hover-marketing img,
.hover-seo img,
.hover-web img {
  width: 100%;
  height: 100%;
  object-fit: contain;
  animation: move-image-infinite 10s linear infinite;
}

  .fade-enter-active, .fade-leave-active {
    transition: all 0.2s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

@keyframes move-image-infinite {
  0% {
    transform: translateY(-10px) translateX(-10px) scale(2);
  }
  40% {
    transform: translateY(20px) translateX(-20px) scale(2.2);
  }
  80% {
    transform: translateY(40px) translateX(40px) scale(2.6);
  }
  100% {
    transform: translateY(-10px) translateX(-10px) scale(2);
  }
}
</style>