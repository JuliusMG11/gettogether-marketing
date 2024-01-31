<script setup>
const priceMarketing = [
    {
        title: 'Malý web',
        price: 'do 5 000Kč',
        benefits: [
            'Správa 1 kanálu (Google Ads, Sklik,..)',
            'Vytvoření kampaní a optimalizace',
            'Používání analytických nástrojů',
            'Odborné poradenství',
            'Komunikace s klientem',
            'Report práce'
        ]
    },
    {
        title: 'Střední web',
        price: 'do 8 000Kč',
        benefits: [
            'Správa 1 kanálu (Google Ads, Sklik,..)',
            'Vytvoření kampaní a optimalizace',
            'Používání analytických nástrojů',
            'Odborné poradenství',
            'Komunikace s klientem',
            'Report práce'
        ]
    },
    {
        title: 'Velký web',
        price: 'do 11 000Kč',
        benefits: [
            'Správa 1 kanálu (Google Ads, Sklik,..)',
            'Vytvoření kampaní a optimalizace',
            'Používání analytických nástrojů',
            'Odborné poradenství',
            'Komunikace s klientem',
            'Report práce'
        ]
    }
]

const priceWebsites = [
    {
        title: 'Jednostránkový web',
        price: 'od 15 000Kč',
        benefits: [
            'Bez administrace',
            'Kompletní řešení',
            'Návrh dizajnu',
            'Rychlost načítání stránek'
        ]
    },
    {
        title: 'Vícestránkový web',
        price: 'od 22 000Kč',
        benefits: [
            'Administrace',
            'Strapi nebo Wordpress',
            'Analýza cílů webových stránek',
            'Technická SEO',
            'Kompletní řešení',
            'Návrh dizajnu',
            'Rychlost načítání stránek'
        ]
    },
    {
        title: 'Web na míru',
        price: 'od 50 000Kč',
        benefits: [
            'Administrace',
            'Strapi nebo Wordpress',
            'Analýza cílů webových stránek',
            'Návrh dizajnu na míru',
            'Technická SEO',
            'Pixel perfect',
            'Kompletní řešení',
            'Rychlost načítání stránek'
        ]
    }
]

const priceSeo = [
    {
        title: 'Malý web',
        price: '10 000Kč',
        benefits: [
            'Tvorba obsahu na webu',
            'Linkbuilding',
            'Analýza současného stavu',
            'Navržení KWs pro SEO',
            'Tvorba Meta Dat',
            'Odstranění chybných URL',
            'Poradenství',
            'Technická SEO analýza'
        ]
    },
    {
        title: 'Střední web',
        price: '20 000Kč',
        benefits: [
            'Tvorba obsahu na webu',
            'Linkbuilding',
            'Analýza současného stavu',
            'Navržení KWs pro SEO',
            'Tvorba Meta Dat',
            'Odstranění chybných URL',
            'Poradenství',
            'Technická SEO analýza'
        ]
    },
    {
        title: 'Velký web',
        price: 'od 21 000Kč',
        benefits: [
            'Tvorba obsahu na webu',
            'Linkbuilding',
            'Analýza současného stavu',
            'Navržení KWs pro SEO',
            'Tvorba Meta Dat',
            'Odstranění chybných URL',
            'Poradenství',
            'Technická SEO analýza'
        ]
    }
]

const priceSeoAnalyze = [
    {
        title: 'Malý web',
        price: '10 000Kč',
        benefits: [
            'Technická SEO analýza',
            'Analýza a návrh KWs',
            'Návrh SEO strategie na míru'
        ]
    },
]

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
   <div class="pricing-page">
    <div class="video-w">
        <DesignVideo />
    </div>

    <div class="pricing-section pt-32">
        <SharedHeadTitle
            title="Ceník"
            description="<strong>PPC reklama vám zajistí větší povědomí o vaší značce, službách nebo produktech.</strong> Pro každého zákazníka připravujeme marketingovou strategii na míru."
            buttonText="Kontaktovat"
            :buttonActive="true"
        />

        <div class="container pt-32">
            <div class="price-marketing">
                 <div class="title-content flex gap-4 justify-center pb-16 text-center">
                    <h2>Ceník</h2>
                    <div class="outline-purple">
                        <h2>marketing</h2>
                    </div>
                    </div>
                 <SharedPricingBox
                    :mounth="true"
                    :data="priceMarketing"
                />

                <div class="button flex justify-center pt-16">
                     <SharedLinkBtn link="/contact" theme="outline-theme" size="big">
                            Kontaktovat
                      </SharedLinkBtn>
                </div>
            </div>


            <div class="price-websites pt-32">
                 <div class="title-content flex gap-4 justify-center pb-16 text-center">
                    <h2>Ceník</h2>
                    <div class="outline-purple">
                        <h2>webových stránek</h2>
                    </div>
                    </div>
                 <SharedPricingBox
                    :data="priceWebsites"
                />

                <div class="button flex justify-center pt-16">
                     <SharedLinkBtn link="/contact" theme="outline-theme" size="big">
                            Kontaktovat
                      </SharedLinkBtn>
                </div>
            </div>

            <div class="price-seo pt-32">
                 <div class="title-content flex gap-4 justify-center pb-16 text-center">
                    <h2>Ceník</h2>
                    <div class="outline-purple">
                        <h2>SEO</h2>
                    </div>
                    </div>
                 <SharedPricingBox
                    :mounth="true"
                    :data="priceSeo"
                />

                <div class="button flex justify-center pt-16">
                     <SharedLinkBtn link="/contact" theme="outline-theme" size="big">
                            Kontaktovat
                      </SharedLinkBtn>
                </div>
            </div>

            <div class="price-seo pt-32">
                 <div class="title-content flex gap-4 justify-center pb-16 text-center">
                    <h2>Jednorázová</h2>
                    <div class="outline-purple">
                        <h2>SEO analýza</h2>
                    </div>
                    </div>
                 <div class="pricing-box flex justify-center">
                    <div 
                        v-for="item in priceSeoAnalyze"
                        :key="item.id"
                        class="box"
                    >
                        <h3>{{ item.title }}</h3>
                        <h4>{{ item.price }}</h4>

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
                </div>

                <div class="button flex justify-center pt-16">
                     <SharedLinkBtn link="/contact" theme="outline-theme" size="big">
                            Kontaktovat
                      </SharedLinkBtn>
                </div>
            </div>

        </div>
    </div>
   </div>
</template>

<style lang="scss" scoped>

.title-content {
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-bottom: 32px;
    }
}

.button {
    @media (max-width: 768px) {
        justify-content: flex-start;
    }
}

.price-websites,
.price-seo {
    @media (max-width: 768px) {
        padding-top: 64px;
    }
}

.border {
    width: 100%;
    background: #121212;
    height: 8px;
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), inset 2px 2px 6px rgba(140, 82, 255, 0.8);
    border-radius: 12px;
    border: none;
}

.box {
    max-width: 320px;
    width: 100%;

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
        justify-content: flex-start;
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.title-content {
   @media (max-width: 768px) {
        flex-direction: column;
        text-align: left;
        gap: 0px;
   }
 }
</style>