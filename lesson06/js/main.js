var vm = new Vue({
		el : '#app',
		data : {
			tasks:[
				{
					title: 'Learn VueJs.',
					pending: false
				},
				{
					title: 'Get a job at Mnonline',
					pending: true
				},
				{
					title: 'Bring joy to my family',
					pending: true
				}
			],
			newTask : '',
		},
		computed:{
			pendingTasks : function (){
				return this.tasks.filter(function(item){
					return item.pending;
				});
			}
		},
		methods:{
			addTask(pending, event){
				event.preventDefault();
				if(this.newTask != ''){
					this.tasks.push({title: this.newTask, pending: pending});	
				}
				this.newTask = '';
			},
			changeTaskStatus(task){
				task.pending ? task.pending = false : task.pending = true
			},

			taskStyle(task){
				return task.pending ? 'text-danger' : 'text-del';
			}
		}
	});