<template>
  <div class="contact-page">
     <div class="video-w">
        <DesignVideo />
    </div>
    <section class="contact-section pt-32">
        <SharedHeadTitle
            title="Nezávazná konzultace zdarma"
            description="Po přijatí emailu Vás nasledovne budeme kontaktovat a vyslechneme si vaše přání a požadavky. Následně vám představíme konkrétní návrh všech možností a věříme, že se jednou z těchto cest vydáte a my budeme její součástí."
        />
        <div class="contact-container container flex flex-col items-center pt-32">

             <div class="content-section flex gap-4 pb-16">
                    <div class="title">
                        <h2>Neváhejte nás</h2>
                    </div>
                    <div class="subtitle outline-purple">
                        <h2>kontaktovat</h2>
                    </div>
                </div>

            <div class="contact-info flex justify-between">
                <div class="contact-box flex gap-4 items-center">
                    <span class="material-symbols-outlined icon-small">phone_enabled</span>
                    <a href="tel:+420721283131">
                        +420 721 283 131
                    </a>
                </div>
                <div class="contact-box flex gap-4 items-center">
                    <span class="material-symbols-outlined icon-small">email</span>
                    <a href="mailto:info@gettogether.cz">
                        info@gettogether.cz
                    </a>
                </div>
            </div>

            <!-- <div class="contact-form pt-16">
                    <form>
                        <div class="form-grid grid grid-cols-2 gap-6">
                            <div class="custom-input flex">
                                <label for="firstName">Vaše jméno</label>
                                <input name="firstName" type="text">
                            </div>
                            <div class="custom-input flex">
                                <label for="lastName">Vaše příjmení</label>
                                <input name="lastName" type="text">
                            </div>
                            <div class="custom-input flex">
                                <label for="email">Váš email</label>
                                <input name="email" type="email">
                            </div>
                                <div class="custom-input flex">
                                <label for="phone">Vaše tel. číslo</label>
                                <input name="phone" type="text">
                            </div>
                        </div>
                        <div class="custom-input pt-4 flex">
                                <label for="subject">Předmět</label>
                                <input name="subject" type="text">
                        </div>
                        <div class="text-area custom-input flex pt-6">
                            <label for="message">Zpráva</label>
                            <textarea id="message" name="message" rows="4" cols="50" />
                        </div>
                        <div class="send-button">
                            <SharedLinkBtn class="cta mt-4" link="mailto:info@gettogether.cz" title="E-mail">
                                Odeslat
                            </SharedLinkBtn>
                        </div>
                    </form>
                </div> -->
        </div>
        
        <div class="section-team pb-16">
            <div class="container">
                <div class="title mb-16 flex flex-col items-center">
                    <h2>Náš tým</h2>
                    <div class="subtitle outline-purple">
                        <h2>jedna komunita</h2>
                    </div>
                    <p class="text text-center mt-4">
                        Naším posláním je poskytovat klientům inovativní technologická řešení, 
                        která jim umožní realizovat jejich vize. Umožňujeme našim klientům růst a 
                        vytvářet hodnoty prostřednictvím digitalizace.
                    </p>
                </div>

                <div class="team-container grid grid-cols-4 gap-16">
                    <section class="box flex relative">
                        <div class="profile roman">
                            <!-- <img src="@/assets/img/roman.jpg" alt=""> -->
                        </div>
                        <h3 class="mt-4 mb-2">Roman Teicher</h3>
                        <span>Fullstack developer</span>
                    </section>
                    <section class="box flex relative">
                        <div class="profile julo"></div>
                        <h3 class="mt-4 mb-2">Július Petrik</h3>
                        <span>Frontend, UX/UI</span>
                    </section>
                    <section class="box flex relative">
                        <div class="profile david"></div>
                        <h3 class="mt-4 mb-2">David Kosina</h3>
                        <span>Marketing Specialist</span>
                    </section>
                     <section class="box flex relative">
                        <div class="profile patrik"></div>
                        <h3 class="mt-4 mb-2">Patrik Buday</h3>
                        <span>Project manager</span>
                    </section>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup>
onMounted(() => {
    window.scrollTo(0, 0);
});

</script>

<style lang="scss" scoped>

.contact-info {
    max-width: 70%;
    width: 100%;

    a {
        font-size: 32px;

        @media (max-width: 768px) {
            font-size: 22px;
        }
    }

    span {
        font-size: 38px;
        color: $color-primary;

         @media (max-width: 768px) {
            font-size: 26px;
        }
    }

    @media (max-width: 1024px) {
        max-width: 100%
    }

    @media (max-width: 640px) {
        flex-direction: column;
        gap: 8px;
    }
}

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

.contact-form {
    max-width: 680px;
    width: 100%;
}

.custom-input {
    flex-direction: column;
    
    label {
        font-size: 18px;
        color: $color-text-white;
        padding-bottom: 16px;
    }

    input {
        height: 42px;
        background-color: $color-text-white;
        font-size: 16px;
        color: $color-default-text;
        border-radius: 8px;
        border-width: 1px solid $color-text-white;
        padding: 0px 16px;

        &:focus-visible {
            outline:  unset !important;
        }


        &:focus {
            border: 1px solid  $color-primary;
        }
    }
}

.form-grid {
    @media (max-width: 480px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
    }
}

.send-button {
    max-width: 180px;
}


textarea {
    border-radius: 8px;
    padding: 16px;
}

.content-section {
    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        padding-bottom: 32px
    }
}
.section-team {

    padding-top: 120px;

    @media (max-width: 1024px) {
        padding-top: 32px;
    }

    @media (max-width: 640px) {
        padding-top: 0px;
    }

    .team-container {
        @media (max-width: 1024px) {
            gap: 32px;
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }

        @media (max-width: 768px) {
            gap: 32px;
            grid-template-columns: repeat(1, minmax(0, 1fr));
        }
    }

    .title {
        @media (max-width: 768px) {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }
    }

    .text {
        max-width: 520px;
    }

    .box {
        flex-direction: column;
        align-items: center;

        span {
            font-size: 18px;
            color: white;
            font-weight: 300;
        }

        &::before {
                content: '';
                position: absolute;
                width: 180px;
                height: 180px;
                top: -10px;
                // left: 6px;
                border: solid 1px #8C52FF;
                border-radius: 50%;
                transform: translateX(10px);
            }

        .profile {
            position: relative;
            width: 172px;
            height: 172px;
            border-radius: 50%;
            overflow: hidden;

            &.roman {
                background: url('./assets/img/profiles/roman.jpg');
                background-position: center;
                background-size: 100%;
            }

            &.julo {
                background: url('./assets/img/profiles/julius.jpg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: 100%;
            }

            &.david {
                background: url('./assets/img/profiles/michal.jpg');
                background-position: center top;
                background-repeat: no-repeat;
                background-size: 100%;
            }

            &.patrik {
                background: url('./assets/img/profiles/patrik.jpg');
                background-position: top -10px center;
                background-size: 100%;
            }
        
        }
    }
}
</style>