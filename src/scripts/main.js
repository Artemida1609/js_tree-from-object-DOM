'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');
  const li = document.createElement('li');

  for (const item in data) {
    ul.textContent = item;
    element.appendChild(ul);

    if (Object.keys(item).length !== 0) {
      for (const itemChild in item) {
        li.textContent = itemChild;
        element.appendChild(li);

        if (Object.keys(itemChild).length !== 0) {
          for (const itemGrandChild in itemChild) {
            li.textContent = itemGrandChild;
            element.appendChild(li);
          }
        }
      }
    }
  }
}

createTree(tree, food);
