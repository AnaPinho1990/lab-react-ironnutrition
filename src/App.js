import React, { useState } from 'react';
import './App.css';
import foods from './foods.json';
import FoodBox from './Components/FoodBox';
import AddFoodForm from './Components/AddFoodForm';
import Search from './Components/Search';

function App() {
  const [foodList, setFoodList] = useState(foods);
  const [searchFood, setSearchFood] = useState(foods);

  const addNewFood = (newFood) => {
    const updatedFood = [...foodList, newFood];
    setFoodList(updatedFood);
    setSearchFood(updatedFood);
  };

  const deleteFood = (foodName) => {
    const filteredFood = foodList.filter((food) => {
      return food.name !== foodName;
    });
    setSearchFood(filteredFood);
    setFoodList(filteredFood);
  };

  const searchFilter = (search) => {
    let filteredFood = foodList.filter((food) =>
      food.name.toLowerCase().includes(search.toLowerCase())
    );
    setSearchFood(filteredFood);
  };

  return (
    <div className="App">
      <h2>Food List</h2>
      <AddFoodForm addNewFood={addNewFood} />
      <Search searchFilter={searchFilter} />

      {searchFood.map((element) => {
        return (
          <>
            <FoodBox food={element} clickToDelete={deleteFood} />
          </>
        );
      })}
    </div>
  );
}

export default App;
