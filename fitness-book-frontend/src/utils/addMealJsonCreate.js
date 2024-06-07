export const createAddMealJson = (nutrition, ingredients, c) => {
  const category = c.category
  const planName = c.planName
  const instructions = c.instructions

  const mealPlan = {
    planName: planName,
    category: category,
    recipes: ingredients.toString(),
    nutritions: nutrition.toString(),
    instructions: instructions,
    imageData: c.photos,
  }

  return mealPlan
}
