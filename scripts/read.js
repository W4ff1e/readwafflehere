var novelInfo = JSON.parse(JSON/reverendInsanity.json)
function test(){
    document.getElementById("novelTitle").innerHTML = novelInfo.ReverendInsanity.name;
    alert(novelInfo[0].name);
    console.log("I WORK");
};