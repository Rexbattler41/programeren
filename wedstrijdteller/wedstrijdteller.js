console.log('hallo wereld');

function pointTeam1(event){
    let team1Points = counterTeam1.outerText;
    counterTeam1.innerText = parseInt(team1Points) + 1;
}

function pointTeam2(event){
    let team2Points = counterTeam2.outerText;
    counterTeam2.innerText = parseInt(team2Points) + 1;
}

counterTeam1.addEventListener('click', pointTeam1);
counterTeam2.addEventListener('click', pointTeam2);

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
            input_teams.remove()
        }
    } else {
        console.log("team 2 begint")
        input_teams.remove()
    }
};

startButton.addEventListener('click', handleStartButton);

undoButton.addEventListener('click', undoPoints)