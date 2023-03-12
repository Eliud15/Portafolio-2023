const ABOUT = document.querySelector('.about');
const INFO_ABOUT = document.querySelector('.info_about');
INFO_ABOUT.style.display='none'
ABOUT.addEventListener('click',(event)=>{
    
    INFO_ABOUT.style.display === 'none' ? INFO_ABOUT.style.display='block' : INFO_ABOUT.style.display='none'
})
//*-------------------------------------------------------------------------------
const SKILLS = document.querySelector('.skills');
const INFO_SKILLS = document.querySelector('.info_skills');
INFO_SKILLS.style.display='none'
SKILLS.addEventListener('click',(event)=>{
    
    INFO_SKILLS.style.display === 'none' ? INFO_SKILLS.style.display='block' : INFO_SKILLS.style.display='none'
})
//*------------------------------------------------------------------------------
//-------------------------------------------------------------------------------
const PROYECTS = document.querySelector('.proyects');
const INFO_PROYECTS = document.querySelector('.info_proyects');
INFO_PROYECTS.style.display='none'
PROYECTS.addEventListener('click',(event)=>{
    
    INFO_PROYECTS.style.display === 'none' ? INFO_PROYECTS.style.display='block' : INFO_PROYECTS.style.display='none'
})