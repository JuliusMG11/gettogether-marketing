<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: false
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
    }
})
</script>

<template>
  <section class="benefits-box pt-32">
    <div class="benefits-title text-center pb-16">
        <h2>{{ title }}</h2>
        <div class="outline-purple">
            <h2>{{ subtitle }}</h2>
        </div>
    </div>
    <div class="benefits-grid grid grid-cols-3 gap-16">
         <div 
            v-for="item in data"
            :key="item.id"
            class="box relative flex flex-col items-center"
        >   
            <div class="bg-object">
                <img src="@/assets/img/svg/circle-bg.svg" alt="">
            </div>
            <div class="outline-font">
                <h2>{{ item.number }}</h2>
            </div>
            <h3 class="pt-4 text-center" v-html="item.title"></h3>
            <p class="pt-2 text-center">{{ item.description }}</p>
        </div>
    </div>

  </section>
</template>

<style lang="scss" scoped>

.benefits-grid {
    .box {

        h2 {
            @media (max-width: 768px) {
                font-size: 52px;
            }
        }
        
        .bg-object {
            position: absolute;
            top: 0px;
            max-width: 300px;
            width: 100%;
            height: 100%;
        }

        .outline-font {
            padding-top: 112px;
        }

        h3 {
            font-size: 24px;
            font-weight: 800;
        }
    }

    @media (max-width: 1024px) {
          grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.benefits-box {
    @media (max-width: 768px) {
        padding-top: 64px;
    }
}

</style>