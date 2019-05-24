

function filterTasks(tasks, filter) {
    const text = filter.text.toLowerCase();
    const completed = filter.completed;
    return tasks.filter(task => {
        const isCompleted = task.completed.toString();
        const lowerCaseTask = 
            task
                .task
                .toLowerCase();
        
        const hasTask = lowerCaseTask.includes(text);
        let status = isCompleted.includes(completed);
        if(completed === 'all') {
            status = true;
        }
        return hasTask && status;
    });
}

export default filterTasks;