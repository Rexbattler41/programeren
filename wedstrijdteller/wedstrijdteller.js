console.log('hallo wereld');

let team1Points = 0;
let team2Points = 0;



function pointTeam1(event){
    team1Points++;
    if ((team1Points > 25|| team2Points > 25) && Math.abs(team1Points - team2Points) >= 2) {
        team1Points = 0;
        team2Points = 0;
        alert('team ' + nameTeam1.innerText + ' heeft gewonnen!')
        counterTeam2.innerText = team2Points;
    }
    counterTeam1.innerText = team1Points;
}

function pointTeam2(event){
    team2Points++;
    if ((team1Points > 25|| team2Points > 25) && Math.abs(team2Points - team1Points) >= 2) {
        team1Points = 0;
        team2Points = 0;
        alert('team ' + nameTeam2 + ' heeft gewonnen!')
        counterTeam1.innerText = team1Points;
    }
    counterTeam2.innerText = team2Points;
}

function handleStartButton(event){
    console.dir(servingTeam1);
    let naam1 = inputTeam1.value;
    let naam2 = inputTeam2.value;
    if (naam1 == ''){
        alert("geef een teamnaam voor team 1");
    } else {
        nameTeam1.innerText = naam1;
    };
    if (naam2 == ''){
        alert("geef een teamnaam voor team 2");
    } else {
        nameTeam2.innerText = naam2;
    };
    if (servingTeam2.checked != true){
        if (servingTeam1.checked != true){
            alert("selecteer wie begint")
        } else {
            console.log("team 1 begint")
            input_teams.style.display = 'none'
        }
    } else {
        console.log("team 2 begint")
        input_teams.style.display = 'none'
    }
    counterTeam1.addEventListener('click', pointTeam1);
    counterTeam2.addEventListener('click', pointTeam2);
};

startButton.addEventListener('click', handleStartButton);

//undoButton.addEventListener('click', undoPoints)