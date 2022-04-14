const explorers = [
 {
   name: "Explorer 1",
   exercises_completed: 10,
   rate: 99,
   city: "CDMX",
   stack: [
     "js",
     "c#"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: true,
       exercisesFinished: true
     }
   }
 },
 {
   name: "Explorer 2",
   exercises_completed: 9,
   city: "Veracruz",
   rate: 50,
   stack: [
     "js"
   ],
   missions: {
     onboarding: {
       isFinished: false,
       exercisesFinished: false
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 },
 {
   name: "Explorer 3",
   exercises_completed: 3,
   city: "Sonora",
   rate: 100,
   stack: [
     "elixir"
   ],
   missions: {
     onboarding: {
       isFinished: true,
       exercisesFinished: true
     },
     frontend: {
       isFinished: false,
       exercisesFinished: false
     }
   }
 }
]

// 1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH
console.log('1. Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH');
explorers.forEach(explorer => {
  console.log(explorer.name)
});

// 2. Imprime el stack de cada explorer, usa FOR forEach
console.log('2. Imprime el stack de cada explorer, usa FOR EACH')
explorers.forEach(explorer => {
  console.log(explorer.name)
  console.log(explorer.stack);
});

// 3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP
console.log('3. Crea una nueva lista con las listas de stacks de cada explorer, usa MAP');
const stacks = explorers.map(explorer => {
  return explorer.stack;
});
console.log(stacks);

// 4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)
console.log('4. Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)')
const list = explorers.filter(explorer => explorer.stack.includes('js'))
console.log(list);

// 5. Busca el primer explorer que sea de la CDMX, usa FIND
console.log('5. Busca el primer explorer que sea de la CDMX, usa FIND')
const explorer = explorers.find(explorer => explorer.city === "CDMX")
console.log(explorer);

// 6. Obtén la suma de todos los exercises_completed, usa REDUCE
console.log('6. Obtén la suma de todos los exercises_completed, usa REDUCE')
const exercisesCompleted = explorers.reduce((acc, explorer) => acc + explorer.exercises_completed, 0)
console.log(exercisesCompleted);

// 7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME
console.log('7. Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME')
const someExercisesFinished = explorers.some(explorer => explorer.missions.frontend.exercisesFinished )
console.log(someExercisesFinished);

// 8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.
console.log('8. Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.')
const everyIsFinished = explorers.every(explorer => explorer.missions.onboarding.isFinished);
console.log(everyIsFinished);
