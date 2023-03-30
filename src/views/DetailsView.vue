<template>
    <div class="container">
        <div class="details-card-item" v-if="team !== {}">
            <div class="details-card-image">
                <img :src="team.logo" alt="Gallery Card Img" />
            </div>
            <div class="details-card-info">
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Name Code:</span>
                    <span class="details-card-info-value">{{ team.name_code }}</span>
                </div>
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Name:</span>
                    <span class="details-card-info-value">{{ team.name }}</span>
                </div>
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Country:</span>
                    <span class="details-card-info-value">{{ team.country }}</span>
                </div>
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Manager:</span>
                    <span class="details-card-info-value">{{ team.manager.name }}</span>
                </div>
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Stadium:</span>
                    <span class="details-card-info-value">{{ team.venue.stadium.en }}</span>
                </div>
                <div class="details-card-info-item">
                    <span class="details-card-info-title">Stadium Capacity:</span>
                    <span class="details-card-info-value">{{ team.venue.stadium_capacity }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import GalleryService from "@/services/GalleryService";

export default {
    props: ["id"],

    data() {
        return {
            team: {},
        };
    },
    created() {
        GalleryService.getItem(this.id)
            .then((response) => {
                this.team = response.data.data;
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error.response);
            });
    },
};
</script>

<style>
.container {
    height: 100%;
    min-height: 100vh;
    width: 100%;
    background-color: #1f2838;
    padding: 100px 10px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.details-card-item {
    width: 100%;
    max-width: 800px;
    border-radius: 10px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    padding: 20px 0px;
}

.details-card-image {
    width: 100%;
    max-width: 200px;
    /* height: 80%; */
    height: 100%;
    padding: 20px;
    margin: 10px;
}

.details-card-image img {
    width: 100%;
    height: 100%;
    /* max-height: 300px; */
    object-fit: cover;
}

.details-card-info-item {
    display: flex;
    align-items: center;
    justify-content: start;
    margin: 10px 0px;
}

.details-card-info-title {
    min-width: 160px;
    text-align: start;
    font-weight: 700;
}

.details-card-info-item {
    display: flex;
    align-items: center;
    justify-content: start;
}
</style>
