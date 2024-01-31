<template>
    <div id="contact" class="section-footer relative pb-16">
        <div class="container">
            <section class="title-part mb-8">
                <div class="big-title">
                    <h3 class="mb-8">
                        Tvoříme jednoduše, rychle a efektivně
                    </h3>
                </div>
                 <div class="description flex justify-between items-end mb-8">
                        <p>
                            Pracujeme s moderními technologiemi, které umožňují tvorbu unikátních webových a 
                            mobilních aplikací. Sledujeme trendy, učíme se a jdeme s dobou.
                        </p>
                        <SharedLinkBtn link="/contact" theme="outline-theme" size="big">
                            Kontaktovat
                        </SharedLinkBtn>
                    </div>
                <div class="border"></div>
            </section>
            <section class="contact-part mt-16 mb-32">
                <div class="contact-container grid grid-cols-3">
                    <div class="phone">
                        <div class="mb-4 label">
                            <span>Telefonní číslo</span>
                        </div>
                        <a href="tel:+420721283131">
                            +420 721 283 131
                        </a>
                    </div>
                    <div class="mail">
                        <div class="mb-4 label">
                            <span>Email</span>
                        </div>
                        <a href="mailto:info@gettogehter.cz">
                            info@gettogether.cz
                        </a>
                    </div>
                </div>
            </section>
        <section class="footer-part">
            <div class="footer-container grid grid-cols-4">
                <div class="copy col-span-2">
                    <div class="logo">
                        <SharedLogoLink @click="scrollTop" class="logo" color="white" />
                    </div>
                    <div class="text mt-4">
                        <strong>Gettogether s.r.o</strong><br/>
                        <strong>IČ:</strong> 177 73 393<br/>
                    </div>
                    <div class="copy mt-4">
                        <strong>
                           © Gettogether marketing
                           {{ yearValue }}
                        </strong>
                    </div>
                </div>
                <div class="contact">
                    <div class="box mb-8">
                        <span>Kancelář</span><br/>
                        <div class="mt-4 link">
                            <NuxtLink to="https://goo.gl/maps/EjH4Ft7UN2kcxfpg9" target="_blank">
                                Bělehradská 858/23<br/>
                                120 00 Praha 2
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="box">
                        <!-- <span>{{ languageStrings.footer. partnersTitle[language]}}</span>
                         <NuxtLink to="https://dreamspace.cz/" target="_blank">
                                <img class="partners-logo" src="@/assets/img/dream-space.png" alt="">
                          </NuxtLink> -->

                        <!-- <div class="mt-4 socials-group flex">
                            <div class="icon mr-2">
                                <img src="@/assets/svg/facebook.svg" alt="">
                            </div>
                            <div class="icon mr-2">
                                <img src="@/assets/svg/linkedin.svg" alt="">
                            </div>
                            <div class="icon">
                                <img src="@/assets/svg/instagram.svg" alt="">
                            </div>
                        </div> -->
                    </div>
                </div>
                <div class="navigation">
                     <nav class="menu flex flex-col gap-2">
                       <NuxtLink class="menu-link" to="/" title="Úvod">Úvod</NuxtLink>
                        <NuxtLink class="menu-link" to="/online-marketing" title="Online marketing">Online marketing</NuxtLink>
                        <NuxtLink class="menu-link" to="/seo" title="Seo">SEO</NuxtLink>
                        <!-- <NuxtLink class="menu-link" to="/webove-stranky" title="Webový stránky">Webový stránky</NuxtLink> -->
                        <NuxtLink class="menu-link" to="/kaufland" title="Kaufland Partner">Kaufland</NuxtLink>
                         <NuxtLink class="menu-link" to="/allegro" title="Allegro Partner">Allegro</NuxtLink>
                        <NuxtLink class="menu-link" to="/cenik" title="Ceník">Ceník</NuxtLink>
                        <NuxtLink class="menu-link" to="/o-nas" title="O nás">O nás</NuxtLink>
                        <NuxtLink class="menu-link" to="/contact" title="Kontakt">Kontakt</NuxtLink>
                    </nav>
                </div>
            </div>
        </section>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
    setup() {

        const navigations = [
            {
                uid: 'service',
                title: 'Service'
            }, 
            {
                uid: 'references',
                title: 'References'
            },
            {
                uid: 'steps',
                title: 'Steps'
            },
            {
                uid: 'team',
                title: 'Team'
            },
            {
                uid: 'contact',
                title: 'Contact'
            },
        ]

         const scrollTop = () => {
            window.scrollTo(0,0);
        }

        const yearValue = ref(new Date().getFullYear())

        onMounted(() => {
            scrollTop()
        })


        return {
            navigations,
            scrollTop,
            yearValue
        }
    }
})
</script>

