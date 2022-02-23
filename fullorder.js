class order{
    constructor(item){
        this.item=item;
        this.id=Math.floor(Math.random() *1000);
    }
}
  
// test ID order Generator 
// console.log(`{this.id}`) it will return random value 
module.exports=order;

