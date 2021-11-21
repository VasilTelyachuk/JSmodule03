const findBestEmployee = function(employees) {
   
const numberOfTasks = Object.values(employees)
let bestEmpoyee = numberOfTasks[0];
for (let i = 1; i < numberOfTasks.length; i += 1) {
      
    if (numberOfTasks[i]>bestEmpoyee) {
            bestEmpoyee = numberOfTasks[i];           
    }
}
const index = numberOfTasks.indexOf(bestEmpoyee);
const nameEmployee = Object.keys(employees);
return nameEmployee[index];



// const values = Object.values(employees);
//   const numberOfTasks = Math.max(...values);
//   const index = values.indexOf(numberOfTasks);
//   const nameEmployee = Object.keys(employees);
//   return nameEmployee[index];
};
  
  
  console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  ); // lorence
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  ); // mango
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  ); // lux