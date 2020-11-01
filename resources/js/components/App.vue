<template>
<v-app id="inspire">
    <v-navigation-drawer v-model="drawer" id="nav-drawer" app>
        <v-avatar class="d-block text-center mx-auto mt-4" size="36"><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="user" class="svg-inline--fa fa-user fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path fill="currentColor" d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
            </svg></v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>
        <v-list shaped>
            <v-list-item to="/dashboard" link>
                <v-list-item-content>
                    <v-list-item-title>Dashboard</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/administration" link>
                <v-list-item-content>
                    <v-list-item-title>Administration</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/service" link>
                <v-list-item-content>
                    <v-list-item-title>Service Request</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/amenity" link>
                <v-list-item-content>
                    <v-list-item-title>Amenity Booking</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/visitors" link>
                <v-list-item-content>
                    <v-list-item-title>Visitors Booking</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/security" link>
                <v-list-item-content>
                    <v-list-item-title>Security / Concierge</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/billings" link>
                <v-list-item-content>
                    <v-list-item-title>Billings / Payments</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item to="/reports" link>
                <v-list-item-content>
                    <v-list-item-title>Reports</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item link>
                <v-list-item-content>
                    <v-list-item-title @click="logoutmodal">Logout</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar id="navbar" app>
        <v-app-bar-nav-icon @click="drawer = !drawer"><svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" viewBox="0 0 24 24" fill="white" width="18px" height="18px">
                <g>
                    <rect fill="none" height="24" width="24" />
                    <path d="M22,7H2V2h20V7z M22,9.5H2v5h20V9.5z M22,17H2v5h20V17z" />
                </g>
            </svg></v-app-bar-nav-icon>

        <v-toolbar-title>Condo Management System</v-toolbar-title>
    </v-app-bar>

    <v-main>
        <div class="main">
            <router-view></router-view>
        </div>
    </v-main>

    <v-row justify="center">
        <v-dialog v-model="dialog" persistent max-width="500">
            <v-card>
                <v-card-title class="headline">
                    Are you sure you want to logout?
                </v-card-title>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn text @click="dialog = false">
                        No
                    </v-btn>
                    <v-btn id="btn" @click="logout">
                        Yes
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-row>
</v-app>
</template>

<script>
import {
    host
} from "../host.js";
export default {
    data: () => ({
        drawer: null,
        dialog: false
    }),
    methods: {
        checksession() {
            this.axios
                .get(host + `/checksession`)
                .then(response => {
                    this.check(response.data);
                })
                .catch(error => console.log(error))
                .finally(() => (this.loading = false));
        },
        check(data) {
            if (data.user == "admin") {
                this.admin();
            } else {
                window.location.href = "/login";
            }
        },
        admin() {
            if (
                window.location.href == host + "/" ||
                window.location.href == host + "/home"
            )
                this.$router.push({
                    name: "dashboard",
                    params: {
                        id: this.id
                    }
                });
        },
        logoutmodal() {
            this.dialog = true;
            /*this.axios.post(host + `/logout`).then(response => {
                if (response.data == "success") {
                    window.location.href = "/login";
                }
            });*/
        },
        logout() {
            this.axios.post(host + `/logout`).then(response => {
                if (response.data == "success") {
                    window.location.href = "/login";
                }
            });
        }
    },
    created() {
        this.checksession();
    }
};
</script>
