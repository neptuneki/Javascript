(function(){
	var elements = [];

	function Food (x, y, height, width, color){
		this.x = x || 0;
		this.y = y || 0;
		this.height = height || 20;
		this.width = width || 20;
		this.color = color || 'blue';
	}

	Food.prototype.init = function(map){
		remove();
		var div = document.createElement('div');
		map.appendChild(div);
		div.style.height = this.height+'px';
		div.style.width = this.width+'px';
		div.style.backgroundColor = this.color;
		div.style.position = 'absolute';
		this.x = parseInt(Math.random()*(map.offsetWidth/this.width)) * this.width;
		this.y = parseInt(Math.random()*(map.offsetHeight/this.height)) * this.height;
		div.style.left = this.x+'px';
		div.style.top = this.y+'px';
		elements.push(div);
	};

	function remove(){
		for(var i=0; i<elements.length; i++){
			var ele = elements[i];
			ele.parentNode.removeChild(elements[i]);
			elements.splice(i,1);
		}
	}



	window.Food = Food;
}());


(function(){
	var elements = [];
	function Snake(width, height, direction){
		this.width = width || 20;
		this.height = height || 20;
		this.body = [
			{x:3, y:2, color:'green'},
			{x:2, y:2, color:'pink'},
			{x:1, y:2, color:'pink'},

		];
		this.direction = direction || 'right';
	}

	Snake.prototype.init = function(map){
		remove();
		var obj = this.body;
		for(var i=0; i<this.body.length; i++){
			var div = document.createElement('div');
			map.appendChild(div);
			div.style.position = 'absolute';
			div.style.width = this.width+'px';
			div.style.height = this.height+'px';
			div.style.left = obj[i].x*this.width+'px';
			div.style.top = obj[i].y*this.height+'px';
			div.style.backgroundColor = obj[i].color;
			elements.push(div);
		}
	}

	function remove(){
		var i = elements.length-1;
		for(;i>=0;i--){
			var ele = elements[i];
			ele.parentNode.removeChild(elements[i]);
			elements.splice(i,1);
		}
	}

	Snake.prototype.move = function(fd){
		var i = this.body.length -1;
		for(;i>0;i--){
			this.body[i].x = this.body[i-1].x;
			this.body[i].y = this.body[i-1].y;
		} 

		switch (this.direction) {
			case 'right':this.body[0].x++;break;
			case 'left':this.body[0].x--;break;
			case 'up':this.body[0].y--;break;
			case 'down':this.body[0].y++;break;
			
		}
	};

	window.Snake = Snake;
})();


(function(){
	function Game(map){
		this.food = new Food();
		this.snake = new Snake();
		this.map = map;
		that = this;
	}
	Game.prototype.init = function(){
		this.food.init(this.map);
		this.snake.init(this.map);

		setInterval(function(){
			this.snake.move(this.food);
			this.snake.init(this.map);

		}.bind(that),150);
	};

	window.Game = Game;

})();

var game = new Game(document.getElementsByClassName('map')[0]);
//game.init();
