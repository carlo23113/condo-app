<template>
<v-app>
    <v-main>
        <div class="login">
            <v-row justify="center">
                <v-dialog v-model="dialog" persistent max-width="600px">
                    <v-card id="login-dialog">
                        <v-card-title>
                            <span class="headline">Login</span>
                        </v-card-title>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col cols="12">
                                        <v-text-field label="Username*" v-model="account.username" required></v-text-field>
                                    </v-col>
                                    <v-col cols="12">
                                        <v-text-field label="Password*" v-model="account.password" type="password" required></v-text-field>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                        </v-card-text>
                        <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn text @click="clear()">
                                Clear
                            </v-btn>
                            <v-btn id="btn" @click="login()">
                                Login
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-row>
        </div>
    </v-main>
</v-app>
</template>

<script>
import {
    host
} from "../host.js";
export default {
    data: () => ({
        dialog: false,
        account: {
            username: "",
            password: ""
        }
    }),
    created() {
        this.dialog = true;
    },
    methods: {
        clear() {
            this.account.username = "";
            this.account.password = "";
        },
        login() {
            this.axios.post(host + `/login`, this.account).then(response => {
                if (response.data == "success") {
                    window.location.href = "/dashboard";
                }
            });
        }
    }
};
</script>
