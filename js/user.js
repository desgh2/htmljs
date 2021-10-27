var User = class {

    /**
     * [constructor description]
     * @param  {[type]} name       [description]
     * @param  {[type]} surname    [description]
     * @param  {[type]} age        [description]
     * @param  {[type]} profession [description]
     * @param  {[type]} languages  [description]
     * @param  {[type]} car        [description]
     * @return {[type]}            [description]
     */
    constructor(name, surname, age, profession, languages, car) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.profession = profession;
        this.languages = languages;
        this.car = car;
    }

    fullName() {
        return this.name + this.surname;
    }

    profi() {
        return 'Я знаю ' + this.languages.length + ' языка программирования';
    }

    myCar() {
        return 'У меня машина ' + this.car;
    }


}

var user = new User('Руслан ', 'Пугач ', 29, 'Web dev', ['php', 'js', 'vuejs'], 'VW');
user.fullInfo = user.fullName() + ', '+ 'мне '+ user.age + ' лет, ' + user.profi() + ', ' + user.myCar();
/*block.innerHTML = user.fullName();
block.innerHTML = user.profi();
block.innerHTML = user.myCar();*/
