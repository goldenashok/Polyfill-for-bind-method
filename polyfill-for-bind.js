let name = {
	'firstName' : 'Ashok',
	'lastName' : 'Kumar'
	};
let printName = function(state, country, town) { 
		console.log(`${this.firstName} ${this.lastName} ${state} ${country} ${town}`);
	}
Function.prototype.mybind = function(...arg){
	let obj = this,
	param = arg.slice(1);
		return function(...args2){
			obj.apply(arg[0], [...param, ...args2]);
		}
	}
	
	let printMyName2 = printMyName.mybind(name, 'Tamil Nadu');
	printMyName2("india", "salem");
