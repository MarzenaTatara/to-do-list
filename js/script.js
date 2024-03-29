{
    const tasks = [];

    const newTask = document.querySelector(".js-newTask");
    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });
        newTask.value = "";
        render();
    };

    const remoweTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    }

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    }

    const bindEvents = () => {
        const remoweButtons = document.querySelectorAll(".js-remowe");

        remoweButtons.forEach((remoweButton, index) => {
            remoweButton.addEventListener("click", () => {
                remoweTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    }
    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
                <li
                ${task.done ? " style=\"text-decoration: line-through\"" : ""}
                
                >
                
                <button class="js-done task_button">${task.done ? "✓" : ""}</button>
              
                ${task.content}
                <button class="js-remowe  task__delete">🗑️       

                </button>
                 
                </li>
            `;
        }

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();

        if (newTaskContent === "") {
            return;
        }

        addNewTask(newTaskContent);
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);
    };

    init();

}

