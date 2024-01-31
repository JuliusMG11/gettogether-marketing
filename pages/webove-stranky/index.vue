<script setup>

const benefits = [
    {
        number: '10k+',
        title: 'Nových zákazníků',
        description: 'Naše marketingové oddělení vám připraví na míru výkonnostní kampaně pro získání více zákazníků.'
    },
    {
        number: '1M+',
        title: 'Návštěvníků na webu',
        description: 'Rozšíříme povědomí o vašich webových stránkách a službách, které můžete nabídnout.'
    },
    {
        number: '100+',
        title: 'Spuštěných webů',
        description: 'Pod rukama nám prošlo již přes 100 webových stránek, které úspěšně podporují růst podniků našich klientů'
    }
]

   const steps = reactive({
        items: [
            { 
                title: 'Web ve vašem vlastnictví', 
                content: '<strong>Žádné měsíční poplatky, žádné platformy, které vlastní vaše stránky.</strong> Vše co k webu patří, patří i vám. Řešení webů na míru a šikovné ruce v podání našeho týmu udělají váš web jedinečným. A to vše vám zařídíme již od 20 000,- Kč.', 
                isOpen: true 
            },
            { 
                title: 'Webdesign', 
                content: '<strong>Zákazníci tráví čas tam, kde se jim líbí. Při tvorbě webů na míru</strong> mají u nás největší část práce web designeři. Web design tak splňuje velmi důležité prvky, které mají za úkol zvýšit konverzní poměr u příchozích uživatelů. Zároveň propaguje vaší značku jako jednu z nejlepších voleb pro využití vašich služeb nebo koupi produktů.',
                isOpen: false 
            },
            {
                title: 'Viditelnost na internetu', 
                content: '<strong>Díky dodržení důležitých nastavení při tvorbě webu, budete vše připraveno pro případný vývoj webu.</strong> Po pár letech tedy nebudete muset investovat do zcela nového webu. Zároveň zajistíme podmínky na propagaci přes online marketing, který zajistí vaše první zákazníky.', 
                isOpen: false 
            }
        ]
   })

   const services = [
    {
        icon: 'sync_saved_locally',
        title: 'Tvorba webstránek',
        description: 'Zabýváme se tvorbou webových stránek na míru na platformách Strapi a Wordpress. Naši zkušení vývojáři a designéři se starají o precizní řešení UX-UI a zajišťují snadnou správu na míru.'
    },
    {
        icon: 'browse_activity',
        title: 'Webdesign',
        description: 'Každý náš projekt začíná důkladnou analýzou zaměření webu na uživatele a přizpůsobením designu podle pravidel UX/UI. Naši zkušení designéři vytvářejí jedinečné a atraktivní webové stránky, které dokáží efektivně oslovit cílovou skupinu.'
    },
    {
        icon: 'grid_view',
        title: 'UX/UI',
        description: 'Díky využití našich zkušeností a <strong>odborných znalostí v oblasti uživatelského rozhraní a použitelnosti</strong> můžeme našim klientům poskytnout nejlepší možné řešení pro jejich webové stránky.'
    }
]

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
  <div class="seo-page">
    <div class="video-w">
        <DesignVideo />
    </div>

    <div class="seo-section pt-32">
        <SharedHeadTitle
            title="Webové stránky"
            description="Náš tým vytvoří unikátní webdesign a obsah webu, který napomáhá k uskutečnění cílů podnikání našim zákazníkům."
            buttonText="Chci Web"
            :buttonActive="true"
        />

        <div class="container">
            <SharedPageServices 
                title="Jak vám"
                subtitle="pomůžeme"
                description="S novými webovými stránkami vám pomůžeme k dosažení vašich podnikatelských cílů."
                button="Kontaktuje nás"
                grid="grid-cols-3"
                :data="services"
            />

            <SharedPageCta
                class="pt-16 pb-16"
                title="WEB"
            >
                 <img src="@/assets/img/profiles/julius.jpg" alt="">
            </SharedPageCta>

            <SharedBenefits
                title="Gettogether v"
                subtitle="číslech"
                :data="benefits"
            />
            
            <SharedPageSteps
                title="Webové řešení"
                subTitle="na míru."  
                :items="steps.items"
            />

        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.partners-section {

    .partners-grid {
        padding-bottom: 52px;
    }

    .logo {
        max-width: 160px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
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
}

</style>