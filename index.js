import chalk from 'chalk'; // Si estás en ESM

console.log(chalk.green("Hola"));

const tareas = [
  { title: 'Tarea 1', completed: true },
  { title: 'Tarea 2', completed: false},
  { title: 'Tarea 3', completed: true},
  { title: 'Tarea 4', completed: false}
];

for(const tarea of tareas){
	if(tarea.completed==true){
		console.log(chalk.green(tarea.title));
	} else{
		console.log(chalk.red(tarea.title));
	}
}