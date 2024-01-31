<script setup>
const props = defineProps({
    title: {
        type: String,
        required: false,
        default: ''
    },
    image: {
        type: String,
        required: false,
        default: ''
    }

})
</script>
<template>
  <section class="section-cta relative flex">
    <div class="content-cta flex items-end justify-between">
       <div class="avatar-section flex items-center gap-4">
            <div class="avatar-image">
                <slot />
            </div>
            <div class="avatar-content">
               <div class="avatar-title flex gap-4">
                    <h2>{{ title }}</h2>
                    <div class="outline-purple">
                        <h2>specialista</h2>
                    </div>
               </div>
                <p class="">
                    Zavolejte nám nebo nám napište co máte na srdci. 
                </p>
            </div>
       </div>
        <div class="contact-group">
            <SharedLinkBtn link="/contact">
                Kontaktuje nás
            </SharedLinkBtn>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.section-cta {
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    padding: 64px;
    background: linear-gradient(90deg, 
                #121212 17.13%, 
                rgba(18, 18, 18, 0) 74.6%);
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), 
                inset 4px 5px 6px rgba(140, 82, 255, 0.6);
    border-radius: 12px;
    align-content: center;
    width: 70%;

    @media (max-width: 1270px) {
        padding: 42px;
        width: unset;
        max-width: 100%;
    }

    @media (max-width: 1024px) {
        padding: 32px;
        justify-content: center;
    }

    .content-cta {
        width: 100%;

        h2 {
            font-size: 26px;
            font-weight: 800;
        }

        @media (max-width: 1024px) {
            max-width: 100%;
        }

        

        .link {
            color: white;
            font-size: 22px;
        }

        @media (max-width: 768px) {
            text-align: center;
            flex-direction: column;
            gap: 16px;
            align-items: center;
        }
    }
}

.border {
    width: 100%;
    background: #121212;
    height: 8px;
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), 
                inset 2px 2px 6px rgba(140, 82, 255, 0.8);
    // filter: drop-shadow(14px 14px 62px rgba(140, 82, 255, 0.5));
    border-radius: 12px;
    border: none;

    @media (max-width: 640px) {
        margin-top: 16px;
    }
}

.avatar-image {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    overflow: hidden;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

.avatar-title {
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0px;
        align-items: center;
    } 
}

.avatar-section {
    @media (max-width: 768px) {
        flex-direction: column;
    }
}
</style>