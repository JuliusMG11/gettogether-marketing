<script setup>

const benefits = [
    {
        number: '1 000+',
        title: 'Posunutých hledaných <br/>výrazů',
        description: 'S každým klientem najdeme slova a výrazy, které jsou pro ně nejdůležitější a ty posouváme výše.'
    },
    {
        number: '15 000+',
        title: 'Napsaných <br/>slov',
        description: 'Pro klienty připravujeme texty na webové stránky či e-shop, ale i na publikované PR články.'
    },
    {
        number: '80+',
        title: 'Publikováno PR <br/>článků',
        description: 'Naše portfolio pro placené i neplacené PR články je obrovské, proto máme velmi široké možnosti pro váš růst.'
    }
]

   const steps = reactive({
        items: [
            { 
                title: 'SEO analýze', 
                content: 'V rámci analýzy zjistíme slabá místa na vašem webu z hlediska SEO a také jak si vedete z pohledu vyhledávačů. Vyhotovíme analýzu slov na která se momentálně zobrazujete a zároveň zjistíme aktuální pozici slov, která jsou pro vás důležitá. <strong>Dle situace navrhneme nejideálnější řešení abyste ,,kralovali,, na prvních pozicích ve vyhledávání.</strong>', 
                isOpen: true 
            },
            { 
                title: 'Přední pozice ve vyhledávání', 
                content: 'Zajistíme konkrétní úpravy, aby se zlepšila uživatelská přívětivost, rychlost, funkčnost i obsah a v důsledku těchto opatření i návštěvnost, vyšší pozice ve vyhledávání a vyšší konverzní poměr. <strong>Sečteno, podtrženo, všechny tyto úkony poslouží ke splnění cíle a to dostat vás na první pozice ve vyhledávání.</strong>',
                isOpen: false 
            },
            {
                title: 'Report naší práce', 
                content: 'Veškerý posun naší práce vyhotovíme našim zákazníkům vždy v detailním reportu společně se změnou pozic jejich důležitých slov. <strong>Máte tedy jistotu, že platíte pouze za výkon.</strong>', 
                isOpen: false 
            }
        ]
   })

   const services = [
    {
        icon: 'settings',
        title: 'Jednorázové SEO služby',
        description: 'Pomůžeme vám s konkrétním požadavkem na On-page i Off-page. Zajistíme kvalitní linkbuilding, zpracování textů nebo doporučení pro vývoj vašeho <br/>webu pro vyhledávání.'
    },
    {
        icon: 'settings_suggest',
        title: 'Kompletní služby SEO',
        description: 'Náš speciální tým na SEO zajistí růst pozic v organickém vyhledávání pomocí On-page i Off-page prvků. Veškerá práce se projeví ve vyhledávání na Seznamu i Google.'
    },
    {
        icon: 'insights',
        title: 'SEO analýze',
        description: 'SEO analýza vám poskytne přesný obraz o stavu vaší online prezentace a pomůže vám identifikovat příležitosti ke zlepšení vaší viditelnosti ve vyhledávačích.'
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
            title="SEO"
            description="Optimalizace webu pro vyhledávače není magie. Je to dlouhodobý proces, který si zamilujete ihned, jakmile uvidíte kolik vám dokáže přivést nových zákazníků."
            buttonText="Chci SEO"
            :buttonActive="true"
        />

        <div class="container">
            <SharedPageServices 
                title="Jak vám"
                subtitle="pomůžeme"
                description="V organickém vyhledávání vás posuneme na vyšší pozice, kde vás lépe najdou noví zákazníci."
                button="Chci SEO"
                grid="grid-cols-3"
                :data="services"
            />

            <SharedPageCta
                class="pt-16 pb-16"
                title="SEO"
            >
                 <img src="@/assets/img/profiles/roman.jpg" alt="">
            </SharedPageCta>

            <SharedBenefits
                title="Gettogether v"
                subtitle="číslech"
                :data="benefits"
            />
            
            <SharedPageSteps
                title="Zvýšíme pozice našich klientů v"
                subTitle="organickém vyhledávání." 
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