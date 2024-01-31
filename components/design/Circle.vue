<template>
  <section class="circle-animation relative flex items-center justify-center">
    <div class="circle-shadow"></div>
    <svg width="420" height="420" viewBox="0 0 420 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="210" cy="210" r="209" stroke="#8C52FF" stroke-width="2" id="circle1"/>
        <circle cx="210" cy="210" r="176.593" stroke="#8C52FF" stroke-width="2" id="circle2"/>
        <circle cx="210.001" cy="210" r="144.185" stroke="#8C52FF" stroke-width="2" id="circle3"/>
        <circle class="test" cx="" cy="" r="10" fill="#8C52FF">
            <animateMotion dur="12s" repeatCount="indefinite">
                <mpath xlink:href="#circle1"></mpath>
            </animateMotion>
        </circle>
        <circle cx="" cy="" r="10" fill="#8C52FF">
            <animateMotion dur="8s" repeatCount="indefinite">
                <mpath xlink:href="#circle2"></mpath>
            </animateMotion>
        </circle>
         <circle cx="" cy="" r="10" fill="#8C52FF">
            <animateMotion dur="16s" repeatCount="indefinite">
                <mpath xlink:href="#circle3"></mpath>
            </animateMotion>
        </circle>
        <defs>
          <filter id="filter0_d_27_440" x="0" y="0" width="52" height="52" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feMorphology radius="10" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_27_440"/>
            <feOffset dx="1" dy="1"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0.54902 0 0 0 0 0.321569 0 0 0 0 1 0 0 0 0.32 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_27_440"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_27_440" result="shape"/>
          </filter>
        </defs>
    </svg>
</section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
svg {
    overflow: unset;

    @media (max-width: 1024px) {
        width: 320px;
        height: 320px;
    }

    @media (max-width: 640px) {
        width: 240px;
        height: 240px;
    }
}

.circle-animation {
    @media (max-width: 1024px) {
        position: absolute;
        bottom: 50px;
        right: 0px;
        opacity: 0.3;
    }

    @media (max-width: 640px) {
        bottom: 0px;
    }
}

.circle-shadow  {
    width: 240px;
    height: 240px;
    position: absolute;
    background: radial-gradient(50% 50% at 50% 50%, rgba(140, 82, 255, 0.7) 38.54%, rgba(18, 18, 18, 0) 100%);
    filter: blur(40px);
}

</style>