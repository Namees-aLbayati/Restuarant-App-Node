const fullorder = require('./fullorder');
const item = require('./item');
const items = [
    new item('Burger', "Larg Size", 5.76),
    new item('pizza', "Medium Size", 9.15),
    new item('Cake','Small',3.8),
    new item('Tacco','Larg',2.5)
]
class Resturant {
    constructor(name) {
        this.name = name;
        this.basket = [];
        this.calculater = 0;

    }
    takeOrder(order) {

        this.pay = order.item.price;
        this.basket.push(order)



        this.calculater += this.pay;

        this.print()

        console.log(`Customer add New Iteam to his bascket: ${order.item.title} ======> SIZE ${order.item.size} \n=========\n`)
    } print() {
        console.log(`paid: ${this.calculater}`)
    }

    prepairOrder() {
        const timing = setInterval(() => {
            console.log(this.basket.length)
            if (this.basket.length === 0) {
                clearInterval(timing)
            } else {
                const shifting=this.basket.shift();

                console.log(`# ID: ${shifting.id} ====> ${shifting.item.title} has been Prpaired `)
            }


        }, 1000)
    }

}
const KFC = new Resturant("KFC")
// console.log(items)
const orders = items.map(item => new fullorder(item))
const order = orders.forEach(order => KFC.takeOrder(order))
KFC.prepairOrder()

