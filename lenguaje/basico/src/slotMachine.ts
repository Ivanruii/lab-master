console.log(`%c5. Slot Machine`, 'color: grey; font-weight: bold; font-size: larger;')

class SlotMachine {
    private coins: number = 0;

    play() {
        this.coins++;
        const result = this.generateRandomBooleans();

        if (result.every(value => value)) {
            console.log(`%cCongratulations!!! You won ${this.coins} coins!!`, 'color: green; font-weight: bold;');
            this.coins = 0;
        } else {
            console.log('%cGood luck next time!!', 'color: red; font-weight: bold;');
        }
    }

    private generateRandomBooleans(): boolean[] {
        return Array.from({ length: 3 }, () => Math.random() < 0.5);
    }
}

// Test
const machine1 = new SlotMachine();
machine1.play();
machine1.play();
machine1.play();
machine1.play();
machine1.play();