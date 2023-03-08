const object1 = {
    size: 12,
    weight: 8,
};

function GetInfo(object1){
    for (const [key, value] of Object.entries(object1)) {
        console.log(`${key}: ${value}`);
      }
 }

 getInfo(object1)












