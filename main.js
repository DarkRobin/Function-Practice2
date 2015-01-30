

//1

var getName = function(person){
	return person.name;
};

console.log(getName({ name: 'Luisa', age: 25 }));

console.log('===================================');


//2

var totalLetters = function(total){
	// var combo = total.join("");
	// var strNum = combo.length;
	// return srtNum;
	return total.join("").length;

};

console.log(totalLetters(['javascript', 'is', 'awesome']));
console.log(totalLetters(['what', 'happened', 'to', 'my', 'function']));


console.log('===================================');


//3


var keyValue = function(key, value){
	var emptyObject = {};
	emptyObject[key] = value;
	return emptyObject;

};

console.log(keyValue('city', 'Denver'));

console.log('===================================');


//4

var negativeIndex = function(array, index){
	return array[array.length + index];

};


console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2));
console.log(negativeIndex(['jerry', 'sarah', 'sally'], -1));


console.log('===================================');


//5

var removeM = function(content){

	return content.replace(/m/g, "");

};

console.log(removeM('family'));
console.log(removeM('memory'));



console.log('===================================');



//6

var printObject = function(obj){
	
for (var prop in obj){
	console.log(prop + " is " + obj[prop]);
}


};

printObject({ a: 10, b: 20, c: 30 });
printObject({ firstName: 'pork', lastName: 'chops' });



console.log('===================================');

//7





var vowels = function(vowel){
var arr = ["a", "e", "i", "o", "u"]

return  _.filter(vowel, function(elament){

	return elament === arr  ;
});



};

console.log(vowels('alabama'));
console.log(vowels('What lets in youth?'));






































