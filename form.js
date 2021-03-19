class Form{
    constructor(){
       this.input = createInput("Name");
       this.button = createButton('Play');
       this.greeting = createElement('h2');
       this.title = createElement('h2');
       this.reset = createButton('Reset');
    }
    hide() {
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("PONG GAME");
        this.title.position(width+50, height-400);
        this.title.style('font-size', '30px');
        this.title.style('color', 'red');
        this.input.position(width+50, height-250);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
        this.button.position(width+50, height-200);
        this.button.style('width', '100px');
        this.button.style('height', '25px');
        this.button.style('background', 'lightpink');
        this.reset.position(width+50, height-100);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');

        this.button.mousePressed(() => {
            this.input.hide();
            this.button.hide();
            player.name = this.input.value();
            playerCount += 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hello " + player.name)
            this.greeting.position(width+50, height-250);
            this.greeting.style('color', 'black');
            this.greeting.style('font-size', '30px');
        });

        this.reset.mousePressed(() => {
            player.updateCount(0);
            game.update(0);
        });

    }
}