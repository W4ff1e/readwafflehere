
const json = require(JSON/novels.json)
//var novelInfo = JSON.parse(novels.json)
function test(){
    document.getElementById("novelTitle").innerHTML = novelInfo[0].name;
    alert(novelInfo[0].name);
    console.log("I WORK");
};