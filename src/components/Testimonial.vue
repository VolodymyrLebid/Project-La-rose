<template>
    <section class="testimonials-area section-gap-top">
        <div class="overlay overlay-bg"></div>
        <div class="container">
            <div class="text-center">
                <img class="quote-img" src="img/quote.png" alt="">
            </div>
            <div class="testi-slider " data-slider-id="1">
                <carousel>

                <slide>
                <div class="item">
                    <div class="testi-item">
                        <h4>Оксана Білик</h4>
                        <ul class="list">
                            <li>
                                <a href="#"><i class="fa fa-star"></i></a><br>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-star"></i></a><br>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-star"></i></a><br>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-star"></i></a><br>
                            </li>
                            <li>
                                <a href="#"><i class="fa fa-star"></i></a><br>
                            </li>
                        </ul>
                        <div class="wow fadeIn" data-wow-duration="1s">
                            <p>
                                Очень приятный салон! Хожу сюда на чистку лица и маникюр.
                                Мастера хорошие, умеют работать с кожей. Атмосфера приятная,
                                помогает расслабиться. Салоном очень довольна, приятное место
                            </p>
                        </div>
                    </div>
                </div>
                </slide>
                </carousel>

            </div>







            <div class="owl-thumbs d-flex justify-content-center" data-slider-id="1">
                <div class="owl-thumb-item">
                    <div>
                        <img class="img-fluid" src="img/testimonials1.png" alt="">
                    </div>
                    <div class="overlay overlay-grad"></div>
                </div>
                <div class="owl-thumb-item">
                    <div>
                        <img class="img-fluid" src="img/testimonials2.png" alt="">
                    </div>
                    <div class="overlay overlay-grad"></div>
                </div>
                <div class="owl-thumb-item">
                    <div>
                        <img class="img-fluid" src="img/testimonials3.png" alt="">
                    </div>
                    <div class="overlay overlay-grad"></div>
                </div>
                <div class="owl-thumb-item">
                    <div>
                        <img class="img-fluid" src="img/testimonials4.png" alt="">
                    </div>
                    <div class="overlay overlay-grad"></div>
                </div>
            </div>
            <button id="button" class="btn-o">Залишити відгук</button>

        </div>
    </section>

</template>



<script>
    export default {

        name: "Testimonial",

    }
</script>

<style scoped>

</style>
