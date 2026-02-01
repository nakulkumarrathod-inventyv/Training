/// <reference path="./global.d.ts" />
// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * export function yourFunction(...) {
 *   ...
 * }
 */

export let timer = 12

export function cookingStatus(timer){
   if (timer === undefined) {
    return 'You forgot to set the timer.';
  }
  if (timer === 0) {
    return 'Lasagna is done.';
  }
  return 'Not done, please wait.';
}

export const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
export let avg

export function preparationTime(layers, avg = 2){
  return layers.length * avg;
}

export function quantities(layers){
  let noodles = 0;
  let sauce = 0;

  for (let layer of layers) {
    if (layer === 'noodles') {
      noodles += 50;
    } else if (layer === 'sauce') {
      sauce += 0.2;
    }
  }

  return { noodles, sauce };
}


export const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
export const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

export function addSecretIngredient(friendsList, myList){
  const secret = friendsList[friendsList.length - 1];
  myList.push(secret);
}

export const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

export let value
export function scaleRecipe(recipe, value){
   const factor = value / 2;
  const scaledRecipe = {};

  for (const key in recipe) {
    scaledRecipe[key] = recipe[key] * factor;
  }

  return scaledRecipe;
}
