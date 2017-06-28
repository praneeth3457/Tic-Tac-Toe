let paramValues = [
    {id:'td11', value:''},
    {id:'td12', value:''},
    {id:'td13', value:''},
    {id:'td21', value:''},
    {id:'td22', value:''},
    {id:'td23', value:''},
    {id:'td31', value:''},
    {id:'td32', value:''},
    {id:'td33', value:''}
];

let val = 'O';

function init() {
    let ticTacTable = document.createElement("TABLE");
    ticTacTable.setAttribute("id", "ticTacTable");
    ticTacTable.setAttribute("class", "table");
    document.getElementById("ticTac").appendChild(ticTacTable);

    for(let i=1; i<=3; i++){
        let tblTr= 'tr' + i;

        let tableTr = document.createElement("TR");
        tableTr.setAttribute("id", tblTr);
        document.getElementById("ticTacTable").appendChild(tableTr);

        for(let j=1; j<=3; j++){
            let tblTd= 'td' + i + j;

            let tableTd = document.createElement("TD");
            tableTd.setAttribute("id", tblTd);
            tableTd.setAttribute("onclick", 'tictac(' + tblTd +')');
            document.getElementById(tblTr).appendChild(tableTd);

        }
    }

    document.getElementById("ticTac-text").innerHTML = 'Click on the Grids';
    document.getElementById("reset").innerHTML = 'Reset';
}


function tictac (param) {
    let checkAllSelected = true;
    for(let l=0; l<paramValues.length; l++) {
        if(paramValues[l].id === param.id) {
            if(paramValues[l].value == '') {
                if(val === 'X') {
                    paramValues[l].value = 'O';
                    document.getElementById(param.id).innerHTML = 'O';
                    val = 'O';
                } else {
                    paramValues[l].value = 'X';
                    document.getElementById(param.id).innerHTML = 'X';
                    val = 'X';
                }

                document.getElementById("error").innerHTML = '';

            } else {
                document.getElementById("error").innerHTML = 'Grid already selected!'
            }
        }


        if(paramValues[l].value == ''){
            checkAllSelected = false;
        }

    }

    if(checkAllSelected == true){
        document.getElementById("ticTac-text").innerHTML = 'Game over!';
        document.getElementById("ticTac-text").style.color = '#d43f3a';
        document.getElementById("reset").innerHTML = 'Play Again';
        document.getElementById("reset").setAttribute('class', 'btn btn-primary pull-right');
    }
}

function reset() {
    document.getElementById("ticTac-text").innerHTML = 'Click on the Grids';
    document.getElementById("ticTac-text").style.color = '#242424';
    document.getElementById("reset").innerHTML = 'Reset';
    document.getElementById("reset").setAttribute('class', 'btn btn-default pull-right');
    for(let l=0; l<paramValues.length; l++) {
        paramValues[l].value = '';
        document.getElementById(paramValues[l].id).innerHTML = '';
    }
}