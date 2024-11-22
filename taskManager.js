function Task(name, priority, dueDate, status) {
    this.name = name;
    this.priority = priority;
    this.dueDate = dueDate;
    this.status = status;
}

let tasks = []; // Initialize tasks

// Load tasks from localStorage
const loadTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
};

// Save tasks to localStorage
const saveTasks = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

// Call loadTasks to initialize tasks
loadTasks();

const addTask = (name, priority, dueDate, status) => {
    let taskName = new Task(name, priority, dueDate, status);
    tasks.push(taskName);
    console.log('Task added successfully');
    saveTasks(); // Save tasks to localStorage
};

const fetchTasks = () => {
    // Simply return the tasks to frontend
    return tasks;
};

const updateTask = (name , renderCallback) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name === name) {
            tasks[i].status = tasks[i].status === "completed" ? "pending" : "completed";
            console.log(`Status updated to ${tasks[i].status}`);
            saveTasks(); // Save tasks to localStorage
            renderCallback();
            return;
        }
    }
    console.log("Task not found");
};

const deleteTask = (name , renderCallback) => {
    for (let i = 0; i < tasks.length; i++) {
        if (tasks[i].name === name) {
            tasks.splice(i, 1);
            console.log("Task deleted successfully");
            saveTasks(); // Save tasks to localStorage
            renderCallback();
            return;
        }
    }
    console.log("Task not found");
};

const sortingTasks = (criteria) => {
    if (criteria === "priority") {
        const priorityOrder = { urgent: 1, medium: 2, low: 3 };
        tasks.sort((a, b) => (priorityOrder[a.priority] || 4) - (priorityOrder[b.priority] || 4));
    } else if (criteria === "date") {
        tasks.sort((a, b) => a.dueDate - b.dueDate);
    } else {
        console.log("Choose a valid option");
        return;
    }
    saveTasks(); // Save tasks to localStorage after sorting
};

// Initial load of tasks
fetchTasks();