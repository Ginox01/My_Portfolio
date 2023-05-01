const allContainersprojects = document.querySelectorAll('.project');
const pages = document.querySelectorAll('.background-page');

let currentPage;

window.addEventListener('scroll',hideShowTheProject);
//This function show or hide the containers project when the user scroll the page
function hideShowTheProject(){
    let triggerEvent = window.innerHeight * 3/5;
    allContainersprojects.forEach(container=>{
        let position = container.getBoundingClientRect().top;
        if(triggerEvent > position){
            container.classList.add('active-project');
        }else {
            container.classList.remove('active-project');
        }
    })
}



allContainersprojects.forEach(project=>{
    project.addEventListener('click',showPage);
})
//This Function show the page to explain the project
function showPage(e){
    
    let selectPage = e.target.dataset.project;

    pages[selectPage].style.left = 0 + "%";
    currentPage = selectPage;

}


const btnsClose = document.querySelectorAll('.btn-close');

//Hide the page of the content

btnsClose.forEach(btnClose=>{
    btnClose.addEventListener('click',closeThePageProject);
})
function closeThePageProject(e){
    pages[currentPage].style.left = 400+'%'    
}
