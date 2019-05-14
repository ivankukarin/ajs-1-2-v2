'use strict';

let arrayPrices = [200, 550, 4000, 23, 58, 5000, 485, 711];
let minGamePoints = 10000;
let strings = ["Ваш баланс"];


const sum = () => 
	{
	let sum = 0;
	for (let value of arrayPrices) 
		{sum += value};
	console.log(sum);
	return sum;
	};



const bonus = () => {
	if (sum() > minGamePoints) {
	return (Math.round(sum() * 5 /100)) }
	
	console.log(bonus());
	
	};

bonus();

const formatGamePoints = (strings, array) =>
	
	{
	const yourBalance = strings[0];
	
	let num2str;
    let n = Math.abs(bonus) % 100; 
    let n1 = n % 10;
    let textForms = ["балл", "балла", "баллов"];
    if (n > 10 && n < 20) { num2str = textForms[2]; };
    if (n1 > 1 && n1 < 5) { num2str = textForms[1]; };
    if (n1 == 1) { num2str = textForms[0]; }

    return `${yourBalance}${bonus} ${num2str}`;
}

const output = formatGamePoints`Ваш баланс: ${arrayPrices}`;
console.log(output);


