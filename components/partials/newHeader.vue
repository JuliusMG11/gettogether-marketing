<template>
 <header class="header">
    <div class="header-section" :class="{ active: activeSticky === true }">
        <div class="header-content container flex justify-between items-center">
            <SharedLogoLink @click="scrollTop" class="logo" color="white" />
             <div class="navigation flex items-center">
                <nav class="menu flex">
                    <NuxtLink class="menu-link" to="/" title="Úvod">Úvod</NuxtLink>
                    <NuxtLink class="menu-link" to="/online-marketing" title="Online marketing">Online marketing</NuxtLink>
                    <NuxtLink class="menu-link" to="/seo" title="Seo">SEO</NuxtLink>
                    <!-- <NuxtLink class="menu-link" to="/webove-stranky" title="Webové stránky">Webové stránky</NuxtLink> -->
                    <NuxtLink class="menu-link" to="/kaufland" title="Kaufland Partner">Kaufland</NuxtLink>
                    <NuxtLink class="menu-link" to="/allegro" title="Allegro Partner">Allegro</NuxtLink>
                    <NuxtLink class="menu-link" to="/cenik" title="Cenník">Ceník</NuxtLink>
                    <NuxtLink class="menu-link" to="/o-nas" title="O nás">O nás</NuxtLink>
                    <NuxtLink class="menu-link" to="/contact" title="Kontakt">Kontakt</NuxtLink>
                </nav>

            </div>
            <div class="header-contact">
                <div class="mobile-menu">
                    <div @click="openMenu()" class="hamburger-btn">
                        <span class="material-symbols-outlined">menu</span>
                    </div>
                </div>
                <SharedLinkBtn class="phone-btn" link="tel:+420721283131" title="Telefon" theme="">
                    <span class="material-symbols-outlined icon-small pr-10">phone_enabled</span>+420 721 283 131
                </SharedLinkBtn>
            </div>
        </div>
    </div>
     <div class="popup-menu" :class="{ active: activeMenu }">
        <div @click="openMenu" class="close-button flex justify-end">
            <span class="material-symbols-outlined">close</span>
        </div>

        <nav class="mobile-navigation">
            <NuxtLink @click="openMenu" class="menu-link" to="/" title="Úvod">Úvod</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/online-marketing" title="Online marketing">Online marketing</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/seo" title="Seo">SEO</NuxtLink>
            <!-- <NuxtLink @click="openMenu" class="menu-link" to="/webove-stranky" title="Webové stránky">Webové stránky</NuxtLink> -->
            <NuxtLink @click="openMenu" class="menu-link" to="/kaufland" title="Kaufland Partner">Kaufland</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/allegro" title="Allegro Partner">Allegro</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/cenik" title="Cenník">Ceník</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/o-nas" title="O nás">O nás</NuxtLink>
            <NuxtLink @click="openMenu" class="menu-link" to="/contact" title="Kontakt">Kontakt</NuxtLink>
            
            <div class="header-contact">
                <SharedLinkBtn link="tel:+420721283131" title="Telefon" theme="">
                    <span class="material-symbols-outlined icon-small pr-10">phone_enabled</span>+420 721 283 131
                </SharedLinkBtn>
            </div>
        </nav>
    </div>
 </header>
</template>

<script setup lang="ts">
// SCOLL ADD CLASS
const activeSticky = ref(true)
const scrollPosition = ref()
const updateScroll =() => {
    scrollPosition.value = window.scrollY

    if (scrollPosition.value > 80) {
        activeSticky.value = false
    } else {
        activeSticky.value = true
    }
}

const activeMenu = ref(false)
const openMenu = () => {
    activeMenu.value = !activeMenu.value
}

  const scrollTop = () => {
        window.scrollTo(0,0);
    }

onMounted(() => {
    window.addEventListener('scroll', updateScroll);
})

</script>

<style lang="scss" scoped>

.header-section {
    position: fixed;
    width: 100%;
    z-index: 40;
    background: #121212c5;
    transition: all ease .3s;
    backdrop-filter: blur(32px);

     &.active {
        background: transparent;
        transition: all ease .3s;

        .header-content {
            transition: all ease .3s;
            padding-top: 16px;
            padding-bottom: 16px;
        }
    }
    @media (max-width: 1270px) {
        .header-contact {
            .phone-btn {
                display: none;
            }
            .mobile-menu {
                .hamburger-btn {
                    display: flex;
                    align-items: center;
                    span {
                        font-size: 42px;
                    }
                }
            }
        }
    }
}

.header-content {
    transition: all ease .3s;
    padding-top: 16px;
    padding-bottom: 16px;
}


.menu {
    gap: 32px;

    a {
        font-size: 16px;
        font-weight: 600; 

        &:hover {
            color: $color-primary;
        }

        &.router-link-active {
             color: $color-primary;
        }
    }

    @media (max-width: 1270px) {
        gap:22px;
    }

    @media (max-width: 1270px) {
        display: none;
    }
}


.mobile-menu {
    display: none;

    span {
        font-size: 32px;

        &:hover {
            color: $color-primary;
            cursor: pointer;
        }
    }

    @media (max-width: 1270px) {
        display: block;
    }
}

.popup-menu {
    transform: translateX(100%);
    transition: all ease .3s;
    position: fixed;
    top: 0px;
    right: 0px;
    height: 100vh;
    backdrop-filter: blur(8px);
    background: rgba(0, 0, 0, 0.6);
    width: 100%;
    padding: 32px;
    z-index: 50;

    &.active {
        transform: translateX(0%);
        transition: all ease .3s;
    }

    @media (min-width: 1270px) {
        display: none;
    }

    .mobile-navigation {
        display: flex;
        flex-direction: column;
        gap: 16px;

        a {
            font-size: 32px;
            font-weight: 600;
            width: max-content;

            &:hover {
                color: $color-primary;
                text-decoration: underline;
            }
        }

        .button {
            max-width: 220px;
        }
    }

    @media (min-width: 1270px) {
        display: none;
    }
}


.close-button {
    span {
        font-size: 32px;

        &:hover {
            color: $color-primary;
            cursor: pointer;
        }
    }
}

</style>