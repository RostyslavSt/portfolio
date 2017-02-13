$(function() {

	//function for render counts
	function renderCounters(toDoCount, inProgressCount, doneCount) {
		$('.toDo-badge').html(toDoCount);
		$('.inProgress-badge').html(inProgressCount);
		$('.done-badge').html(doneCount);
	}
	//function for print items
	function printTask(item, parentObj) {
			var $parent = parentObj;
			var template = `<li class="list-group-item" data-id={{id}}>{{taskTitle}}
				<span class="label label-default">New</span>
				<a href="#" class="remove-btn">
					<span class="glyphicon glyphicon-remove pull-right">
					</span>
				</a>
				<a href="#">
					<span class="glyphicon glyphicon-pencil pull-right edit-task-pen">
					</span>
				</a>
			</li>`;
			template = template.replace('{{taskTitle}}', item.title);
			template = template.replace('{{id}}', item.id);
			$(template).appendTo($parent);
		}

	//function for render data from local storage
	function renderTasks() {
		//get info from server
		var allTasks = [];
		for (var key in localStorage) {
			if (localStorage.hasOwnProperty(key)) {
				allTasks.push(JSON.parse(localStorage[key]));
			}
		}
		//sort tasks by tabs
		function sortTasksByStatus(sourceArr, taskStatus) {
			var arr = allTasks.filter(function(item) {
				return item.status === taskStatus;
			})
			return arr;
		}
		var toDoTasks = sortTasksByStatus(allTasks, 1);
		var inProgressTasks = sortTasksByStatus(allTasks, 2);
		var doneTasks = sortTasksByStatus(allTasks, 3);
		
		//print counters
		renderCounters(toDoTasks.length, inProgressTasks.length, doneTasks.length);

		//clear DOM
		$('.tab-content li').remove();

		//print tasks
		function renderTabTasks(arr, tabName) {
			arr.forEach(function(item) {
				printTask(item, tabName)
			});
		}
		renderTabTasks(toDoTasks, $('#toDo .list-group'));
		renderTabTasks(inProgressTasks, $('#inProgress .list-group'));
		renderTabTasks(doneTasks, $('#done .list-group'));
	}

	//handler event: add task
	$('#add-task-btn').on('click', function() {
		let id = Math.random().toString(36).substr(2, 8);
		var data = {
				name: 'toDoList',
				title: $('#addTaskInput').val() || 'New task',
				description: $('#add-task-description').val(),
				status: 1,
				id: id,
				date: Date.now()
			}
		console.log(data);
		localStorage.setItem(id, JSON.stringify(data));

		printTask(data, $('#toDo .list-group'));
		$('#addTaskModel').modal('hide');
		//обнуляем input
		$('#addTaskModel input[name]').val('');
		$('#addTaskModel textarea[name]').val('');
		renderTasks();
	});

	//handler event: delete task
	$('body').on('click','.remove-btn', function(event) {
		event.preventDefault();
		$parent = $(this).parents('li');
		console.log($parent);
		var taskID = $parent.data('id')
		localStorage.removeItem(taskID);
		renderTasks();
	});

	//handler event: edit task
	$('body').on('click', '.edit-task-pen', function(event) {
		$('#formEditTask').modal('show');
		//take info from local Storage
		var $parent = $(this).parents('li');
		var $taskID = $parent.data('id');
		var item = JSON.parse(localStorage.getItem($taskID));
		$('#editTaskInput').val(item.title);
		$('#editTaskDescription').val(item.description);
		$('#editTaskStatus').val(item.status);
		$('#edit-task-id').val($taskID);
		console.log($parent.attr('data-id'));
	});

	//handler event: edit task
	$('#editTaskBtn').on('click', function() {
		//save changes to base
		var $modalFormEdit = $('#formEditTask');
		var $itemTaskID = $('#edit-task-id').val();
		var data = {
				name: 'toDoList',
				title: $('#editTaskInput').val(),
				description: $('#editTaskDescription').val(),
				status: +$('#editTaskStatus').val(),
				id: $('#edit-task-id').val(),
				date: Date.now()
			};
		localStorage.removeItem($modalFormEdit);
		localStorage.setItem($itemTaskID, JSON.stringify(data) );
		$($modalFormEdit).modal('hide');
		renderTasks();
	});

	//handler event: remove all tasks
	$('.butt-remove').on('click', function() {
		localStorage.clear();
		renderTasks();
	})

	renderTasks();

});



// localStorage.clear()

