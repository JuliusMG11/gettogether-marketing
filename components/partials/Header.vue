<template>
    <header class="header-section">
        <div class="container">
            <div class="header">
                <SharedLogoLink class="logo" color="white" />
                <nav class="menu flex gap-6">
                    <NuxtLink class="menu-link" to="/" title="Úvod">Úvod</NuxtLink>
                    <NuxtLink class="menu-link" to="/online-marketing" title="Online marketing">Online marketing</NuxtLink>
                    <NuxtLink class="menu-link" to="/seo" title="Seo">SEO</NuxtLink>
                    <NuxtLink class="menu-link" to="/webove-stranky" title="Webové stránky">Webové stránky</NuxtLink>
                    <NuxtLink class="menu-link" to="/mall" title="Mall Partner">Mall Partner</NuxtLink>
                    <NuxtLink class="menu-link" to="/cenik" title="Cenník">Cenník</NuxtLink>
                    <NuxtLink class="menu-link" to="/o-nas" title="O nás">O nás</NuxtLink>
                    <NuxtLink class="menu-link" to="/contact" title="Kontakt">Kontakt</NuxtLink>
                </nav>
                <div class="header-contact">
                    <SharedLinkBtn link="tel:+420721283131" title="Telefon" theme="dark">
                        <span class="material-symbols-outlined icon-small pr-10">phone_enabled</span> Kontakt
                    </SharedLinkBtn>
                </div>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.header {
    height: 80px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 50;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.logo {
    height: 100%;
    width: auto;
    padding: 20px 40px;
}


.menu-link {
    text-decoration: none;
    display: block;
    color: $color-text-dark-theme;
    transition: all 0.2s ease;
    position: relative;

    &:hover {
        opacity: 0.8;
    }

    /* &.router-link-exact-active::before {
        content: '';
        position: absolute;
        bottom: 0;
        width: 20px;
        height: 2px;
        left: 50%;
        margin-left: -10px;
        background-color: $color-text-dark-theme;
    } */
}

.header-contact {
    padding: 0 40px;
    display: flex;
}
</style>