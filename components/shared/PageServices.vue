<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: false,
        default: ''
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    subtitle: {
        type: String,
        required: false,
        default: ''
    },
    description: {
        type: String,
        required: false,
        default: ''
    },
    button: {
        type: String,
        required: false,
        default: ''
    },
    grid: {
        type: String,
        required: false,
        default: ''
    }
})
</script>
<template>
  <section class="pages-services flex flex-col items-center pt-32">
    <div class="title-content pb-24 text-center">
        <h2>{{ title }}</h2>
        <div class="outline-purple">
            <h2>{{ subtitle }}</h2>
        </div>
        <p class="pt-6">{{ description }}</p>
    </div>

    <div class="services">
        <div :class="grid" class="services-grid grid gap-16">
             <div
                v-for="item in data"
                :key="item" 
                class="service-box flex flex-col items-center">
                <figure class="flex flex-col items-center">
                    <div class="icon">
                       <span class="material-symbols-outlined icon-small">{{ item.icon }}</span>
                    </div>
                    <figcaption class="pt-2 text-center">
                        <h4>{{ item.title }}</h4>
                    </figcaption>
                </figure>
                <p class="text-center pt-2" v-html="item.description "></p>
              </div>
        </div>
        <div class="button flex justify-center pt-16">
            <SharedLinkBtn link="/contact" title="Kontaktovat" theme="outline-theme" size="big">
                {{ button }}
            </SharedLinkBtn>
        </div>
    </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.pages-services {
    @media (max-width: 1024px) {
        padding-top: 64px;
    }

}


.title-content {
    max-width: 60%;

    p {
        font-size: 18px;
    }

    @media (max-width: 1024px) {
        max-width: 80%;
    }

    @media (max-width:  768px) {
        max-width: 100%;
        padding-bottom: 64px;
    }
}

.service-box {

    p {
        font-size: 14px;
    }

    .icon {
        position: relative;

        span {
            font-size: 64px;
            color: $color-text-dark-theme;
        }

        &::before {
            content: '';
            position: absolute;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            border: solid 2px $color-primary;
            top: -12px;
            left: -12px;
            z-index: -1;
        }
    }
}


.services-grid {
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

</style>