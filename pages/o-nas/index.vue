<script setup>
 const steps = reactive({
    items: [
        { 
            title: 'Zákazníci', 
            content: 'Našim zákazníkům pomáháme s vývojem jejich podnikání. Vytvoříme vám nové webové stránky, podpoříme vás v organickém vyhledávání pomocí SEO nebo vás rovnou zviditelníme pomocí PPC kampaní.', 
            isOpen: true 
        },
        { 
            title: 'Co od nás získáte', 
            content: 'Při naší spolupráci získáte hodnotného partnera při růstu vaší firmy v online světě. Za naší prací necháváme spoustu potu, který nás celou dobu provází, jelikož pro vás makáme na 110%.',
            isOpen: false 
        },
        {
            title: 'Zákaznická podpora', 
            content: 'Jelikož víme, že nás klienti mohou potřebovat jakýkoliv den nebo i hodinu, jsme tu pro vás v nedokladných situacích 24/7.', 
            isOpen: false 
        }
    ]
})

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
            title="Jsme fullservice marketingová agentura"
            description="Přes 5 let již děláme radost našim zákazníkům, kteří se chtějí uchytit v online světě. Pomáháme jim hlavně lépe komunikovat s novými a stávajícími zákazníky."
            link="/contact"
            buttonText="Nezávazna konzultace"
            :buttonActive="true"
        />

        <div class="container pt-16">

             <SharedPageSteps
                title="S našimi zákazníky taháme"
                subTitle="za jedem provaz!"
                :items="steps.items"
            />

            <SharedPageTeam
                class="pt-16"
            />
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.pricing-section {
    @media (max-width: 1024px) {
        .container {
            padding-top: 0px;
        }
    }
}

</style>