/* Задача 1. Вводиться кількість пасажирів. 
Вивести:
скільки потрібно автобусів (кожен автобус на 20 місць)
скільки пляшок води (кожному пасажиру 2 пляшки)
скільки бутербродів (кожному пасажиру 3 бутерброди)
 */
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            passengers: null,
            busPassengers: 20,
            bottlesWater: 2,
            sandwiches: 3,
        }
    },

    computed: {
        countBus() {
            return Math.ceil(this.passengers / this.busPassengers)
        },
        countBottlesWater() {
            return this.passengers * this.bottlesWater
        },
        countSandwiches() {
            return this.passengers * this.sandwiches
        },
    },
})

app.mount("#app")
