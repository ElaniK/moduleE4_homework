class KitchenTools {
    constructor(name, power, option){
        this.name = name;
        this.option = option;
        this.power = power;
    }
    pwr(power){
        this.power = power;
        console.log(`The power of ${this.name} is ${this.power} v`);
    }
    on_off(option){
        if (option == 'on') {
            console.log(`${this.name} is turn on`)
        }else {
            console.log(`${this.name} is turn off`)
        }
    } 
}

class Toaster extends KitchenTools{
    constructor(name, power, option, lable){
        super(name, power, option);
        this.lable = lable;
        console.log(`${this.name} made by ${this.lable}`)
    } 
}

class Microwave extends KitchenTools{
    constructor(name, power, option, color){
        super(name, power, option);
        this.color = color
        console.log(`${this.name} color is ${this.color}`)       
    } 
}

const toaster = new Toaster('toaster', 10, 'on', 'Tefal');
const microwave = new Microwave('microwave', 50, 'onии', 'Grey');

const allTools = [toaster, microwave]

function getTotalPwr(arr){
    let sumPwr = 0;   
    for (let name of arr.values()){      
        if(name.option === 'on'){
          name.power = name.power                      
        }else{
          name.power = 0 
        }
        sumPwr += name.power         
      }      
    console.log(`Total power is ${sumPwr} w`)
  }

getTotalPwr(allTools)