<template>
    <div class="recipe-card">
      <img :src="recipe.image" alt="Recipe Image" class="recipe-image" />
      <div class="recipe-details">
        <h3>{{ recipe.title }}</h3>
        <p>{{ truncateText(recipe.summary, 100) }}</p>
        <router-link :to="{ name: 'RecipeDetails', params: { id: recipe.id } }" class="view-details-button">
          View Details
        </router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RecipeCard',
    props: {
      recipe: {
        type: Object,
        required: true
      }
    },
    methods: {
      truncateText(text, length) {
        if (text.length <= length) {
          return text;
        }
        return text.substring(0, length) + '...';
      }
    }
  }
  </script>
  
  <style scoped>
  .recipe-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    margin: 16px;
    width: 300px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.2s;
  }
  
  .recipe-card:hover {
    transform: scale(1.05);
  }
  
  .recipe-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .recipe-details {
    padding: 16px;
  }
  
  .recipe-details h3 {
    margin: 0 0 8px;
    font-size: 1.5em;
    color: #333;
  }
  
  .recipe-details p {
    margin: 0 0 16px;
    color: #666;
  }
  
  .view-details-button {
    display: inline-block;
    padding: 8px 16px;
    background-color: #42b983;
    color: white;
    border-radius: 4px;
    text-decoration: none;
    text-align: center;
  }
  
  .view-details-button:hover {
    background-color: #369e72;
  }
  </style>
  