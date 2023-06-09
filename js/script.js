{
    const tasks = [
        {
            content: "nagrać lekcję",
            done: false,
        },
        {
            content: "zjeść pierogi",
            done: true,
        },
    ];

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

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
                remoweTask(index);F
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
                <button class="js-done">V</button>
                <button class="js-remowe"><svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                viewBox="0 0 380.598 380.598" xml:space="preserve">
           <g>
               <path d="M322.383,90.222h-2.84l0.436-11.816c0.368-10.004-3.254-19.481-10.201-26.689c-6.946-7.207-16.284-11.176-26.294-11.176
                   h-48.463V22.934C235.021,10.288,224.732,0,212.087,0h-43.576c-12.646,0-22.933,10.288-22.933,22.934V40.54H97.114
                   c-10.01,0-19.348,3.97-26.294,11.177c-6.947,7.207-10.569,16.686-10.2,26.688l0.436,11.816h-2.841c-8.284,0-15,6.716-15,15
                   s6.716,15,15,15h3.948l8.309,225.202c0.728,19.724,16.758,35.174,36.494,35.174h166.667c19.736,0,35.766-15.45,36.494-35.174
                   l8.309-225.202h3.947c8.284,0,15-6.716,15-15S330.667,90.222,322.383,90.222z M175.578,30h29.443v10.54h-29.443V30z M90.599,77.3
                   c-0.089-2.41,1.103-4.02,1.821-4.765s2.283-1.995,4.694-1.995h186.37c2.411,0,3.976,1.25,4.694,1.995
                   c0.718,0.745,1.909,2.355,1.82,4.765l-0.477,12.922H91.076L90.599,77.3z M280.147,344.318c-0.131,3.521-2.992,6.279-6.515,6.279
                   h-15.714V226.13c0-8.284-6.716-15-15-15s-15,6.716-15,15v124.468h-22.62V226.13c0-8.284-6.716-15-15-15s-15,6.716-15,15v124.468
                   h-22.621V226.13c0-8.284-6.716-15-15-15s-15,6.716-15,15v124.468h-15.713c-3.523,0-6.385-2.758-6.515-6.279l-8.268-224.097h196.232
                   L280.147,344.318z"/>
           </g>
           </svg>
                </button>
                  ${task.content}
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