window.onload = function() {
    var typeDiv = document.getElementById("typing");
    let x = 0;
    var str = typeDiv.textContent; 
    typeDiv.textContent = '';

function typing() {
    while (x<str.length) {
        typeDiv.textContent += str.charAt(x);
        x++;
        break;
}
    setTimeout(typing, 200);
}
typing();

}


let x = 0;

function introvert1() {
    x++;
    console.log(x)
    document.getElementById("answer13").style.backgroundColor = "#95D47A";
    document.getElementById("answer13").style.width = "48vw";
}

function extrovert1() {
    x--;
    console.log(x)
    document.getElementById("answer11").style.width = "48vw";
    document.getElementById("answer11").style.backgroundColor = "#95D47A";

}

function introvert2() {
    x++;
    console.log(x)
    document.getElementById("answer23").style.backgroundColor = "#95D47A";
    document.getElementById("answer23").style.width = "48vw";
}

function extrovert2() {
    x--;
    console.log(x)
    document.getElementById("answer21").style.width = "48vw";
    document.getElementById("answer21").style.backgroundColor = "#95D47A";

}

function introvert3() {
    x++;
    console.log(x)
    document.getElementById("answer31").style.backgroundColor = "#95D47A";
    document.getElementById("answer31").style.width = "48vw";
}

function extrovert3() {
    x--;
    console.log(x)
    document.getElementById("answer33").style.width = "48vw";
    document.getElementById("answer33").style.backgroundColor = "#95D47A";

}

function introvert4() {
    x++;
    console.log(x)
    document.getElementById("answer43").style.backgroundColor = "#95D47A";
    document.getElementById("answer43").style.width = "48vw";
}

function extrovert4() {
    x--;
    console.log(x)
    document.getElementById("answer41").style.width = "48vw";
    document.getElementById("answer41").style.backgroundColor = "#95D47A";

}

function introvert5() {
    x++;
    console.log(x)
    document.getElementById("answer53").style.backgroundColor = "#95D47A";
    document.getElementById("answer53").style.width = "48vw";
}

function extrovert5() {
    x--;
    console.log(x)
    document.getElementById("answer51").style.width = "48vw";
    document.getElementById("answer51").style.backgroundColor = "#95D47A";

}

function introvert6() {
    x++;
    console.log(x)
    document.getElementById("answer62").style.backgroundColor = "#95D47A";
    document.getElementById("answer62").style.width = "48vw";
}

function extrovert6() {
    x--;
    console.log(x)
    document.getElementById("answer61").style.width = "48vw";
    document.getElementById("answer61").style.backgroundColor = "#95D47A";

}

function introvert7() {
    x++;
    console.log(x)
    document.getElementById("answer71").style.backgroundColor = "#95D47A";
    document.getElementById("answer71").style.width = "48vw";
}

function extrovert7() {
    x--;
    console.log(x)
    document.getElementById("answer73").style.width = "48vw";
    document.getElementById("answer73").style.backgroundColor = "#95D47A";

}

function introvert8() {
    x++;
    console.log(x)
    document.getElementById("answer83").style.backgroundColor = "#95D47A";
    document.getElementById("answer83").style.width = "48vw";
}

function extrovert8() {
    x--;
    console.log(x)
    document.getElementById("answer81").style.width = "48vw";
    document.getElementById("answer81").style.backgroundColor = "#95D47A";

}

function introvert9() {
    x++;
    console.log(x)
    document.getElementById("answer93").style.backgroundColor = "#95D47A";
    document.getElementById("answer93").style.width = "48vw";
}

function extrovert9() {
    x--;
    console.log(x)
    document.getElementById("answer91").style.width = "48vw";
    document.getElementById("answer91").style.backgroundColor = "#95D47A";

}
function introvert10() {
    x++;
    console.log(x)
    document.getElementById("answer103").style.backgroundColor = "#95D47A";
    document.getElementById("answer103").style.width = "48vw";
}

function extrovert10() {
    x--;
    console.log(x)
    document.getElementById("answer101").style.width = "48vw";
    document.getElementById("answer101").style.backgroundColor = "#95D47A";

}

function results() {
    if (x > 5) {
        document.getElementById("personalitytype").innerHTML = "Introvert"; 
        document.getElementById("description").innerHTML = "While you tend to be more reserved than others, you're more aware of your own thoughts and feelings. While you like spending time with others, you also need time alone to feel refreshed. You are often most productive when working independently.";
    }
    
    else if (x < 0) {
        document.getElementById("personalitytype").innerHTML = "Extrovert"; 
        document.getElementById("description").innerHTML = "You're more outgoing and outspoken than others and you feel your best when you're around other people. You tend to feel easily bored or restless when you're alone. You tend to be more productive when working with others.";
    }
    
    else {
        document.getElementById("personalitytype").innerHTML = "Ambivert";
        document.getElementById("description").innerHTML = "You happen to fall in the middle of the introvert/extrovert spectrum, although you may lean towards one extreme or the other. You can be charismatic and assertive while also being thoughtful and being good at listening to others. You also have a good sense of when to trust people and you tend to feel comfortable in most environments.";
    }
}

