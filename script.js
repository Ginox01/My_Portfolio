

const allContainersprojects = document.querySelectorAll('.project');//provare con classe move al posto di project
const pages = document.querySelectorAll('.background-page');
const arrows = document.querySelectorAll('.arrow');


let currentPage;
let pageOpen = false;

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
    if(pageOpen){
        closeThePageProject();
    }
    
    let selectPage = e.target.dataset.project;

    pages[selectPage].style.left = 0 + "%";
    currentPage = selectPage;
    pageOpen = true;

}


const btnsClose = document.querySelectorAll('.btn-close');

//Hide the page of the content

btnsClose.forEach(btnClose=>{
    btnClose.addEventListener('click',closeThePageProject);
})
function closeThePageProject(){
    pages[currentPage].style.left = 400+'%'    
}


//HIDE OR DISPLAY THE CONTACTS

arrows.forEach((arrow,idx)=>{
    
    arrow.addEventListener('click',()=>hideOrDisplayContact(arrow,idx));
});

function hideOrDisplayContact(arrow,idx){
    let accords = document.querySelectorAll('.accord');
    let contentsDiv = document.querySelectorAll('.accord-content');
    let arrowEl = arrows[idx];
    let accord = accords[idx];
    let divContent = contentsDiv[idx];
    if(accord.classList.contains('off')){
        arrowEl.style.display = "none";
        accord.classList.remove('off');
        let x = 0;
        const interval = setInterval(()=>{
            divContent.style.width = x +'px';
            x++;
            if(x >= 250){
                clearInterval(interval);
                arrowEl.style.display = "";
                arrowEl.innerHTML = "←";
            }
        },5)

    }else if((!accord.classList.contains('off'))){
        accord.classList.add('off');
        let y = 250;
        arrowEl.style.display = "none";
        const int = setInterval(()=>{
            divContent.style.width = y + 'px';
            y--;
            if(y <= 0){
                clearInterval(int);
                arrowEl.style.display = "";
                arrowEl.innerHTML = "→";
            }
        },5)
    } 
}




//TURNS THE CIRCLE 

turnsTheCircle();
function turnsTheCircle(){
    const circle = document.querySelector('.circle');
    let i = 0;
    const int = setInterval(()=>{
        circle.style.transform = 'rotate(' + i + 'deg)';
        i += 90;
        if( i > 360000){
            i = 0;
        }
    },2000)
}