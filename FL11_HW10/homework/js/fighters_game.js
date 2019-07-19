class Fighter {
    constructor(paramFighter){
        let _hp = paramFighter.hp;
        this.getName = this.getName.bind(paramFighter);
        this.getDamage = this.getDamage.bind(paramFighter);
        this.getAgility = this.getAgility.bind(paramFighter);
        this.getHealth = function () {
            return _hp;
        };
        this.setHealth = function (hp) {
            if (hp < 0) {
                hp = 0;
            }

            let maxHp = 100;
            
            if (hp > maxHp) {
                hp = maxHp;
            }

            _hp = hp;
        }
        this.history = {
            wins: 0,
            losses: 0 
        }
    }

    getName () {
        return this.name;
    }

    getDamage () {
        return this.damage
    }

    getAgility () {
        return this.agility;
    }

    addWin () {
        this.history.wins++;
    }

    addLoss () {
        this.history.losses++;
    }

    attack (fighterInstance) {
        let successMsg = `${this.getName()} make ${this.getDamage()} damage to ${fighterInstance.getName()}`;
        let failMsg = `${this.getName()} attack missed`;
        let maxAgility = 100;
        let probability = (maxAgility - fighterInstance.getAgility()) / maxAgility;
        let isSuccess = Math.random() <= probability;

        if (isSuccess){
            fighterInstance.dealDamage(this.getDamage());

            if (fighterInstance.getHealth() === 0) {
                fighterInstance.addLoss();
                this.addWin();
            }
        }

        if(isSuccess) {
            console.log(successMsg);
        } else {
            console.log(failMsg);
        }
    }

    logCombatHistory () {
        return `Name: ${this.getName()}, Wins: ${this.history.wins}, Losses: ${this.history.losses}`;
    }

    heal (hl) {
        let hp = this.getHealth() + hl;
        this.setHealth(hp);  
    }

    dealDamage (dmg) {
        let hp = this.getHealth() - dmg;
        this.setHealth(hp);
    }

    logDeath () {
        console.log(`${this.getName()} is dead and can't fight`);
    }
}


let fighter1 = new Fighter({name: 'John', damage: 10, hp: 100, agility: 90});
let fighter2 = new Fighter({name: 'Nick', damage: 80, hp: 100, agility: 40});

function battle (firstFighter, secondFighter) {
    let checkFirstFighter = firstFighter.getHealth();
    let checkSecondFighter = secondFighter.getHealth();
    let isBattleFinished = false;

    if(checkFirstFighter === 0){
       return firstFighter.logDeath();
    } 

    if(checkSecondFighter === 0){
        return secondFighter.logDeath();
    }

    while (!isBattleFinished) {
        firstFighter.attack(secondFighter);

        if (secondFighter.getHealth() === 0){
            isBattleFinished = true;
            break;
        }

        secondFighter.attack(firstFighter);

        if (firstFighter.getHealth() === 0){
            isBattleFinished = true;
            break;
        }
    }
}
battle(fighter1, fighter2);