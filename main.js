

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
for (var i = 0; i < content.length; i++){
	if (i = "m"){
	
		console.log("theres an M!");
	}
	else{
		
	}
}


};

removeM('family');
removeM('memory');































