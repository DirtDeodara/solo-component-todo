

function filterTasks(tasks, filter) {
    const lowerCaseFilter = filter.text.toLowerCase();
    return tasks.filter(task => {
        const lowerCaseTask = 
            task
                .task
                .toLowerCase();
        
        const hasTask = lowerCaseTask.includes(lowerCaseFilter);

        return hasTask;
    });
}

export default filterTasks;