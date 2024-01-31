<script setup>
const props = defineProps({
    data: {
        type: Array,
        required: false,
        default: ''
    },
    mounth: {
        type: Boolean,
        required: false,
        default: false
    }
})
</script>
<template>
  <section class="pricing-box grid grid-cols-3 gap-16">
    <div 
        v-for="item in data"
        :key="item.id"
        class="box"
    >
        <h3>{{ item.title }}</h3>
        <h4>{{ item.price }}</h4>
        <strong v-show="mounth" class="pt-2">Měsíčně</strong>
        <div class="border mt-4 mb-4"></div>
        <div class="benefits flex flex-col gap-4">
            <div 
                v-for="benefit in item.benefits"
                :key="benefit.id"
                class="benefit flex flex-cols"
            >
                <div class="flex gap-4">
                    <span class="material-symbols-outlined icon-small">done_all</span>
                    <p>{{ benefit }}</p>
                </div>
            </div>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.border {
    width: 100%;
    background: #121212;
    height: 8px;
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), inset 2px 2px 6px rgba(140, 82, 255, 0.8);
    border-radius: 12px;
    border: none;
}

.box {
    h3 {
        font-size: 24px;
        font-weight: 400;
    }

    h4 {
        font-size: 32px;
        font-weight: 800;
    }

    strong {
        font-size: 20px;
        color: $color-primary;
    }

    .benefits {
        p {
            font-size: 16px;
        }

        span {
            font-size: 24px;
            color: $color-primary;
        }
    }
}

.pricing-box {
    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}
</style>