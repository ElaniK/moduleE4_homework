function KitchenTools(name, power, onOff){
    this.name = name,
    this.power = power,
    this.onOff = onOff

}


const toaster = new KitchenTools(`toaster`, 10, `on`, )
const microwave = new KitchenTools(`microwave`, 50, `on`)

const allTools = [toaster, microwave]

function totalPwr(arr){
    let sumPwr = 0;   
    arr.forEach((tool) =>{
        if (tool.onOff == 'on'){
            tool.power = tool.power
        }else{
            tool.power = 0
        }
        sumPwr += tool.power        
    })   
    console.log(`Total power is ${sumPwr} w`) 
  } 


totalPwr(allTools)


