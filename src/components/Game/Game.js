import React from 'react';
import { useState, useEffect } from 'react';
import { FlexBox } from './style';

const items = [
  {
    name: '햄버거',
    src: require('../../img/burger.jpg'),
  },
  {
    name: '볶음밥',
    src: require('../../img/fried-rice.jpg'),
  },
  {
    name: '파스타',
    src: require('../../img/pasta.jpg'),
  },
  {
    name: '라멘',
    src: require('../../img/ramen.jpg'),
  },
];

const Game = () => {
  const [foods, setFoods] = useState([]);
  const [displays, setDisplays] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    items.sort(() => Math.random() - 0.5);

    setFoods(items);
    setDisplays([items[0], items[1]]);
  }, []);

  const clickHandler = (food) => () => {
    if (foods.length <= 2) {
      if (winners.length === 0) {
        setDisplays([food]);
      } else {
        let updatedFood = [...winners, food];
        setFoods(updatedFood);
        setDisplays([updatedFood[0], updatedFood[1]]);
        setWinners([]);
      }
    } else if (foods.length > 2) {
      setWinners([...winners, food]);
      setDisplays([foods[2], foods[3]]);
      setFoods(foods.slice(2));
    }
  };

  return (
    <FlexBox>
      <h1 className="title">Food Worldcup</h1>
      {displays.map((display) => {
        return (
          <div
            className="flex-1"
            key={display.name}
            onClick={clickHandler(display)}
          >
            <img className="food-img" src={display.src} alt={display.name} />
            <div className="name">{display.name}</div>
          </div>
        );
      })}
    </FlexBox>
  );
};

export default Game;
