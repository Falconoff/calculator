
let operationUser = new Operation("val1", "val2", "rez");
/* определяем ф-цию-конструктор с тремя параметрами*/
function Operation(val1Holder, val2Holder, rezHolder) {

	//сохраняем расположение трёх элементов по Id
	this.val1Hldr = document.getElementById(val1Holder);
	this.val2Hldr = document.getElementById(val2Holder);
	this.rezHldr = document.getElementById(rezHolder);


//инициализируем переменные с 0 пока ячейки ввода пустые
	this.value1 = 0;
	this.value2 = 0;
	this.rez = 0;

//получаем значения из ячеек с проверкой числового типа данных
	this.initVars = function() {
		this.value1 = parseFloat(this.val1Hldr.value);
		this.value2 = parseFloat(this.val2Hldr.value);
	};

//отображает сообщение: результат вычисления или предупреждение
//вызывается каждый раз, когда необходимо отобразить сообщение на странице	
	this.displayRez = function() {
		this.rezHldr.value = this.rez;
	};

//проверка правильности введённого значения; вызывается в событии oninput
	this.validateNmbr = function() {

		//регулярное выражение: вводятся только цифры, точка
		let pattern = new RegExp("^[0-9]{0,5}[\.]?[0-9]{0,5}$");
		//последний введённый, но запрещённый символ будет удалён
		if(!(pattern.test(this.val1Hldr.value))) {
						this.val1Hldr.value = this.val1Hldr.value.substr(0,this.val1Hldr.value.length-1);
		}
		/* дальше 2 часть */
		if(!(pattern.test(this.val2Hldr.value))) {
			this.val2Hldr.value = this.val2Hldr.value.substr(0,this.val2Hldr.value.length-1);
		};
	};

	// суммируем по onclick
	this.getSumm = function() {
		//берём значения методом initVars()
		this.initVars();
		//проверяем не пустые ли ячейки ввода чисел. Если оба числа есть, тогда суммируем
		this.rez = ((""+this.val1Hldr.value=="") || (""+this.val2Hldr.value=="")) ? "введите числа" : this.value1 + this.value2;
		this.displayRez();
	};
	// умножаем по onclick
	this.getProd = function() {
		this.initVars();
		this.rez = ((""+this.val1Hldr.value=="") || (""+this.val2Hldr.value=="")) ? "введите числа" : this.value1 * this.value2;
		this.displayRez();
	};
	// вычитаем по onclick
	this.getDiff = function() {
		this.initVars();
		this.rez = ((""+this.val1Hldr.value=="") || (""+this.val2Hldr.value=="")) ? "введите числа" : this.value1 - this.value2;
		this.displayRez();
	};
	// делим по onclick
	this.getDiv = function() {
		this.initVars();
		this.rez = ((""+this.val1Hldr.value=="") || (""+this.val2Hldr.value=="")) ? "введите числа" : this.value1 / this.value2;
		this.displayRez();
	};
	this.delValues = function() {
		this.val1Hldr.value = "";
		this.val2Hldr.value = "";
		this.rezHldr.value = "";
	};

}