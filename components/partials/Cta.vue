<template>
  <section class="section-cta relative flex">
    <div class="content-cta flex flex-col items-center">
        <div class="content-title flex gap-2">
            <h2>Neváhejte nás</h2>
            <div class="outline-purple">
                <h2>kontaktovat</h2>
            </div>
        </div>
        <p class="text-center pt-2 pb-8">
                Kontaktujte nás pomocí našeho kontaktního 
                formuláře a sjednejte si nezávaznou osobní nebo online konzultaci.
            </p>
        <div class="contact-group">
            <SharedLinkBtn link="/contact" >
                Kontaktuje nás
            </SharedLinkBtn>
        </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>

.section-cta {
    margin: 0 auto;
    margin-top: 64px;
    margin-bottom: 64px;
    padding: 64px;
    background: linear-gradient(90deg, 
                #121212 17.13%, 
                rgba(18, 18, 18, 0) 74.6%);
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), 
                inset 4px 5px 6px rgba(140, 82, 255, 0.6);
    border-radius: 12px;
    align-content: center;
    width: 60%;

    &::before {
        content: '';
        position: absolute;
        bottom: -40px;
        left: -40px;
        width: 122px;
        height: 122px;
        border-radius: 50%;
        border: solid 2px #8C52FF;
        z-index: -1;

        @media (max-width: 1024px) {
            left: -32px;
        }
    }

    @media (max-width: 1280px) {
        padding: 42px;
    }

    @media (max-width: 1024px) {
        width: 80%;
        padding: 32px;
        justify-content: center;
    }

    @media (max-width: 768px) {
        margin-top: 32px;
        width: unset;
        max-width: 100%;
        margin-left: 16px;
        margin-right: 16px;
    }

    .content-cta {
        width: 100%;

        @media (max-width: 1024px) {
            max-width: 100%;
        }

        h2 {
            font-size: 36px;

            @media (max-width: 1024px) {
                margin-bottom: 16px;
            }

            @media (max-width: 640px) {
                font-size: 32px;
                margin-bottom: 0px;
            }
        }

        .link {
            color: white;
            font-size: 22px;
        }
    }
}

.border {
    width: 100%;
    background: #121212;
    height: 8px;
    box-shadow: 1px 1px 12px rgba(140, 82, 255, 0.6), 
                inset 2px 2px 6px rgba(140, 82, 255, 0.8);
    // filter: drop-shadow(14px 14px 62px rgba(140, 82, 255, 0.5));
    border-radius: 12px;
    border: none;

    @media (max-width: 640px) {
        margin-top: 16px;
    }
}

.contact-group {

    @media (max-width: 1280px) {
        gap: 22px;
    }

    @media (max-width: 640px) {
        display: flex;
        gap: 32px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.content-title {
    @media (max-width: 640px) {
        flex-direction: column;
        align-items: center;
        gap: 0px;
    }
}

</style>