<template>
  <section id="references" class="section-references pt-16 pb-16">
     <div class="container">
        <h2>Naše práce a</h2>
        <div class="sub-title outline-purple">
            <h2>grafika</h2>
        </div>
        <p class="pt-8 pb-8">
            Díky našim zkušenostem s tvorbou webových stránek, e-commerce, 
            online marketingem, SEO a PPC jsme schopni našim zákazníkům 
            poskytnout komplexní přístup k jejich online strategii a zajistit dosažení jejich cílů.
        </p>

        <div class="references-grid pt-6 grid grid-cols-3 gap-16">
            <div class="box">
                <a 
                    href="https://www.facebook.com/VeterinarniKosmetika.cz"
                    target="_blank"
                >
                    <div class="image">
                        <img src="@/assets/img/references/reference1.jpg" alt="">
                    </div>
                    <div class="title pt-6">
                        <h3>
                            VeterinarniKosmetika.cz
                        </h3>
                    </div>
                </a>
            </div>
             <div class="box">
                <a 
                    href="https://www.facebook.com/zucaczechrepublic"
                    target="_blank"
                >
                <div class="image">
                    <img src="@/assets/img/references/reference2.jpg" alt="">
                </div>
                <div class="title pt-6">
                       <h3>ZÜCA Czech Republic</h3>
                </div>
                </a>
            </div>
             <div class="box">
                <a 
                    target="_blank"
                    href="https://www.facebook.com/topobytnevozy.cz"
                >
                    <div class="image">
                        <img src="@/assets/img/references/reference3.jpg" alt="">
                    </div>
                    <div class="title pt-6">
                        <h3>Topobytnevozy.cz</h3>
                    </div>
                </a>
            </div>
        </div>
     </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

h2 {
    margin-bottom: 0px;
}


.section-references {
    p {
        font-size: 18px;
        max-width: 820px;
    }

    @media (max-width: 768px) {
        padding-top: 32px;
    }

    @media (max-width: 640px) {
        .container {
            text-align: center;
        }

        p {
            font-size: 16px;
        }
    }
}

.references-grid {
    .box {
        .image {
            overflow: hidden;
            border-radius: 8px;
            box-shadow: inset 2px 2px 6px rgba(140, 82, 255, 0.6);
        }

        a:hover {
            h3 {
                color: $color-primary; 
            }
        }

        h3 {
            font-size: 20px;
            font-weight: 800;
            color: $color-text-white;
        }
    }

    @media (max-width: 1024px) {
        gap: 16px;
    }

    @media (max-width: 640px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 42px;
        
        .box {
            display: flex;
            flex-direction: column;
            align-items: center;

            .image {
                width: 300px;
            }
        }
    }
}


</style>