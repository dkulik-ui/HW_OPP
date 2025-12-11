# Task 3 - Заповніть пропущені ідентифікатори, вказавши у коментарях пояснення.
![task](./data/_media/Screenshot%202025-12-11%20at%2021.02.55.png)


## Пояснення 

### Class Base має прямий доступ до всіх своїх членів, так як він не унаслідує жоден інший клас. отже тільки наступне
![proofBase](./data/_media/Screenshot%202025-12-11%20at%2021.08.22.png)


### Class Derived має праямий доступ до всіх своїх членів, а також до членів Class Base з такими модифікаторами доступу, як public i protected, так як Class Derived унаслідує protected Class Base, а значить всі унаслідовані public стають протектед.

### В TS можна унаслідувати тільки public клас. Тому тримаємо тільки в умі.
![proofDerived](./data/_media/Screenshot%202025-12-11%20at%2021.16.08.png)



### Object Base має прямий доступ тільки то public членів, так як в ньому назначено новий прототип класу.
![proofBaseObj](./data/_media/Screenshot%202025-12-11%20at%2021.19.53.png)


### Object Derived має прямий доступ тільки то public членів, як і Base, так як в ньому назначено новий прототип класу.
![proofDerivedObj](./data/_media/Screenshot%202025-12-11%20at%2021.20.03.png)


## Результати
![proofTaskThree](./data/_media/Screenshot%202025-12-11%20at%2021.26.32.png)