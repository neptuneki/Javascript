// 
(function(window){
	function Random(){}
	Random.prototype.generate = function(min,max){
		return Math.floor(Math.random()*(max-min)+min);
	};
	window.Random = new Random();
}(window));

(function(window){
	console.log(Random.generate(10,50));
	var map = document.querySelector('.map');
	function Food(width, height, color){
		this.width = width || 20;
		this.height = height || 20;
		this.color = color || 'yellow';
		this.x ='';
		this.y = '';
		this.element = document.createElement('div');
	}

	Food.prototype.init = function(map){
		var div = this.element;
		div.style.position = 'absolute';
		div.style.width = this.width+'px';
		div.style.height = this.height+'px';
		div.style.backgroundColor = this.color;
		map.appendChild(div);
		this.render(map);
	};

	Food.prototype.render = function(map){
		this.x = Random.generate(0, map.offsetWidth/this.width)*this.width;
		this.y = Random.generate(0, map.offsetHeight/this.height)*this.height;
		var div = this.element;
		div.style.left = this.x + "px";
		div.style.top = this.y + "px";
		console.log(this.x);
	};

	var food = new Food(20,20,'orange');
	food.init(map);
}(window));

// 
(function(window){
	function Random(){}
	Random.prototype.generate = function(min,max){
		// body... 
		return Math.floor(Math.random()*(max-min)+min);
	};
	window.random = new Random();
}(window));

(function(){
	console.log(random.generate(10,50));
}());
//
(function(window){

	function Random(){

	}
	Random.prototype.generate = function(argument){
		return Math.floor(Math.random()*10); 
	};

	window.random = new Random();
	
})(window);

	var a =random.generate();
	console.log(a);
(function(window){

	function Random(){

	}
	Random.prototype.generate = function(argument){
		return Math.floor(Math.random()*10); 
	};

	window.Random = Random;
	
})(window);

	var a =new Random();
	console.log(a.generate());
  
// 
(function(window){

	function Random(){

	}
	Random.prototype.generate = function(min,max){
		return Math.floor(Math.random()*(max-min)); 
	};

	window.Random = Random;
	
})(window);

	var a =new Random();
	console.log(a.generate(10,100));
  // 
(function(window){
	function Random(){}
	Random.prototype.generate = function(min,max){
		// body... 
		return Math.floor(Math.random()*(max-min)+min);
	};
	window.random = new Random();
}(window));

(function(){
	console.log(random.generate(10,50));
}());
 
