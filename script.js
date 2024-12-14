let gym = "can access gym";
function apartment(){
    let kitchen = 100;
    let bedroom = 1;
    function room(){
        let light = 1;
        kitchen++
        console.log(light, kitchen);
        
    }
    return room
}
let firstRoom = apartment()
console.dir(firstRoom);
firstRoom()
firstRoom()
firstRoom()
let secondRoom = apartment()
console.dir(secondRoom);
secondRoom()

{const a = "10.0"
const b = "20.25"

console.log(parseFloat(a) + parseFloat(b));
console.log(a - b);
console.log(a * b);
console.log(a / b);
}
{let a = true;
console.log( (a)+ 1);
}

{const a = 1;
const b = "1";
console.log(a == b);
}
 //Array المصفوفات
 const langs = ["Arabic","English","Frensh"]
 langs[3] = "الايطالية"
 langs[0] = "العربية"
 langs.push("Duetsch")
 console.log(langs);
 