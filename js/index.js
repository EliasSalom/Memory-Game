function myform(){
    const name = document.getElementById("name").value;
    const level = document.getElementById("level").value;
    if (name != "") {
        var getInput = [{"name":name,"value":level}];
        localStorage.setItem("storageName", getInput);
        // window.location.href="/game.html";
        return true;
    }
    else{
        alert("please write your name !!");
    }
}