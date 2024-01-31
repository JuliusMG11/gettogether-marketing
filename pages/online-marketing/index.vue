<script setup>

const benefits = [
    {
        number: '215%',
        title: 'Průměrné navýšení <br/>návštěvníků',
        description: 'Relevantní zákazníky k vám přivedeme již od pár korun, vždy není vše o penězích, ale o šikovnosti.'
    },
    {
        number: '400k+',
        title: 'Ušetřené peníze <br/>klientů',
        description: 'Po převzetí reklamních kampaní od klientů zjišťujeme, že jim utíkají peníze v jejich stávajících kampaní.'
    },
    {
        number: '30+',
        title: 'Spokojení <br/>zákazníci',
        description: 'Každý zákazník je jako člen naší rodiny. Zakládáme si pouze na kvalitě odvedené práce, a tak máme jistotu, že naši zákazníci budou spokojeni.'
    }
]

   const steps = reactive({
        items: [
            { 
                title: 'Analýza kampaní ZDARMA', 
                content: 'Po udělení přístupů do vašich stávajících kampaní vám uděláme podrobný rozbor všech reklam, po kterém vám poskytneme detailní informace o vašich investovaných penězích. <strong>Ze zkušenosti víme, skoro v každém případě, že tisíce korun investovaných do reklamy jsou bez jakéhokoliv výnosu pro vaší firmu.</strong> Do ničeho vás nutit nebudeme, jen vám poskytneme podklady, které vám řeknou více o vašich kampaních.', 
                isOpen: true 
            },
            { 
                title: 'Online marketing na míru', 
                content: 'Strategii navrhujeme každému klientovi na míru, jelikož každý má odlišný rozpočet, možnosti a cíle. <strong>Budeme se starat o povědomí vaší značky a výkonu kampaní, které zajistí vaší spokojenost.</strong> Z příchozích uživatelů uděláme vaše zákazníky a stávající zákazníci se k vám budou vracet, aby mohli opět zakoupit vaše produkty nebo využít vašich služeb.',
                isOpen: false 
            },
            {
                title: 'Cena a reporting práce', 
                content: '<strong>Naši zákazníci nám především platí za skvěle odvedenou práci našeho týmu</strong> a splnění všeho na čem se před začátkem spolupráce domluvíme. Zda se ty domluvíme na novém webu nebo online marketingu, máte u nás jistotu, že neplatíte za služby bez přínosu pro vás.', 
                isOpen: false 
            }
        ]
   })

   const services = [
    {
        icon: 'monitoring',
        title: 'PPC reklama',
        description: 'Platíte až za přivedené uživatele na web, ze kterých vám uděláme zákazníky.'
    },
    {
        icon: 'compare',
        title: 'Srovnávače zboží',
        description: 'Využijte nejvýkonnějších marketingových kanálu pro e-shopy.'
    },
    {
        icon: 'groups',
        title: 'Sociální sítě',
        description: 'Rozšiřte povědomí o vaší značce na nejrušnějších místech na internetu.'
    }
]

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
  <div class="marketing-page">
    <div class="video-w">
        <DesignVideo />
    </div>

    <div class="marketing-section pt-32">
        <SharedHeadTitle
            title="Online marketing"
            description="<strong>PPC reklama vám zajistí větší povědomí o vaší značce, službách nebo produktech.</strong> Pro každého zákazníka připravujeme marketingovou strategii na míru."
            buttonText="Chci reklamu"
            :buttonActive="true"
        />

        <div class="container">
            <SharedPageServices 
                title="Jak vám"
                subtitle="pomůžeme"
                description="Podle vašich možností se vydáme jednou z těchto cest, pomocí kterých splníme vaše požadavky a cíle."
                button="Kontaktuje nás"
                grid="grid-cols-3"
                :data="services"
            />

            <SharedPageCta
                class="pt-16 pb-16"
                title="Marketing"
            >
                <img src="@/assets/img/profiles/michal.jpg" alt="">
            </SharedPageCta>

            <div class="partners-section pt-16">
                <div class="partners-grid grid grid-cols-5 gap-18">
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/google.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/sklik.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/heureka.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/zbozi.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/social.png" alt="">
                    </div>
                     <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/glami.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/ecomail.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/mall.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/mergado.png" alt="">
                    </div>
                     <div class="logo flex justify-center">
                        <img src="@/assets/img/online-marketing/looker.png" alt="">
                    </div>
                </div>
                 <div class="border"></div>
            </div>

            <SharedBenefits
                title="Gettogether v"
                subtitle="číslech"
                :data="benefits"
            />
            
            <SharedPageSteps
                title="Postup naší"
                subTitle="práce"
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

        @media (max-width: 1024px) {
            padding-bottom: 16px;
        }

        @media (max-width: 768px) {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 0px;
        }
    }

    .logo {
        max-width: 160px;
        width: 100%;
        img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        @media (max-width: 768px) {
            max-width: 100%;
            img {
                max-width: 160px;
            }
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