var nameVar = 'Guillermo Sanchez';

// You can reassign and redefine which is pretty messed up
var nameVar = 'Mike';
console.log('Guillermo Sanchez', nameVar);

// You can't redefine the name variables, babel crashes
let nameLet = 'Guillermo';
// let nameLet = 'Guillermo';
console.log('Guillermo Sanchez', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Guillermo';
// nameConst = 'React';
console.log(nameConst);

// scope is different as well

function getPetName() {

}

// Block scoping


