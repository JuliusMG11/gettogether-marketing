<script setup>
const props = defineProps({
    items: {
        type: Object,
        required: false
    },
    title: {
        type: String,
        required: false,
        default: ''
    },
    subTitle: {
        type: String,
        required: false,
        default: ''
    }
})

   const toggleAccordion = (index) => {
      props.items.forEach((item, i) => {
        if (i === index) {
          item.isOpen = !item.isOpen
        } else {
          item.isOpen = false
        }
      })
   }
</script>
<template>
<section class="section-benefits relative pt-32 pb-8">
        <h2>{{ title }} </h2>
        <div class="outline-purple pb-16">
            <h2>{{ subTitle }}</h2>
        </div>
        <div class="benefits-grid relative grid grid-cols-2 gap-16">
            <div class="accordeon">
                <li class="item pb-6" v-for="(item, index) in items" :key="index">
                    <div @click="toggleAccordion(index)">
                        <div class="title flex gap-4 pb-2 items-center">
                            <div class="icon">
                                <div :class="{ 'plus': !item.isOpen, 'minus': item.isOpen }"></div>
                            </div>
                            <h3> {{ item.title }}</h3>
                        </div>
                    <!-- <i :class="{ 'fa-plus': !item.isOpen, 'fa-minus': item.isOpen }" class="fas"></i> -->
                    </div>
                    <div class="content-box" :class="{ 'open': item.isOpen }">
                        <p v-if="item.isOpen" v-html="item.content"></p>
                    </div>
                </li>
            </div>
            <div class="circle-animation">
                <DesignCircle />
            </div>
        </div>
</section>
</template>

<style lang="scss" scoped>

.accordeon {
    height: 320px;

    @media (max-width: 768px) {
        height: 100%;
        position: relative;
        z-index: 10;
    }
}

li {
    list-style: none;
}


.item {
    transition: all ease .4s;

    h3 {
        font-weight: 800;
        font-size: 32px;

        &:hover {
            cursor: pointer;
            color: $color-primary;
        }

        @media (max-width: 640px) {
            font-size: 20px;
        } 
    }

    p {
        font-size: 16px;
    }

    .icon {
        .minus {
            width: 32px;
            height: 4px;
            background: #8C52FF;
            box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), inset 2px 2px 6px rgba(140, 82, 255, 0.8);
            border-radius: 12px;

            @media (max-width: 640px) {
                width: 22px;
                height: 2px;
            }
        }
        .plus {
            position: relative;
            width: 32px;
            height: 4px;
            background: #8C52FF;
            box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), inset 2px 2px 6px rgba(140, 82, 255, 0.8);
            border-radius: 12px;

            @media (max-width: 640px) {
                width: 22px;
                height: 2px;
            }

            &::after {
                content: '';
                position: absolute;
                top: 0px;
                width: 32px;
                height: 4px;
                background: #8C52FF;
                box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), inset 2px 2px 6px rgba(140, 82, 255, 0.8);
                border-radius: 12px;
                transform: rotate(90deg);

                @media (max-width: 640px) {
                    width: 22px;
                    height: 2px;
                }
            }
        }
    }
}

.benefits-grid {
    @media (max-width: 1024px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.outline-purple {
    @media (max-width: 768px) {
        padding-bottom: 32px;
    }
}

</style>