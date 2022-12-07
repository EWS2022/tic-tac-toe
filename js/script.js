let virtualTable = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let mooveNumber = 0;
let allCase = document.querySelectorAll('td');//variable qui contient tous les td
console.log(allCase);
let emodjiChangeSpan = document.querySelector('span');
let symbol = '😍';//variable qui contient le symbole X
let inputLineNumber = document.querySelector('#line');//input pour le numéro de la ligne 
let inputCaseNumber = document.querySelector('#case');//input pour le numéro de la case
let button = document.querySelector('button');//bouton pour occuper la case
let lineAll = document.querySelectorAll('tr');//La variable qui contient tous les tr
button.onclick = function () {
    let lineNumber = parseInt(inputLineNumber.value);//variable qui contient le numéro de la ligne choisie
    let caseNumber = parseInt(inputCaseNumber.value);//variable qui contient le numéro de la case choisie
    if (lineNumber < 3 && caseNumber < 3) {//Si lineNumber est plus petit que 3 et caseNumber plus petit que 3, alors...
        let choiceLine = lineAll[lineNumber];//variable qui contient la ligne que le joueur a choisi
        let allCaseLine = choiceLine.querySelectorAll('td');//variable qui contient les trois cases de la ligne choisie par le joueur
        let choiceCase = allCaseLine[caseNumber];//variable qui contient la case choisie
        if (choiceCase.innerText == '') {//si le contenu de choiceCase est vide, alors...
            choiceCase.innerText = symbol;
            mooveNumber = mooveNumber + 1;
            virtualTable[lineNumber][caseNumber] = symbol;
            setTimeout(() => {
                checkWinner();
            }, 500);
            console.log(virtualTable)
            if (symbol == '😍') {//Si symbol est égal à X
                symbol = '😘';//Le symbol se transforme en O
            } else {//Sinon, si le symbol est égal à O
                symbol = '😍';//le symbol se transforme en X
            }
            emodjiChangeSpan.innerText = symbol;//le contenu (texte) de emodjiChangeSpan se transforme en symbol
        } else {
            alert('Cette case est occupée, choisissez-en une autre')
        }
    } else {//Sinon...
        console.log(inputLineNumber.value)
        alert('Error');
        inputLineNumber.value = 0;//Le contenu de la variable inputLineNumber se remet à 0
        inputCaseNumber.value = 0;//Le contenu de la variable inputCaseNumber se remet à 0

    }
}

function checkWinner() {
    if (virtualTable[0][0] == '😍' && virtualTable[0][1] == '😍' && virtualTable[0][2] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8

    }
    if (virtualTable[1][0] == '😍' && virtualTable[1][1] == '😍' && virtualTable[1][2] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[2][0] == '😍' && virtualTable[2][1] == '😍' && virtualTable[2][2] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][0] == '😍' && virtualTable[1][0] == '😍' && virtualTable[2][0] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][1] == '😍' && virtualTable[1][1] == '😍' && virtualTable[2][1] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][2] == '😍' && virtualTable[1][2] == '😍' && virtualTable[2][2] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][0] == '😍' && virtualTable[1][1] == '😍' && virtualTable[2][2] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][2] == '😍' && virtualTable[1][1] == '😍' && virtualTable[2][0] == '😍') {
        alert('Le gagnant est 😍')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[0][0] == '😘' && virtualTable[0][1] == '😘' && virtualTable[0][2] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
    }
    if (virtualTable[1][0] == '😘' && virtualTable[1][1] == '😘' && virtualTable[1][2] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[2][0] == '😘' && virtualTable[2][1] == '😘' && virtualTable[2][2] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[0][0] == '😘' && virtualTable[1][0] == '😘' && virtualTable[2][0] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[0][1] == '😘' && virtualTable[1][1] == '😘' && virtualTable[2][1] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[0][2] == '😘' && virtualTable[1][2] == '😘' && virtualTable[2][2] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[0][0] == '😘' && virtualTable[1][1] == '😘' && virtualTable[2][2] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (virtualTable[0][2] == '😘' && virtualTable[1][1] == '😘' && virtualTable[2][0] == '😘') {
        alert('Le gagnant est 😘')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
    if (mooveNumber == 9){
        alert('égalité')
        virtualTable = [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ];
        allCase[0].innerText = '';//on enlève le contenu de la case 0
        allCase[1].innerText = '';//on enlève le contenu de la case 1
        allCase[2].innerText = '';//on enlève le contenu de la case 2
        allCase[3].innerText = '';//on enlève le contenu de la case 3
        allCase[4].innerText = '';//on enlève le contenu de la case 4
        allCase[5].innerText = '';//on enlève le contenu de la case 5
        allCase[6].innerText = '';//on enlève le contenu de la case 6
        allCase[7].innerText = '';//on enlève le contenu de la case 7
        allCase[8].innerText = '';//on enlève le contenu de la case 8
        mooveNumber = 0;
    }
}
