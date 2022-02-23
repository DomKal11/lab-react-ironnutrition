import { useState } from 'react';
import food from '../foods.json';
import FoodBox from './FoodBox';
import { Button, Row, Divider } from 'antd';
import AddFoodForm from './AddFoodForm';
import Search from './Search';

function SimpleList() {
  const [emptyArray, setEmptyArray] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [foods, setFoods] = useState(food);
  const [foodsData, setFoodsData] = useState(food);

  const addNewFood = (newFood) => {
    const updatedFoods = [...foods, newFood];
    const updatedFoodsData = [...foodsData, newFood];

    setFoods(updatedFoods);
    setFoodsData(updatedFoodsData);
  };

  const filterFoodList = (str) => {
    let filteredFoods;

    if (str === '') {
      filteredFoods = foodsData;
    } else {
      filteredFoods = foodsData.filter((food) => {
        console.log('Comparing:', food.name.toLowerCase(), str.toLowerCase());
        return food.name.toLowerCase().startsWith(str.toLowerCase());
      });
    }

    setFoods(filteredFoods);
  };

  const deleteFood = (name) => {
    const deletedFood = [...foodsData];
    const resultArr = deletedFood.filter(check);

    function check(result) {
     return result.name !== name;
    }

    setFoods(resultArr);
    setFoodsData(resultArr);


    if(resultArr.length < 1){
        setEmptyArray(!emptyArray);
    }
  };

  const toggleShow = () => {
    setShowButton(!showButton);
    console.log(showButton);
  };

  return (
    <div className="App">
      {showButton && <AddFoodForm addFood={addNewFood} />}

      <Button onClick={toggleShow}>
        {showButton ? 'Hide form' : 'Add new food'}{' '}
      </Button>

      <Search filterFood={filterFoodList} />

      <Divider>Food List</Divider>

      <Row style={{ width: '100%', justifyContent: 'center' }}>
      {emptyArray && <div><b>Nothing is here!</b></div>}
        {foods.map((item, i) => {
          return <FoodBox key={i} data={item} index={i} delete={deleteFood} />;
        })}
      </Row>
    </div>
  );
}

export default SimpleList;
