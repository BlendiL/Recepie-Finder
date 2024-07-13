<template>
  <div class="home-container">
    <div class="background-image"></div>
    <div class="content-container">
      <div class="input-group mb-3">
  <div class="tb">
    <div class="td">
      <input type="text" placeholder="Search" required v-model="searchQuery" @keyup.enter="searchRecipes" />
    </div>
    <div class="td" id="s-cover">
      <button type="button" class="button" @click="searchRecipes">
        <div id="s-circle"></div>
        <span></span>
      </button>
    </div>
  </div>
</div>
      <div v-if="recipes.length" class="recipes-list">
        <div v-for="recipe in recipes" :key="recipe.recipe.uri" class="recipe-card">
          <img :src="recipe.recipe.image" :alt="recipe.recipe.label" class="recipe-image" />
          <h2>{{ recipe.recipe.label }}</h2>
          <p><strong>Source:</strong> {{ recipe.recipe.source }}</p>
          <p><strong>Calories:</strong> {{ recipe.recipe.calories.toFixed(2) }}</p>
          <ul class="ingredients-list">
            <li v-for="(ingredient, index) in recipe.recipe.ingredients" :key="index">{{ ingredient.text }}</li>
          </ul>
          <div class="recipe-actions">
            <button @click="addToFavorites(recipe.recipe)" class="mybutton1">Add to Favorites</button>
            <router-link :to="{ name: 'RecipeDetails', params: { recipe: recipe.recipe } }" class="mybutton1">View Details</router-link>
          </div>
        </div>
      </div>

      <p v-else class="no-recipes-message">Don't know what to cook? Try searching for something!</p>
    </div>
  </div>
</template>

<script>


import { mapActions, mapState } from 'vuex';

import { Ripple, initMDB } from 'mdb-ui-kit'; // Import necessary components from MDB UI Kit

// Initialize MDB UI Kit
initMDB({ Ripple });

export default {
  name: 'RecipeHome',
  data() {
    return {
      searchQuery: ''
    };
  },
  computed: {
    ...mapState('recipesModule', ['recipes'])
  },
  methods: {
    ...mapActions('recipesModule', ['fetchRecipes']),
    searchRecipes() {
      if (this.searchQuery.trim()) {
        this.fetchRecipes(this.searchQuery);
      }
    },
    addToFavorites(recipe) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.find(fav => fav.uri === recipe.uri)) {
        favorites.push(recipe);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        alert('Recipe added to favorites!');
      } else {
        alert('Recipe already in favorites!');
      }
    }
  }
};
</script>

<style scoped>
.home-container {
  position: relative;
  overflow: hidden;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  min-height: 100vh; /* Ensure container stretches to full viewport height */
  display: flex;
  flex-direction: column;
  align-items: center;
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  
  background-size: cover;
  background-position: center;
  filter: brightness(0.5); 
  z-index: -1;
}

.content-container {
  position: relative;
  z-index: 1;
  text-align: center;
}

.search-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.search-container input {
  padding: 10px;
  font-size: 1.2em;
  width: 300px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.search-container button {
  padding: 10px 20px;
  font-size: 1.2em;
  background-color: #42c861;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.search-container button:hover {
  background-color: #34af4a;
}

.recipes-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.recipe-card {
  background: rgba(255, 255, 255, 0.8); /* Transparent white background */
  border: 1px solid #0f0a0a;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.recipe-card:hover {
  transform: translateY(-5px);
}

.recipe-card h2 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
}

.recipe-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.ingredients-list {
  text-align: left;
  margin-top: 10px;
}

.ingredients-list li {
  margin-bottom: 5px;
}

.recipe-actions {
  margin-top: 10px;
}

.favorites-button,
.view-details-button {
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 5px;
}

.favorites-button:hover,
.view-details-button:hover {
  background-color: #218838;
}

.no-recipes-message {
  font-size: 2.0em;
  margin-top: 20px;
  color: #f2f7f2;
  text-align: center;

}

/* Add the provided CSS styles here */
.tb {
  display: table;
  width: 100%;
}

.td {
  display: table-cell;
  vertical-align: middle;
}

input{
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: rgba(240, 244, 237, 0.4);
  border-radius: 25px;
  width: 90%;
}
.button {
  color: #fff;
  font-family: Nunito;
  padding: 0;
  margin: 0;
  border: 0;
  background-color: transparent;
}

#cover {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  width: 550px;
  padding: 35px;
  margin: -83px auto 0 auto;
  background-color: #28a745;
  border-radius: 20px;
  box-shadow: 0 10px 40px #28a745, 0 0 0 20px #ffffffeb;
  transform: scale(0.6);
}

form {
  height: 96px;
}

input[type="text"] {
  width: 100%;
  height: 96px;
  font-size: 30px;
  line-height: 1;
}

input[type="text"]::placeholder {
  color: #ecf5ee;
}

#s-cover {
  width: 1px;
  padding-left: 35px;
}

.button {
  position: relative;
  display: block;
  width: 84px;
  height: 96px;
  cursor: pointer;
}

#s-circle {
  position: relative;
  top: -8px;
  left: 0;
  width: 43px;
  height: 43px;
  margin-top: 0;
  border-width: 15px;
  border: 15px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  transition: 0.5s ease all;
}

.button span {
  position: absolute;
  top: 68px;
  left: 43px;
  display: block;
  width: 45px;
  height: 15px;
  background-color: whitesmoke;
  border-radius: 10px;
  transform: rotateZ(52deg);
  transition: 0.5s ease all;
}

.button span:before,
.button span:after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 45px;
  height: 15px;
  background-color: #fff;
  border-radius: 10px;
  transform: rotateZ(0);
  transition: 0.5s ease all;
}

#s-cover:hover #s-circle {
  top: -1px;
  width: 67px;
  height: 15px;
  border-width: 0;
  background-color: #fff;
  border-radius: 20px;
}

#s-cover:hover span {
  top: 50%;
  left: 56px;
  width: 25px;
  margin-top: -9px;
  transform: rotateZ(0);
}

#s-cover:hover button span:before {
  bottom: 11px;
  transform: rotateZ(52deg);
}

#s-cover:hover button span:after {
  bottom: -11px;
  transform: rotateZ(-52deg);
}
#s-cover:hover button span:before,
#s-cover:hover button span:after {
  right: -6px;
  width: 40px;
  background-color: #fff;
}


.mybutton1 {
  box-shadow: 0px 0px 0px 0px #28a745;
  background-color: #d9f7e1;
  border-radius: 28px;
  border: 1px solid #28a745;
  display: inline-block;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #030303;
  font-family: Verdana, sans-serif;
  font-size: 15px;

  padding: 10px 20px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #28a745;
  margin: 5px;
  white-space: nowrap; /* Ensure text stays in one line */
  transition: background-color 0.3s ease, transform 0.3s ease; /* Add smooth transition */
}

.mybutton1:hover {
  background-color: #3e7327;
  color: #fff; /* Change text color on hover for better contrast */
  transform: translateY(-3px); /* Add a slight lift effect */
}

.mybutton1:active {
  position: relative;
  top: 1px;
  transform: translateY(0); /* Remove lift effect on click */
}


</style>
