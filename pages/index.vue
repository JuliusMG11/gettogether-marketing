<script setup>
useHead({
    title: 'Gettogether s.r.o.',
    description: 'Gettogether s.r.o. je technologická společnost ...'
})

onMounted(() => {
    window.scrollTo(0, 0);
});
</script>

<template>
    <div class="home">
        <div class="video-w">
            <DesignVideo />
        </div>

        <PartialsHero />
        <PartialsPartners />
        <PartialsServices />
        <PartialsReferences />
        <PartialsCta />
        <PartialsTestimonials />
        <PartialsBenefits />

        <PartialsTeam />
    </div>
</template>

<style lang="scss" scoped>

.video-w {
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    background-color: black;

    video {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

</style>