<template>
  <div id="team" class="section-team pb-16">
    <div class="container">
        <div class="title mb-16">
            <h2>Náš tým</h2>
            <div class="subtitle outline-purple">
                <h2>jedna komunita</h2>
            </div>
            <p class="text mt-4">
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
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    setup() {

        // const teams = [
        //     {
        //         image: 'roman',
        //         name: 'Roman Teicher',
        //         position: 'Fullstack developer'
        //     },
        //     {
        //         image: 'julius',
        //         name: 'Julius Petrik',
        //         position: 'Frontend, UX/UI'
        //     },
        //     {
        //         image: 'michal',
        //         name: 'Michal Vokolek',
        //         position: 'Backend developer'
        //     }
        // ]
        
        return {
            // teams
        }
    }
})
</script>

<style lang="scss" scoped>

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