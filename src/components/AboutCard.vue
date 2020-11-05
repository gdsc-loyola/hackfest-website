<template>
    <div class="about_card">
        <div :style="isImage ? {'display': 'block'} : {'display': 'none'}">
            <img :src="image" :alt="title">
        </div>
        <div class="about_wrapper">
            <h4>{{title}}</h4>
            <p>{{description}}</p>
            <div class="about_button_wrapper">
                <router-link tag="div" :to="link" class="about_button">
                    Learn More
                    <svg width="27" height="24" viewBox="0 0 27 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M26.0607 13.0607C26.6464 12.4749 26.6464 11.5251 26.0607 10.9393L16.5147 1.3934C15.9289 0.80761 14.9792 0.80761 14.3934 1.3934C13.8076 1.97918 13.8076 2.92893 14.3934 3.51472L22.8787 12L14.3934 20.4853C13.8076 21.0711 13.8076 22.0208 14.3934 22.6066C14.9792 23.1924 15.9289 23.1924 16.5147 22.6066L26.0607 13.0607ZM1.31134e-07 13.5L25 13.5L25 10.5L-1.31134e-07 10.5L1.31134e-07 13.5Z" fill="#EA4335"/>
                    </svg>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  props: ["image", "title", "description", "link", "isImage"]
}
</script>

<style>
.about_card {
    display: flex;
    margin: 30px;
    background: white;
}

.about_card img {
    width: 120px;
    object-position: center;
    object-fit: cover;
}

.about_wrapper {
    padding: 24px 16px;
}

.about_wrapper h4 {
    font-family: "Google Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 31px;
    margin: 0 0 16px 0;
    color: #000000;
}

.about_wrapper P {
    font-family: "Google Sans", sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #000000;
}

.about_button_wrapper {
    margin-top: 90px;
    display: flex;
    justify-content: flex-end;
}

.about_button {
    display: flex;
    font-family: "Google Sans", sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #EA4335
}

.about_button svg {
    margin-left: 16px;
}

@media screen and (max-width: 900px) {
    .about_card {
        margin: 30px 0;
    }
}
</style>