<style lang="scss" scoped>
.section-footer {
    padding-top: 120px;

    @media (max-width: 640px) {
        padding-top: 52px;
    }

    .menu {
        a {
            font-size: 18px;
            font-weight: 800;

            &:hover {
                color: $color-primary;
            }
        }
    }

    .title-part {
        .big-title {
            max-width: 70%;

            @media (max-width: 1024px) {
                max-width: 100%;
            }

            h3 {
                font-weight: 600;
                font-size: 62px;
                line-height: 82px;

                @media (max-width: 1280px) {
                    font-size: 52px;
                    line-height: 72px;
                }

                @media (max-width: 768px) {
                    font-size: 42px;
                    line-height: 52px;
                }
            }
        }

        .description {
            p {
                font-weight: 400;
                font-size: 24px;
                line-height: 40px;
                max-width: 70%;

                @media (max-width: 1280px) {
                    font-size: 20px;
                }

                @media (max-width: 768px) {
                    font-size: 16px;
                    line-height: 22px;
                }
            }

            @media (max-width: 768px) {
                flex-direction: column;
                align-items: flex-start;
                gap: 16px;
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
    .contact-part {

        @media (max-width: 768px) {
            margin-top: 32px;
            margin-bottom: 32px;
        }

        .contact-container {
            @media (max-width: 1024px) {
                grid-template-columns: repeat(2, minmax(0, 1fr));
            }

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, minmax(0, 1fr));
                gap: 32px;
            }

            a {
                &:hover {
                    color: #8C52FF;
                }
            }
        }

        .label {
            font-weight: 500;
            color: white;
            font-size: 18px;

            @media (max-width: 768px) {
                font-size: 14px;
                margin-bottom: 2px;
            } 
        }
        a {
            font-size: 32px;
            font-weight: 500;
            color: white;

            @media (max-width: 768px) {
                font-size: 22px;
            }
        }
    }
    .footer-part {
        color: white;

        .footer-container {

            
            .logo {
                a {
                    &:hover {
                        cursor: pointer;
                    }
                }
            }

            @media (max-width: 768px) {
                grid-template-columns: repeat(1, minmax(0, 1fr));

                .copy {
                    grid-column: unset;
                }

                .contact,
                .navigation {
                    margin-top: 32px;
                }
            }
        }

        .contact {
            a {
                font-size: 20px;
                font-weight: 600;
                margin-top: 8px;

                &:hover {
                    cursor: pointer;
                    color: #8C52FF;
                }
            }
            span {
                font-size: 18px;
                font-weight: 500;
            }
            
            .socials-group {
                .icon {
                    background: #8C52FF;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    padding: 8px;
                    width: 32px;
                    height: 32px;
                    border-radius: 50%;
                }
            }

        }

        .navigation {
            li {
                font-weight: 500;
                font-size: 20px;
                margin-bottom: 4px;

                a {
                    &:hover {
                        color: #8C52FF;
                        cursor: pointer;
                    }
                }

                &:last-child {
                    margin-bottom: 0px;
                }
            }
        }
    }
}

.partners-logo {
    width: 102px;
    position: relative;
    left: -12px;
    display: block;
}

</style>