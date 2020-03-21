var vm = new Vue({
	el : '#app',
	data:{
		tasks:[
			{
				description : 'Learn Vue js',
				pending : true,
				editing: false
			},
			{
				description : 'Subscribe to Styde',
				pending : true,
				editing: false
			},
			{
				description : 'Finish the course',
				pending : false,
				editing: false
			}
		],
		newTask : '',
		draft : ''
	},
	methods : {
		createTask(pending, $event){
			event.preventDefault();
			if(this.newTask.trim()){
				this.tasks.push({description:this.newTask, pending : true, editing: false})
			}
			this.newTask = '';
		},
		toggleStatus(task){
			task.pending = !task.pending;
		},
		editItem(task){
			this.tasks.forEach(function (task){
				task.editing = false;
			});

			this.draft = task.description

			task.editing = true;
		},
		discardTask(task){
			task.editing = false;
		},
		doneTask(task){
			task.description = this.draft;
			task.editing = false;
		},
		deleteItem(index){
			this.tasks.splice(index, 1);
		},
		deleteCompleted(){
			this.tasks = this.tasks.filter(function (task){
				return task.pending;
			})
		}
	}
})
