

var Stars = class {

    constructor(count) {
        this.count = count
    }

    random() {
        let min = Math.ceil(1);
        let max = Math.ceil(1800);
        return Math.floor(Math.random() * max) + min;
    }

    render() {
        var stars = elementById('solar');

        if (this.count > 0) {
            for (var i = 0; i < this.count; i++) {
                var new_star = document.createElement('div');
                new_star.classList.add('star');
                new_star.style.width = '1px';
                new_star.style.height = '1px';
                new_star.style.display = 'block';
                new_star.style.top = this.random()+'px';
                new_star.style.left = this.random()+'px';
                new_star.style.background = '#FFFFFF';
                document.body.insertBefore(new_star, stars);
            }

        }


    }

}
