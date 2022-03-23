class Message {
    static printMessage(text) {
        messageView.innerHTML = text;
    }

    static addMessage(text) {
        messageView.innerHTML += text;
    }
}

class Friend {
    constructor (name, maxHp, offense, speed, herb, herbPower) {
        this.name = name;
        this.type = "friend";
        this.maxHp = maxHp;
        this.hp = maxHp;
        this.liveFlag = true;
        this.offense = offense;
        this.speed = speed;
        this.herb = herb;
        this.herbPower = herbPower;

        this.command = "";
        this.target = "";
    }

    action() {
        if(this.hp > 0) {
            switch(this.command) {
                case "enemyCommand":
                    this.attack();
                    break;
                case "recoveryCommand":
                    this.recovery();
                    break;
                default:
                    Message.printMessage(this.name + "はボーっとした<br>");
            }
        }
    }

    attack() {
        if(this.target.liveFlag) {
            this.target.hp -= this.offense;

            if(this.target.hp < 0) {
                this.target.hp = 0;
            }

            Message.printMessage(this.name + "の攻撃<br>" + this.target.name + "に" + this.offense + "のダメージを与えた！<br>");
        }else {
            Message.printMessage(this.name + "の攻撃．．．<br>" + this.target.name + "は倒れている");
        }
    }
}
