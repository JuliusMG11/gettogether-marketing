<template>
    <div class="page">
        <PartialsNewHeader />
        <slot></slot>
        <PartialsFooter />
    </div>
</template>

<style lang="scss" scoped>
.page {
    width: 100%;
    position: relative;
}
</style>
