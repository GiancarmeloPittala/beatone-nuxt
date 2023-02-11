<template>
  <!-- Card effect  inspired by this dribble (https://dribbble.com/shots/4579038-Foodiefit-Interaction-studio-included) -->
  <div class="grid md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
    <div class="card">
      <img class="card-image"
        src="http://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/51137579.jpg?tr=w-414,">
      <div class="card-footer">
        <p class="card-text">RECIPE</p>
        <h3 class="card-title">Jumbo fish fingers</h3>
        <p class="card-text">by
          <span class="card-author">Jamie Oliver</span>
        </p>
      </div>
    </div>

    <div class="card">
      <img class="card-image"
        src="http://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/48349911.jpg?tr=w-414,">
      <div class="card-footer">
        <p class="card-text">RECIPE</p>
        <h3 class="card-title">Strawberry buckwheat pancakes</h3>
        <p class="card-text">by
          <span class="card-author">Jamie Oliver</span>
        </p>
      </div>
    </div>

    <div class="card">
      <img class="card-image"
        src="http://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/48349973.jpg?tr=w-414,">
      <div class="card-footer">
        <p class="card-text">RECIPE</p>
        <h3 class="card-title">Squash & sausage risotto</h3>
        <p class="card-text">by
          <span class="card-author">Jamie Oliver</span>
        </p>
      </div>
    </div>

    <div class="card">
      <img class="card-image"
        src="https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/94741158.jpg?tr=w-400">
      <div class="card-footer">
        <p class="card-text">RECIPE</p>
        <h3 class="card-title">Summer tagliatelle</h3>
        <p class="card-text">by
          <span class="card-author">Jamie Oliver</span>
        </p>
      </div>
    </div>

    <div class="card">
      <img class="card-image"
        src="https://img.jamieoliver.com/jamieoliver/recipe-database/xtra_med/92507789.jpg?tr=w-400">
      <div class="card-footer">
        <p class="card-text">RECIPE</p>
        <h3 class="card-title">Amazing tomato curry</h3>
        <p class="card-text">by
          <span class="card-author">Jamie Oliver</span>
        </p>
      </div>
    </div>
    
  </div>
</template>


<style>

.card {
  position: relative;
  height: 370px;
  width: 100%;
  background: white;
  border-radius: 3px;
  transition: 0.4s all ease-in-out;
  z-index: 1;
  overflow: hidden;
  box-shadow: 5px 4px 15px rgba(196, 196, 196, 0.4);

  cursor: pointer;
}
.card-image {
  position: absolute;
  top: 0;
  height: 240px;
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  z-index: -1;
  transition: 0.4s all ease-in-out;
}
.card-footer {
  position: absolute;
  width: 100%;
  bottom: 0;
  height: 130px;
  padding: 20px 20px;
  box-sizing: border-box;
}
.card-title {
  font-family: "Grenze", serif;
  font-size: 18px;
  line-height: 21px;
  margin-bottom: 10px;
  letter-spacing: 0.04em;
}
.card-text {
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  margin-bottom: 5px;
  line-height: 14px;
  letter-spacing: 0.07em;
}
.card-text:last-child {
  letter-spacing: unset;
}
.card-text .card-author {
  font-weight: 500;
  font-size: 16px;
  font-style: italic;
  color: burlywood;
  text-transform: capitalize;
}
.card:hover {
  height: 410px;
  transition: 0.4s all cubic-bezier(0.28, 0.01, 0.3, 1.02) 0.2s;
  box-shadow: 20px 25px 30px rgba(0, 0, 0, 0.25);
}
.card:hover .card-image {
  transition: 0.4s all cubic-bezier(0.28, 0.01, 0.3, 1.02) 0.2s;
  height: 100%;
  opacity: 0.3;
}

</style>