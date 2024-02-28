console.log('hallo wereld');

function handleStartButton(event){
    console.log("you pressed the button!");
    console.dir(inputTeam1);
    console.log(inputTeam1.value);
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
        }
    } else {
        console.log("team 2 begint")
    }
};

startButton.addEventListener('click', handleStartButton);