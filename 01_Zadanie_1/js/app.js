/* Zadanie 1
Stwórz funkcję (Arrow function) o nazwie getNumbers, która przyjmuje jako parametr tablicę z liczbami. Następnie mnoży każdy element tablicy przez dwa i zwraca wynik.

Spróbuj posłużyć się jedną z metod (forEach, map lub reduce). */

arr1 = [1, 2, 3];

const getNumbers = (array) => {
	const multiply = array.map(function (element) {
		return element * 2;
	});
	console.log(multiply);
};

getNumbers(arr1);
