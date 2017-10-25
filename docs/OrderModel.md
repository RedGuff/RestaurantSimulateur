# OrderModel

## Attribut

| name | type
| --- | ---
| id | number
| clientId | number
| employeeId | number
| date | number
| totalPrice | number
| state | number
| menuList | Array : MenuModel
| ingredientList | Array : IngredientModel
| platList | Array : PlatModel

## Méthodes

| name | params | return
| --- | --- | ---
| getClientId() | null | number 
| getMenuId() | null | string 
| getEmployeeId() | null | float 
| getDate() | null | void
| getTotalPrice() | null | void
| getState() | null | void
| updateState() | null | void
| addMenu() | menu : MenuModel | void
| removeMenu() | menuId | void
| addIngredient() | ingredient : IngredientModel | void
| removeIngredient() | ingredientId | void
| addPlat() | plat : PlatModel | void
| removePlat() | platId | void
