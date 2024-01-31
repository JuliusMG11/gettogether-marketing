<script setup>

const benefits = [
    {
        number: '10+',
        title: 'Napárovaných <br/>eshopů',
        description: 'Jsme rádi, že se na nás již obrací nové eshopy na základě referencí od našich stávajících klientů.'
    },
    {
        number: '300+',
        title: 'Vytvořených <br/>objednávek',
        description: 'Nový marketingový kanál, noví zákazníci. Eshopům jsme přivedli již přes 300 nových vracejících se zákazníků.'
    },
    {
        number: '100%',
        title: 'Spokojených <br/>klientů',
        description: 'S každým zákazníkem pracujeme individuálně. Všechny eshopy se nám podařilo rozjet ke spokojenosti.'
    }
]

   const steps = reactive({
        items: [
            { 
                title: 'Inzerujte bez komplikací', 
                content: '<strong>Jak už si mnoho e-shopařů vyzkoušelo, tak napojení vlastního e-shopu do Kaufland Global Marketplace není tak jednoduchá věc. Mnohdy je problém už na samotném začátku a to špatně zvolený produktový feed, který při diagnostice párování zjistí mnoho chyb. Nechte vše na nás a uvidíte, že ušetříte spoustu času, nervy a vše bude od začátku nastavené správně a připravené na nové zákazníky. ', 
                isOpen: true 
            },
            { 
                title: 'Párování produktů a sklad', 
                content: 'Jako u každého marketplacu se neobejdete bez externích programů, které doladí produktový feed tak, aby bylo v Kaufland Global Marketplace vše v pořádku. Doladíme Vám správné kategorie, značky produktů, správné propisování DPH nebo různé parametry výrobků. Víte o tom, že v případě objednání vašeho zboží přes Kaufland Global Marketplace se vám nesníží počet kusů ve skladu na e-shopu? Budete k tomu potřebovat integraci některého z doplňků/modelů, který vám nastavíme.',
                isOpen: false 
            },
            {
                title: 'Vyplatí se inzerovat?', 
                content: 'Než začnete prodávat na Kaufland Global Marketplace, tak si musíme říci plusy a mínusy této spolupráce. Nikdo neříká, že Kaufland Global Marketplace pro každého. Vše se odvíjí od jejich provize z prodeje, která může být 10, ale i 15%. Zdá se Vám to hodně? Vy jako eshopař si musíte ale uvědomit, že Kaufland za vás dělá přes svůj eshop reklamu na internetu.', 
                isOpen: false 
            }
        ]
   })

   const services = [
    {
        icon: 'feed',
        title: 'Produktový feed',
        description: 'Zvolíme správně zvolený vstupní formát, aby došlo k aktivaci obchodu bez komplikací.'
    },
    {
        icon: 'upload',
        title: 'Nahrání produktů',
        description: 'Posílaná data z e-shopu upravíme tak, aby se všechny produkty správně nahráli do marketplace.'
    },
    {
        icon: 'integration_instructions',
        title: 'Propojení skladu',
        description: 'Objednávky vytvořené na Kaufland Global Marketplace propojíme s vaším e-shopem přes externí doplňky.'
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
            title="Kaufland Global Marketplace"
            description="Dostaňte se do povědomí potenciálním zákazníkům na jednom z největších marketplace v ČR, SK, DE a zaplaťte provizi až za odeslanou objednávku zákazníkovi."
            buttonText="Chci napojit"
            :buttonActive="true"
        />

        <div class="container">
            <SharedPageServices 
                title="Jak vám"
                subtitle="pomůžeme"
                description="Vyřešíme párování produktů až po zahájení prodeje a získání první objednávky."
                button="Kontaktuje nás"
                grid="grid-cols-3"
                :data="services"
            />

            <SharedPageCta
                class="pt-16 pb-16"
                title="Kaufland Marketplace"
            >
                <img src="@/assets/img/profiles/michal.jpg" alt="">
            </SharedPageCta>

            <div class="partners-section pt-16">
                <div class="partners-grid grid grid-cols-4 gap-18">
                     <div class="logo flex justify-center">
                        <img src="@/assets/img/partners/baselinker.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/partners/mergado.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/partners/expando.png" alt="">
                    </div>
                    <div class="logo flex justify-center">
                        <img src="@/assets/img/partners/global-marketplace.png" alt="">
                    </div>
                </div>
                 <div class="border"></div>
            </div>

            <SharedBenefits
                title="Kaufland Global Marketplace"
                subtitle="v číslech"
                :data="benefits"
            />
            
            <SharedPageSteps
                title="Další informace k"
                subTitle="Kaufland Global Marketplace"
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