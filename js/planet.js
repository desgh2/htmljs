/**
 * [Planet description]
 * @type {[type]}
 */
var Planet = class {

    /**
     * [constructor description]
     * @param  {[type]} name   название планеты
     * @param  {[type]} image картинка планеты
     * @param  {[type]} координаты по Х планеты
     * @param  {[type]} координаты по У планеты
     * @param  {[bool]} показ планеты
     * @return {[type]}        [description]
     */
    constructor(id, block, name, image, axisX, axisY, width, height, show) {
        //свойство || член класса
        this.id = id;
        this.block = block;
        this.name = name;
        this.image = image;
        this.axisX = axisX;
        this.axisY = axisY;
        this.width = width;
        this.height = height;
        this.show = show;
    }
    /**
     * Отрисовка планет
     * @return {[type]} [description]
     */
    render() {
        var block = elementById('solar');
        /**
         * Создание элемента для планеты
         * @type html div
         */
        var planetBlock = document.createElement("div"); //создаем html tag div
        planetBlock.classList.add(this.block); //задаем класс диву
        planetBlock.innerHTML = '<img src="'+this.image+'">'; //вставляем картинку
        planetBlock.style.width = this.width+'px'; //ширина блока
        planetBlock.style.height = this.height+'px'; //высота блока
        planetBlock.style.top = this.axisX+'px'; //координаты Х блока
        planetBlock.style.left = this.axisY+'px'; //координаты У блока
        planetBlock.style.display = this.show ? 'block' : 'none';
        document.body.insertBefore(planetBlock, block); //вставляем созданый блок перед дивом с id solar
    }
}
