# MenuModel

## Attribut

| name | type
| --- | ---
| id | number
| name | string
| platList | Array : PlatModel
| ingredientList | Array : IngredientModel 

## Méthhodes

| name | params | return
| --- | --- | ---
| getId() | null | number 
| getName() | null | string 
| updateName() | name | void 
| addPlat() | plat : PlatModel | void
| removePlat() | platId | boolean
| addIngredient() | ingredient : Ingredient | void
| removeIngredient() | ingredientId | boolean
| getPrice() | null | float
| toString() | null | string




