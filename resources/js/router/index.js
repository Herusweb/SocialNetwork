import { createRouter, createWebHistory } from "vue-router";
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // Использует HTML5 history API

    routes: [
        {
            path: "/index",
            name: "Index",
            component: () => import("../views/Index.vue"),
        },
        {
            path: "/page",
            name: "Page",
            component: () => import("../views/Page.vue"),
        },
    ],
});
export default router;
