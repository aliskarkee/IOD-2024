const basketballGame = {
    score: 0,
    fouls: 0, 
    freeThrow() {
        this.score++;
        return this;
    },
    basket() {
        this.score += 2;
        return this; 
    },
    threePointer() {
        this.score += 3;
        return this; 
    },
    incrementFoul() { 
        this.fouls++;
        return this; 
    },
    halfTime() {
        console.log(`Halftime score is ${this.score}, with ${this.fouls} fouls.`);
        return this; 
    },
    fullTime() { // Print final score and fouls
        console.log(`Final score is ${this.score}, with ${this.fouls} fouls.`);
        return this;
    }
};

// Example chaining
basketballGame.basket().freeThrow().incrementFoul().threePointer().halfTime().basket().fullTime();
