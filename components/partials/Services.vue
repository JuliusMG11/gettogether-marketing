<template>
    <section class="service-section pt-16 pb-16">
        <div class="container">
           <div class="title-content pb-32">
                <div class="content-section">
                    <h2>Pomůžeme vám</h2>
                </div>
                <div class="outline-purple col-span-2">
                    <h2>
                        v těchto oblastech
                    </h2>
                </div>
           </div>
            
            <div class="service-section">
                <div class="service-grid grid grid-cols-3 gap-16">
                    <div class="box flex flex-col items-center">
                        <figure class="flex flex-col items-center">
                            <div class="icon">
                                <img src="@/assets/img/service/online-marketing.png" alt="Online marketing" title="..." />
                            </div>
                            <figcaption class="pt-2 text-center">
                                <h4>Online marketing</h4>
                            </figcaption>
                        </figure>
                        <p class="text-center pt-2">
                            Online marketing na internetu přiblíží vaší firmu, 
                            působící na internetu, k dosažení vašich cílů, které jste si v podnikání určili. 
                            S touto nelehkou cestou vám rádi pomůže. 
                        </p>
                        <div class="button pt-4 flex justify-center">
                            <SharedLinkBtn link="/online-marketing"  title="Prohlédnout službu" theme="outline-theme">
                                Prohlédnout službu
                            </SharedLinkBtn>
                        </div>
                    </div>

                    <div class="box flex flex-col items-center">
                        <figure class="flex flex-col items-center">
                            <div class="icon">
                                <img src="@/assets/img/service/seo.png" alt="Online marketing" title="..." />
                            </div>
                            <figcaption class="pt-2 text-center">
                                <h4>SEO</h4>
                            </figcaption>
                        </figure>
                        <p class="text-center pt-2">
                            Postaráme se o všechny kroky pro dosažení prvních míst 
                            v organickém vyhledávání pro vaše webové stránky. Naše práce bude mít efekt pro vyhledávače 
                            jako je Google nebo Seznam.
                        </p>
                         <div class="button pt-4 flex justify-center">
                            <SharedLinkBtn link="/seo"  title="Prohlédnout službu" theme="outline-theme">
                                Prohlédnout službu
                            </SharedLinkBtn>
                        </div>
                    </div>

                    <div class="box flex flex-col items-center">
                        <figure class="flex flex-col items-center">
                            <div class="icon">
                                <img src="@/assets/img/service/web.png" alt="Online marketing" title="..." />
                            </div>
                            <figcaption class="pt-2 text-center">
                                <h4>Webové stránky</h4>
                            </figcaption>
                        </figure>
                        <p class="text-center pt-2">
                            Nabízíme vám tvorbu profesionálních www stránek pro vaši prezentaci na internetu. 
                            Předěláme vaše aktuální webové stránky 
                            nebo vám vytvoříme zcela nové.
                        </p>
                        <div class="button pt-4 flex justify-center">
                            <SharedLinkBtn link="/webove-stranky" title="Prohlédnout službu" theme="outline-theme">
                                Prohlédnout službu
                            </SharedLinkBtn>
                        </div>
                    </div>

                    <!-- <div class="box flex flex-col items-center">
                        <figure class="flex flex-col items-center">
                            <div class="icon">
                                <img src="@/assets/img/service/eshop.png" alt="Online marketing" title="..." />
                            </div>
                            <figcaption class="pt-2">
                                <h4>Eshopy</h4>
                            </figcaption>
                        </figure>
                        <p class="text-center pt-2">
                            U nás v Gettogether vytváříme e-shopy, kde je 
                            nakupování skutečným zážitkem. Poskytujeme komplexní služby, 
                            které zahrnují skvělý design i vynikající funkčnost.
                        </p>
                         <div class="button pt-4 flex justify-center">
                            <SharedLinkBtn to="" title="Prohlédnout službun" theme="outline-theme">
                                Prohlédnout službu
                            </SharedLinkBtn>
                        </div>
                    </div> -->
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss" scoped>


h3 {
    -webkit-text-fill-color: transparent; /* Will override color (regardless of order) */
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: $color-primary;
    font-weight: 900;
    font-size: 26px;
}


.description {
    p {
        font-size: 18px;
        line-height: 32px;
    }
}


.box {

    p {
        font-size: 14px;
    }

    .icon {
        position: relative;

        img {
            width: 52px;
             height: 52px;
            object-fit: cover;
        }

        &::before {
            content: '';
            position: absolute;
            width: 62px;
            height: 62px;
            border-radius: 50%;
            border: solid 2px $color-primary;
            top: -14px;
            left: -14px;
            z-index: -1;
        }
    }
}

.service-grid {
    @media (max-width: 1024px) {
        gap: 22px;
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, minmax(0, 1fr));
        gap: 64px;
    }
}

.title-content {
    @media (max-width: 1024px) {
        padding-bottom: 64px;
    }

    @media (max-width: 640px) {
        text-align: center;
    }
}
</style>