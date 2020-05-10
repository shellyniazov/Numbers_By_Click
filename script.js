function ClickNumber() {

    let input = document.getElementById("myNumber").value;
    document.getElementById("check").innerHTML = 'The number you are enter is' +'  '+ input;

    for (let i = 1; i <= input; i++) {
        let ListItem = 'number'+ Number(i+1);
        document.getElementById("check").innerHTML +='<p>' + i + '</p>';

    }

}