let userscore=0
let compscore=0
let result=document.querySelector("#result")
let comp_score=document.querySelector("#compscore")
let user_score=document.querySelector("#userscore")
const choices=document.querySelectorAll(".choice");
function compchoice(){
    const choicelist=["stone","paper","scissors"]
    let randomnum=Math.random()*3
    let computerchoice=choicelist[Math.floor(randomnum)]
    return computerchoice
}
function playgame(userchoice){
    let compuchoice=compchoice()
    console.log("Computer choice= ",compuchoice," user choice= ",userchoice)
    if(userchoice==compuchoice){
        result.innerHTML="The game is draw.. your "+userchoice+" draws with "+compuchoice
    }else if(userchoice=="stone"){ 
        if(compuchoice=="paper"){
            result.innerHTML="Computer wins.. your "+userchoice+" loses to "+compuchoice
            comp_score.innerHTML=++compscore
        }else{
            result.innerHTML="You win.. your "+userchoice+" wins against "+compuchoice
            user_score.innerHTML=++userscore
        }
    }else if(userchoice=="paper"){ 
        if(compuchoice=="scissors"){
            result.innerHTML="Computer wins.. your "+userchoice+" loses to "+compuchoice
            comp_score.innerHTML=++compscore
        }else{
            result.innerHTML="You win.. your "+userchoice+" wins against "+compuchoice
            user_score.innerHTML=++userscore
        }
    }else if(userchoice=="scissors"){ 
        if(compuchoice=="stone"){
            result.innerHTML="Computer wins.. your "+userchoice+" loses to "+compuchoice
            comp_score.innerHTML=++compscore
        }else{
            result.innerHTML="You win.. your "+userchoice+" wins against "+compuchoice
            user_score.innerHTML=++userscore
        }
    }
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice)
    }
    )
})