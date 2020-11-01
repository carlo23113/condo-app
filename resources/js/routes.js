import dashboard from "./components/admin/dashboard";
import login from "./components/Login";
import administration from "./components/admin/administration";
import amenity from "./components/admin/amenity";
import billings from "./components/admin/billings";
import reports from "./components/admin/reports";
import security from "./components/admin/security";
import service from "./components/admin/service";
import visitors from "./components/admin/visitors";

export const routes = [
    {
        name: "dashboard",
        path: "/dashboard",
        component: dashboard
    },
    {
        name: "login",
        path: "/login",
        component: login
    },
    {
        name: "administration",
        path: "/administration",
        component: administration
    },
    {
        name: "amenity",
        path: "/amenity",
        component: amenity
    },
    {
        name: "billings",
        path: "/billings",
        component: billings
    },
    {
        name: "reports",
        path: "/reports",
        component: reports
    },
    {
        name: "security",
        path: "/security",
        component: security
    },
    {
        name: "service",
        path: "/service",
        component: service
    },
    {
        name: "visitors",
        path: "/visitors",
        component: visitors
    }
];
