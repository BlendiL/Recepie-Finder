<template>
  <div class="favorites-container">
    <h2>Favorite Recipes</h2>
    <div v-if="favorites.length" class="favorites-list">
      <div v-for="recipe in favorites" :key="recipe.uri" class="favorite-card">
        <img :src="recipe.image" :alt="recipe.label" class="favorite-image" />
        <h3>{{ recipe.label }}</h3>
        <div class="favorite-actions">
          <button @click="viewDetails(recipe)" class="mybutton1">View Details</button>
          <button @click="removeFromFavorites(recipe)" class="mybutton1 remove-button">Remove from Favorites</button>
        </div>
      </div>
    </div>
    <p v-else>No favorite recipes yet.</p>
  </div>
</template>

<script>
export default {
  name: 'RecipeFavorites',
  data() {
    return {
      favorites: []
    };
  },
  created() {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    this.favorites = storedFavorites;
  },
  methods: {
    viewDetails(recipe) {
      this.$router.push({ name: 'RecipeDetails', params: { recipe } });
    },
    removeFromFavorites(recipe) {
      let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
      favorites = favorites.filter(fav => fav.uri !== recipe.uri);
      localStorage.setItem('favorites', JSON.stringify(favorites));
      this.favorites = favorites;
      alert('Recipe removed from favorites!');
    }
  }
};
</script>

<style scoped>
.favorites-container {
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

.favorites-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  margin-top: 20px;
}

.favorite-card {
  background: rgba(255, 255, 255, 0.8); /* Transparent white background */
  border: 1px solid #0f0a0a;
  border-radius: 8px;
  padding: 20px;
  width: 300px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  text-align: center;
}

.favorite-card:hover {
  transform: translateY(-5px);
}

.favorite-card h3 {
  margin: 10px 0;
  font-size: 1.5em;
  color: #333;
}

.favorite-card img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 10px;
}

.favorite-actions {
  display: flex;
  flex-direction: column;
  align-items: center;
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

.remove-button {
  background-color: #dc3545;
}

.remove-button:hover {
  background-color: #c82333;
}

.no-recipes-message {
  font-size: 2.0em;
  margin-top: 20px;
  color: #f2f7f2;
  text-align: center;
}
</style>
