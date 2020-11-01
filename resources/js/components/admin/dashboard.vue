<template>
<div>
    <div class="grid-container">
        <!-------- SERVICE REQUEST CARD ------------>

        <div class="grid-item" id="service">
            <v-card class="mx-auto" elevation="4" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                            SERVICE REQUEST
                        </div>
                        <v-list-item-title class="headline mb-1">
                            5
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user-cog" class="svg-inline--fa fa-user-cog fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"></path>
                        </svg></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn id="check-btn" @click="service" outlined rounded text>
                        CHECK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
        <!-------- AMENITY BOOKING CARD ------------>
        <div class="grid-item" id="amenity">
            <v-card class="mx-auto" elevation="4" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                            AMENITY BOOKING
                        </div>
                        <v-list-item-title class="headline mb-1">
                            8
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book-open" class="svg-inline--fa fa-book-open fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="currentColor" d="M542.22 32.05c-54.8 3.11-163.72 14.43-230.96 55.59-4.64 2.84-7.27 7.89-7.27 13.17v363.87c0 11.55 12.63 18.85 23.28 13.49 69.18-34.82 169.23-44.32 218.7-46.92 16.89-.89 30.02-14.43 30.02-30.66V62.75c.01-17.71-15.35-31.74-33.77-30.7zM264.73 87.64C197.5 46.48 88.58 35.17 33.78 32.05 15.36 31.01 0 45.04 0 62.75V400.6c0 16.24 13.13 29.78 30.02 30.66 49.49 2.6 149.59 12.11 218.77 46.95 10.62 5.35 23.21-1.94 23.21-13.46V100.63c0-5.29-2.62-10.14-7.27-12.99z"></path>
                        </svg></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn id="check-btn" @click="amenity" outlined rounded text>
                        CHECK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <!-------- VISITORS CARD ------------>
        <div class="grid-item" id="visitors">
            <v-card class="mx-auto" elevation="4" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                            VISITORS
                        </div>
                        <v-list-item-title class="headline mb-1">
                            4
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="users" class="svg-inline--fa fa-users fa-w-20" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                            <path fill="currentColor" d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z"></path>
                        </svg></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn id="check-btn" @click="visitors" outlined rounded text>
                        CHECK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>

        <!-------- BILLINGS/PAYMENTS CARD ------------>
        <div class="grid-item" id="billing">
            <v-card class="mx-auto" elevation="4" max-width="344" outlined>
                <v-list-item three-line>
                    <v-list-item-content>
                        <div class="overline mb-4">
                            BILLING / PAYMENTS
                        </div>
                        <v-list-item-title class="headline mb-1">
                            11
                        </v-list-item-title>
                    </v-list-item-content>

                    <v-list-item-avatar tile size="80"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-invoice-dollar" class="svg-inline--fa fa-file-invoice-dollar fa-w-12" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path fill="currentColor" d="M377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9zm-153 31V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zM64 72c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8V72zm0 80v-16c0-4.42 3.58-8 8-8h80c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8H72c-4.42 0-8-3.58-8-8zm144 263.88V440c0 4.42-3.58 8-8 8h-16c-4.42 0-8-3.58-8-8v-24.29c-11.29-.58-22.27-4.52-31.37-11.35-3.9-2.93-4.1-8.77-.57-12.14l11.75-11.21c2.77-2.64 6.89-2.76 10.13-.73 3.87 2.42 8.26 3.72 12.82 3.72h28.11c6.5 0 11.8-5.92 11.8-13.19 0-5.95-3.61-11.19-8.77-12.73l-45-13.5c-18.59-5.58-31.58-23.42-31.58-43.39 0-24.52 19.05-44.44 42.67-45.07V232c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v24.29c11.29.58 22.27 4.51 31.37 11.35 3.9 2.93 4.1 8.77.57 12.14l-11.75 11.21c-2.77 2.64-6.89 2.76-10.13.73-3.87-2.43-8.26-3.72-12.82-3.72h-28.11c-6.5 0-11.8 5.92-11.8 13.19 0 5.95 3.61 11.19 8.77 12.73l45 13.5c18.59 5.58 31.58 23.42 31.58 43.39 0 24.53-19.05 44.44-42.67 45.07z"></path>
                        </svg></v-list-item-avatar>
                </v-list-item>

                <v-card-actions>
                    <v-btn id="check-btn" @click="billings" outlined rounded text>
                        CHECK
                    </v-btn>
                </v-card-actions>
            </v-card>
        </div>
    </div>
    <v-divider></v-divider>
    <v-sheet :color="color" elevation="5" height="60vh" max-width="calc(100% - 32px)">
        <v-card-text>
            <div class="display-1 font-weight-thin">
                {{ header }}
            </div>
        </v-card-text>
        <v-sparkline :labels="labels" :value="value" height="75%" color="white" line-width="1" padding="16"></v-sparkline>
    </v-sheet>
</div>
</template>

<script>
export default {
    data: () => ({
        labels: ["12am", "3am", "6am", "9am", "12pm", "3pm", "6pm", "9pm"],
        value: [200, 675, 410, 390, 310, 460, 250, 240],
        color: "",
        header: ""
    }),
    methods: {
        service() {
            this.color = "#00acc1";
            this.header = "Service Request";
        },
        amenity() {
            this.color = "#7cb342";
            this.header = "Amenity Booking";
        },
        visitors() {
            this.color = "#f4511e";
            this.header = "Visitors";
        },
        billings() {
            this.color = "#8e24aa";
            this.header = "Billings and Payments";
        }
    },
    created() {
        this.service();
    }
};
</script>
