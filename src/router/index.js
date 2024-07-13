import Vue from 'vue';
import VueRouter from 'vue-router';
import RecipeHome from '../views/RecipeHome.vue';
import RecipeFavorites from '../views/RecipeFavorites.vue';
import RecipeDetails from '../views/RecipeDetails.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'RecipeHome',
    component: RecipeHome
  },
  {
    path: '/favorites',
    name: 'RecipeFavorites',
    component: RecipeFavorites
  },
  {
    path: '/details',
    name: 'RecipeDetails',
    component: RecipeDetails,
    props: true
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
