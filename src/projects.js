'use strict';

//Handling logic related to project categories filtering
const categories = document.querySelector('.categories');
const projects = document.querySelectorAll('.project');
const projectsContainer = document.querySelector('.projects');


categories.addEventListener('click', (event)=> {
    const filter = event.target.dataset.category;
    if(filter==null) {
        return;
    }
    handleActiveSelection(event.target);
    filterProjects(filter);
});

//Reset the 'active' menu
function handleActiveSelection(target) {
    const active = document.querySelector('.category--selected');
    active.classList.remove('category--selected');
    target.classList.add('category--selected');
}

//filtering for projects
function filterProjects(filter) {
    projectsContainer.classList.add('anim-out'); //css animation
    projects.forEach(project=>{
        if(filter === 'all'||filter===project.dataset.type){
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
    setTimeout(()=>{
        projectsContainer.classList.remove('anim-out');
    }, 250);
}










