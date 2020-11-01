<template>
<div>
    <div class="service">
        <h1>
            Service Requests
        </h1>
        <div id="search">
            <v-text-field v-model="search" label="Search" id="search-input" color="rgb(71, 71, 71)" outlined clearable></v-text-field>
            <v-btn elevation="2" id="search-btn" icon tile><svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="svg-inline--fa fa-search fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                </svg></v-btn>
        </div>
    </div>
    <br />
    <v-simple-table light>
        <template>
            <thead>
                <tr>
                    <th class="text-left">
                        Request #
                    </th>
                    <th class="text-left">
                        Unit #
                    </th>
                    <th class="text-left">
                        Assignee
                    </th>
                    <th class="text-left">
                        Request Type
                    </th>
                    <th class="text-left">
                        Subject
                    </th>
                    <th class="text-left">
                        Permission to Enter
                    </th>
                    <th class="text-left">
                        Date Issued
                    </th>
                    <th class="text-left">
                        Status
                    </th>
                    <th class="text-left">
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="datas in requests" :key="datas.id">
                    <td>{{ datas.id }}</td>
                    <td>{{ datas.unit }}</td>
                    <td>{{ datas.assignee }}</td>
                    <td>{{ datas.request }}</td>
                    <td>{{ datas.subject }}</td>
                    <td>{{ datas.permission }}</td>
                    <td>{{ datas.date }}</td>
                    <td>{{ datas.status }}</td>
                    <td>
                        <v-btn id="btn">View</v-btn>
                    </td>
                </tr>
            </tbody>
        </template>
    </v-simple-table>
    <br />
    <div class="text-center">
        <v-pagination v-model="page" color="rgb(71, 71, 71)" :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right"></v-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            page: 1,
            search: "",
            requests: [{
                    id: "SR0001",
                    unit: "A105",
                    assignee: "Mack",
                    request: "Service Request",
                    subject: "please fix the leak",
                    permission: "Yes",
                    date: "10/29/2020",
                    status: "Open"
                },
                {
                    id: "SR0001",
                    unit: "A105",
                    assignee: "Mack",
                    request: "Service Request",
                    subject: "please fix the leak",
                    permission: "Yes",
                    date: "10/29/2020",
                    status: "Open"
                }
            ]
        };
    }
};
</script>
