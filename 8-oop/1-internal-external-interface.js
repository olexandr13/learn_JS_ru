function CoffeeMachine(power) {
	this.waterAmount = 0; // количество воды в кофеварке
	console.log('Создана кофеварка мощностью: ' + power + ' ватт' );

	// физическая константа - удельная теплоёмкость воды для getBoilTime
  	var WATER_HEAT_CAPACITY = 4200;
  	var timerId;
	var self = this;

  	// расчёт времени для кипячения
  	function getBoilTime() {
		return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power;
   	}

  	// что делать по окончании процесса
  	function onReady() {
    	console.log('Кофе готов');
  	}

  	this.run = function() {
    	// setTimeout - встроенная функция,
    	// она запустит onReady через getBoilTime() миллисекунд
    	timerId = setTimeout(onReady, getBoilTime());
  	};

  	this.stop = function function_name(argument) {
  		clearTimeout(timerId);
  	}
}

// создать кофеварку
var coffeeMachine = new CoffeeMachine(100000);

// залить воды
coffeeMachine.waterAmount = 200;

coffeeMachine.run();
