class Warrior {
    exp;
    achiev;

    constructor() {
        this.exp = this.experience();
        this.achiev = this.achievements();
    }

    level() {
        return Math.floor(this.exp / 100);
    }

    experience() {
        if (this.exp === undefined) {
            this.exp = 100;
        }
        if (this.exp > 10000) {
            this.exp = 10000;
        }
        return this.exp;
    }

    rank() {
        let ranks = ["Pushover", "Novice", "Fighter", "Warrior", "Veteran", "Sage", "Elite", "Conqueror", "Champion", "Master", "Greatest"];
        return ranks[Math.floor(Math.floor(this.exp / 100) / 10)];
    }

    achievements() {
        if (this.exp === 100) {
            this.achiev = [];
        }
        return this.achiev;
    }

    training([name, reward_exp, min_lvl]) {
        let lvl = Math.floor(this.exp / 100);
        if (lvl >= min_lvl) {
            this.exp += reward_exp;
            this.experience();
            this.achiev.push(name);
            return name
        } else {
            return "Not strong enough";
        }
    }

    battle(lvl_enemy) {
        let lvl = Math.floor(this.exp / 100);
        let msg;
        if (1 <= lvl_enemy && lvl_enemy <= 100) {
            if (lvl_enemy === lvl) {
                this.exp += 10;
                msg = "A good fight";
            } else if (lvl_enemy === lvl - 1) {
                this.exp += 5;
                msg = "A good fight";
            } else if (lvl_enemy <= lvl - 2) {
                this.exp += 0;
                msg = "Easy fight";
            } else if (lvl_enemy > lvl) {
                if (Math.floor(lvl / 10) < Math.floor(lvl_enemy / 10) && lvl_enemy >= lvl + 5) {
                    msg = "You've been defeated";
                }
                else {
                    let diff = lvl_enemy - lvl;
                    this.exp += 20 * diff * diff;
                    msg = "An intense fight";
                }
            }
        }
        else {
            msg = "Invalid level";
        }
        this.experience();
        return msg;
    }
}



let goku = new Warrior();
console.log(goku.level());
console.log(goku.experience());
console.log(goku.rank());
console.log(goku.achievements());

console.log(goku.training(["Do ten push-ups", 95, 1]));
console.log(goku.experience());
console.log(goku.battle(1));
console.log(goku.experience());
console.log(goku.level());
console.log(goku.battle(3));
console.log(goku.experience());
console.log(goku.level());
console.log(goku.training(["Survive one night at the Forest of Death", 170, 2]));
console.log(goku.experience());
console.log(goku.battle(2));
console.log(goku.level());
console.log(goku.experience());

console.log(goku.training(["Defeated Chuck Norris", 9000, 1]));
console.log(goku.level());
console.log(goku.battle(0));
console.log(goku.training(["Defeated Chuck Norris", 9000, 2]));
console.log(goku.experience());
console.log(goku.achievements());
console.log(goku.rank());