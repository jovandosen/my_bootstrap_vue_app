<template>
    <b-container>
        <b-row>
            <b-col>
                <b-carousel
                    id="carousel-fade"
                    style="text-shadow: 0px 0px 2px #000"
                    fade
                    indicators
                    img-width="1024"
                    img-height="480"
                >
                    <b-carousel-slide
                        caption="First slide"
                        img-src="https://picsum.photos/1024/480/?image=10"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Second Slide"
                        img-src="https://picsum.photos/1024/480/?image=12"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Third Slide"
                        img-src="https://picsum.photos/1024/480/?image=22"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Fourth Slide"
                        img-src="https://picsum.photos/1024/480/?image=24"
                    ></b-carousel-slide>
                    <b-carousel-slide
                        caption="Fifth Slide"
                        img-src="https://picsum.photos/1024/480/?image=25"
                    ></b-carousel-slide>
                </b-carousel>
            </b-col>
        </b-row>
    </b-container>
</template>
