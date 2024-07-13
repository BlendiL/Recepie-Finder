// store/index.js
import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'; // Import axios

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    recipesModule: {
      namespaced: true, // Ensure the module is namespaced
      state: {
        recipes: [] // Initial state for recipes
      },
      mutations: {
        setRecipes(state, recipes) {
          state.recipes = recipes;
        }
      },
      actions: {
        async fetchRecipes({ commit }, query) {
          const appId = '50d3eed7';
          const appKey = 'eb1e48d15f81ff634b8095908f8987a7';
          const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}`;

          try {
            const response = await axios.get(url);
            commit('setRecipes', response.data.hits);
          } catch (error) {
            console.error('Error fetching recipes:', error);
            // Handle error cases
          }
        }
      }
    }
  }
});

export default store;
