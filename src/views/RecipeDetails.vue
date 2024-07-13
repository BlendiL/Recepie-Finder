<template>
  <div class="details-container">
    <div class="image-container">
      <img :src="recipe.image" :alt="recipe.label" class="recipe-image" />
    </div>
    <div class="details-info">
      <h2 class="recipe-title">{{ recipe.label }}</h2>
      <p><strong>Source:</strong> {{ recipe.source }}</p>
      <p><strong>Calories:</strong> {{ recipe.calories.toFixed(2) }}</p>
      <p><strong>Servings:</strong> {{ recipe.yield }}</p>
      <p v-if="recipe.totalTime"><strong>Total Time:</strong> {{ recipe.totalTime }}</p>
      <p v-if="recipe.cuisineType.length"><strong>Cuisine:</strong> {{ recipe.cuisineType.join(', ') }}</p>
      <p v-if="recipe.mealType.length"><strong>Meal Type:</strong> {{ recipe.mealType.join(', ') }}</p>
      <p v-if="recipe.dishType.length"><strong>Dish Type:</strong> {{ recipe.dishType.join(', ') }}</p>
      <p><strong>Ingredients:</strong></p>
      <ul class="ingredients-list">
        <li v-for="ingredient in recipe.ingredientLines" :key="ingredient">{{ ingredient }}</li>
      </ul>
      <a :href="recipe.url" target="_blank" class="mybutton1 details-link">View Full Recipe</a>
      <button @click="addToFavorites" class="mybutton1 favorites-button">Add to Favorites</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RecipeDetails',
  props: ['recipe'],
  methods: {
    addToFavorites() {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      if (!favorites.find(fav => fav.uri === this.recipe.uri)) {
        favorites.push(this.recipe);
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
.details-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap; /* Allow wrapping for smaller screens */
}

.image-container {
  flex: 1;
  padding-right: 20px;
}

.recipe-image {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.details-info {
  flex: 2;
  text-align: left;
  padding: 20px;
}

.recipe-title {
  font-size: 2.5em;
  margin-bottom: 10px;
  color: #333;
}

.details-info p,
.details-info ul {
  margin: 10px 0;
}

.ingredients-list {
  list-style-type: none;
  padding-left: 0;
}

.ingredients-list li {
  margin-bottom: 5px;
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
