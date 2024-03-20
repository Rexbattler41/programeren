undoButton.style.display = 'none'

let team1Points = 0;
let team2Points = 0;

function handleButton(event){
    if (this == counterTeam1){
        team1Points++
        lastScored = 1;
        if ((team1Points > 25|| team2Points > 25) && Math.abs(team1Points - team2Points) >= 2) {
            team1Points = 0;
            team2Points = 0;
            alert('team ' + nameTeam1.innerText + ' heeft gewonnen!')
            counterTeam2.innerText = team2Points;
            undoButton.style.display = 'none'
        }
        counterTeam1.innerText = team1Points;
    } else {
        team2Points++
        lastScored = 2;
        if ((team1Points > 25|| team2Points > 25) && Math.abs(team2Points - team1Points) >= 2) {
            team1Points = 0;
            team2Points = 0;
            alert('team ' + nameTeam2 + ' heeft gewonnen!')
            counterTeam1.innerText = team1Points;
            undoButton.style.display = 'none'
        }
        counterTeam2.innerText = team2Points;
    }
    undoButton.style.display = 'block'
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
    counterTeam1.addEventListener('click', handleButton);
    counterTeam2.addEventListener('click', handleButton);
};

startButton.addEventListener('click', handleStartButton);
undoButton.addEventListener('click', resetButton);

function resetButton(event){
    undoButton.style.display = 'none'
    if (lastScored == 1){
        team1Points--;
        counterTeam1.innerText = team1Points;
    } else {
        team2Points--;
        counterTeam2.innerText = team2Points;
    }
}