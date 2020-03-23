var EventBus =  new Vue;

Vue.component('app-icon', {
	template: '<span :class="cssClasses" aria-hidden="true"></span>',
	props: ['img'],
	computed:{
		cssClasses: function (){
			return 'glyphicon glyphicon-'+this.img
		}
	}
});


Vue.component('app-task',{
	data: function(){
		return {
			editing : false,
			draft : ''
		};
	},
	template: '#task-template',
	props:['task', 'index'],
	created: function(){
		EventBus.$on('editing', function (index){
			if(this.index != index){
				console.log('Discarding: ' + this.index);

				this.discard();
			}
		}.bind(this));
	},
	methods:{
		toggleStatus(){
			this.task.pending = !this.task.pending;
		},
		edit(){
			console.log('Editing: ' + this.index);
			EventBus.$emit('editing', this.index);
			this.draft = this.task.description

			this.editing = true;
		},
		discard(){
			this.editing = false;
		},
		done(){
			this.task.description = this.draft;
			this.editing = false;
		},
		remove(){
			this.$emit('remove', this.index);
		},
	}
});

var vm = new Vue({
	el : '#app',
	data:{
		tasks:[
			{
				description : 'Learn Vue js',
				pending : true,
			},
			{
				description : 'Subscribe to Styde',
				pending : true,
			},
			{
				description : 'Finish the course',
				pending : false,
			}
		],
		newTask : ''	
	},
	
	methods : {
		createTask(pending, $event){
			event.preventDefault();
			if(this.newTask.trim()){
				this.tasks.push({description:this.newTask, pending : true, editing: false})
			}
			this.newTask = '';
		},
		deleteTask(index){
			this.tasks.splice(index, 1)
		},
		deleteCompleted(){
			this.tasks = this.tasks.filter(function (task){
				return task.pending;
			})
		}
	}
})
