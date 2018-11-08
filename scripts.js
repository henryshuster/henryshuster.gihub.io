var player_name=localStorage.getItem("player_name");
var throw_choice;
var browser_choice;
var browser_text;

var win_count=localStorage.getItem("win_count");
var lose_count=localStorage.getItem("lose_count");
var game_count=localStorage.getItem("game_count");

var player_rock=localStorage.getItem("player_rock")
var player_paper=localStorage.getItem("player_paper");
var player_scissors=localStorage.getItem("player_scissors");

var bowser_rock=localStorage.getItem("bowser_rock")
var bowser_paper=localStorage.getItem("bowser_scissors")
var bowser_scissors=localStorage.getItem("bowser_scissors");

document.getElementById("game_count").innerHTML="Games Played: "+game_count;
localStorage.setItem("game_count", game_count);
document.getElementById("win_count").innerHTML="Games Won: "+win_count;
localStorage.setItem("win_count", win_count);
document.getElementById("win_loss").innerHTML="Win/Loss: "+win_count+ "/" +lose_count;
document.getElementById("player_stats").innerHTML="Player: Rock: "+player_rock/game_count*100+ "% Paper: " +player_paper/game_count*100+"% Scissors: "+player_scissors/game_count*100 +"%";
localStorage.setItem("player_rock",player_rock);
localStorage.setItem("player_paper",player_paper);
localStorage.setItem("player_scissors",player_scissors);
document.getElementById("bowser_stats").innerHTML="B(r)owser: Rock: "+bowser_rock/game_count*100+ "% Paper: " +bowser_paper/game_count*100+"% Scissors: "+bowser_scissors/game_count*100 +"%";
localStorage.setItem("bowser_rock",bowser_rock);
localStorage.setItem("bowser_paper",bowser_paper);
localStorage.setItem("bowser_scissors",bowser_scissors);
if(player_name){
  document.getElementById("header").innerHTML="Hi "+player_name+"! Play Rock, Paper, Scissors";
}
if(!player_name){
  makeVisible(document.getElementById("enter_name"));
}


toggleVisibility(document.getElementById("show_rules_button"),document.getElementById("rules"));
toggleVisibility(document.getElementById("enter_name_button"),document.getElementById("enter_name"))
toggleVisibility(document.getElementById("show_stats_button"),document.getElementById("stats"));

document.getElementById("confirm_name").addEventListener('click', function () {
    player_name = document.getElementById("name_input").value;
    localStorage.setItem("player_name", player_name);
    //console.log(player_name);
    document.getElementById("header").innerHTML="Hi "+player_name+"! Play Rock, Paper, Scissors";
    makeInvisible(document.getElementById("enter_name"));
});
// document.getElementById("play_again_button").addEventListener('click', function ()){
//   document.getElementById("throw").innerHTML='';
// }
document.getElementById("confirm_choice").addEventListener('click', function () {
    throw_choice = document.getElementById("throw").value;
    browser_choice=Math.floor(Math.random() * 3);//0=Rock, 1=Paper, 2=Scissors
    if(throw_choice=='Rock'){
      document.getElementById("Hand").src='RockHand.png'
      player_rock++;
    }
    else if(throw_choice=='Paper'){
      document.getElementById("Hand").src='PaperHand.png'
      player_paper++;
    }
    else if(throw_choice=='Scissors'){
      document.getElementById("Hand").src='ScissorsHand.png'
      player_scissors++;
    }
    else if(throw_choice==''){
      return;
    }
    if(browser_choice==0){
      document.getElementById("Bowser").src='BowserRock.jpg'
      browser_text="Rock";
      bowser_rock++;
    }
    else if(browser_choice==1){
      document.getElementById("Bowser").src='BowserPaper.jpg'
      browser_text="Paper";
      bowser_paper++;
    }
    else if(browser_choice==2){
      document.getElementById("Bowser").src='BowserScissors.jpg'
      browser_text="Scissors";
      bowser_scissors++;
    }
    document.getElementById("result_hand").innerHTML="You threw "+throw_choice+". The B(r)owser threw "+browser_text+"."
    if(winner(throw_choice,browser_text)=="t"){
      document.getElementById("win").innerHTML="You tie."
    }
    else if(winner(throw_choice,browser_text)=="u"){
      document.getElementById("win").innerHTML="You win! :)"
      win_count++;
    }
    else if(winner(throw_choice,browser_text)=="c"){
      document.getElementById("win").innerHTML="You lose :("
      lose_count++;
    }
    game_count++;
    document.getElementById("game_count").innerHTML="Games Played: "+game_count;
    localStorage.setItem("game_count", game_count);
    document.getElementById("win_count").innerHTML="Games Won: "+win_count;
    localStorage.setItem("win_count", win_count);
    document.getElementById("win_loss").innerHTML="Win/Loss: "+win_count+ "/" +lose_count;
    document.getElementById("player_stats").innerHTML="Player: Rock: "+player_rock/game_count*100+ "% Paper: " +player_paper/game_count*100+"% Scissors: "+player_scissors/game_count*100 +"%";
    localStorage.setItem("player_rock",player_rock);
    localStorage.setItem("player_paper",player_paper);
    localStorage.setItem("player_scissors",player_scissors);
    document.getElementById("bowser_stats").innerHTML="B(r)owser: Rock: "+bowser_rock/game_count*100+ "% Paper: " +bowser_paper/game_count*100+"% Scissors: "+bowser_scissors/game_count*100 +"%";
    localStorage.setItem("bowser_rock",bowser_rock);
    localStorage.setItem("bowser_paper",bowser_paper);
    localStorage.setItem("bowser_scissors",bowser_scissors);
});
document.getElementById("play_again_button").addEventListener('click', function (){
  document.getElementById("throw").value='';
  document.getElementById("Bowser").src='DefaultBowser.jpg'
  document.getElementById("Hand").src='DefaultHand.jpg'
  document.getElementById("result_hand").innerHTML="";
   document.getElementById("win").innerHTML="";
});

function toggleVisibility(button, div){
  button.addEventListener("click", function(){
  if(div.classList.contains("hidden")){
    div.classList.remove("hidden");
    div.classList.add("visible");
  }
  else{
    div.classList.remove("visible");
    div.classList.add("hidden");
  }
 })
}
function makeVisible(div){
      if(div.classList.contains("hidden")){
        div.classList.remove("hidden");
        div.classList.add("visible");
      }
}
function makeInvisible(div){
        if(div.classList.contains("visible")){
          div.classList.remove("visible");
          div.classList.add("hidden");
        }
}
function winner(userchoice, compchoice) {
    if (userchoice == compchoice) {
        console.log("Tie.");
        return "t";
    } else if (userchoice == "Rock") {
        if (compchoice == "Scissors") {
            console.log("rock > scissors");
            return "u";
        } else if (compchoice === "Paper") {
            console.log("paper > rock");
            return "c";
        }
    } else if (userchoice == "Paper") {
        if (compchoice == "Rock") {
            console.log("paper > rock");
            return "u";
        } else if (compchoice === "Scissors") {
            console.log("scissors > paper");
            return "c";
        }
    } else if (userchoice == "Scissors") {
        if (compchoice == "Rock") {
            console.log("rock > scissors");
            return "c";
        } else if (compchoice == "Paper") {
            console.log("scissors > paper");
            return "u";
        }
    }
}
