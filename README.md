# Dev-Hw5
## Завдання
 У цьому домашньому завданні нам потрібно створити віддалений публічний репозиторій на GitHub та його локальну версію на нашому пристрої. У репозиторій потрібно додати папки з вихідним кодом програм, названим за принципом з д/з, та скріншотами пройдених тестів.

 ## Виконання 
 С самого початку ми ініціалізвуали наш проект і створіємо гілку ~master~ main, тому що, як було сказано на лекції:
 >Якщо у когось побачу гілку master то вам p:cursing_face:зd@

 > [!NOTE]
> Я десь бачив що гілка main має більш нейтральну назву, ніж master. Назва "master" має історично негативні конотації, пов'язані з рабством і колоніалізмом.

 Усі папки і файли потрібно додавати до репозиторію шляхом створення окремих гілок та їх злиття в головну гілку. І також потрібно додати це _README.md_ файл до кореня репозиторію.

## Код
```
git init
git remote add origin "git@github.com:VladB1l/Dev-Hw5.git"
git branch -M main
echo "# Dev-Hw5" >> README.md

git add .
git commit -m "Added README.md"
git push --set-upstream origin main

git branch Hw1
git checkout Hw1
git add Hw1
git commit -m "added Hw1 folder"
git push --set-upstream origin Hw1
git add .
git commit -m "added Hw1 Pdf"
git push --set-upstream origin Hw1

git checkout main
git branch Hw2
git branch Hw4
git checkout Hw2
git add .
git commit -m "added Hw2 folder"
git push --set-upstream origin Hw2

git checkout Hw4
git add .
git commit -m "added Hw4 folder"
git push --set-upstream origin Hw4

git checkout main
git merge Hw1
git merge Hw2
git merge Hw4
git commit -m "merged forks"
git push

git add .
git commit -m "Edited name of the folders"
git push
```
 ## Список домашніх робіт:
 - [Hw1](https://github.com/VladB1l/Dev-Hw5/tree/main/%40yasnooo_Hw1)
 - [Hw2](https://github.com/VladB1l/Dev-Hw5/tree/main/%40yasnooo_Hw2)
 - [Hw3](https://github.com/VladB1l/Dev-Hw5/tree/main/%40yasnooo_Hw4)

 ## Подяка
 Взагалі хотів подякувати за ініціативу у створенні цієї школи і усім менторам хто перевіряє роботи. 
