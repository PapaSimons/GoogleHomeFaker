//init vars
var u = new SpeechSynthesisUtterance();
var voices = [];
var pname, oldname = "Sarah";
var rname, oldrname = "Johnny";
var dovolumeled = 0;
var scripts = [];

//on ready event for the speech api
window.speechSynthesis.onvoiceschanged = function () {
    voices = window.speechSynthesis.getVoices();
    u.rate = 0.8;
    u.voice = voices[0];
    /* optional
    u.pitch = 0.9;
    u.volume = 0.9;
    */
    //print all voices -- params: voiceURI: "Amelie", name: "Amelie", lang: "fr-CA", localService: true
    for (i = 0; i < voices.length; i++) {
        console.log(i + " - " + voices[i].name + " , lang: " + voices[i].lang);
    }
    console.log("All voices loaded");
    //check localstore
    if (localStorage.getItem('lang')) {
        changelang(localStorage.getItem('lang'));
    } else {
        changelang("en-GB"); //default to english
    }

    //check localstore for names
    if (localStorage.getItem('pname')) {
        $('#changen').val(localStorage.getItem('pname'));
        changename();
    }
    if (localStorage.getItem('rname')) {
        $('#changer').val(localStorage.getItem('rname'));
        changerelative();
    }
    pop();
};

//function that does the tts
function speakme(me) {
    //set the text
    u.text = me;
    //stop existing voice
    window.speechSynthesis.cancel();
    //play the text
    window.speechSynthesis.speak(u);
    //blink the led
    volumeled();
    console.log("Saying: " + me);
}

//on voice finished playing event
u.onend = function (e) {
    //stop the volume led
    clearInterval(dovolumeled);
    //kill all intervals
    for(i=0; i<100; i++){
        window.clearInterval(i);
    }
    console.log('Finished in ' + event.elapsedTime + ' seconds.');
};

function changename() {
    pname = $('#changen').val();
    //save to storage
    localStorage.setItem('pname', pname);
    //repopulate
    pop(); 
}

function changerelative() {
    rname = $('#changer').val();
    //save to storage
    localStorage.setItem('rname', rname);
    //repopulate
    pop(); 
}

function changelang(l) {
    //remove button color
    $('#lbutt_en-GB').removeClass('button-primary');
    $('#lbutt_zh-CN').removeClass('button-primary');
    $('#lbutt_id-ID').removeClass('button-primary');
    //set the voice
    u.voice = getvoice(l);
    //set the language
    scripts = getscripts(l);
    $("#lbutt_" + l).addClass('button-primary');
    console.log("changed to voice: " + u.voice.name);
    //save to localstore
    localStorage.setItem('lang', l);
    //repopulate
    pop();
}

function getvoice(ll) {
    if (u.voice.lang != ll) {
        //find the whole lang and give preference to google voices
        for (i = 0; i < voices.length; i++) {
            if (voices[i].lang.replace("_", "-") == ll && voices[i].name.toLowerCase().includes("google")) {
                return voices[i];
            }
        }
        //find the whole lang
        for (i = 0; i < voices.length; i++) {
            if (voices[i].lang.replace("_", "-") == ll) {
                return voices[i];
            }
        }
        //find by part of the language
        for (i = 0; i < voices.length; i++) {
            if ((voices[i].lang.replace("_", "-").split("-")[0] == ll.split("-")[0]) ||
                (voices[i].lang.replace("_", "-").split("-")[1] == ll.split("-")[1])) {
                return voices[i];
            }
        }
    }
    return voices[0];
}

function getscripts(ll){
    for (i = 0; i < allscripts.length; i++) {
        if (allscripts[i].lang == ll){
            return allscripts[i].scripts;
        }
    }
    return allscripts[0].scripts;
}

//free text input
function freetext() {
    speakme($('#freetext').val());
}


function volumeled() {
    var blinkspeed = 1300; //milliseconds
    blinkme();
    clearInterval(dovolumeled);
    dovolumeled = setInterval(function () {
        blinkme();
    }, blinkspeed);
}

function blinkme() {
    $.ajax({
        method: "POST",
        url: "http://localhost:8888/googoo/vol",
        data: {}
    }).done(function (msg) {
        console.log("response: " + msg);
    });
}

function fallback() {
    for (i = 0; i < allscripts.length; i++) {
        var fb = allscripts[i];
        if (u.voice.lang.split("-")[0] == fb.lang.split("-")[0]) {
            speakme(fb.fallbacks[Math.floor(Math.random() * fb.fallbacks.length)]);
        }
    }
}

function parseme(tex) {
    return tex.replace(oldname, pname).replace(oldrname, rname).replace("(GG)", "");
}

function pop() {
    $("#scripts").empty();
    for (obj = 0; obj < scripts.length; obj++) {
        $("#scripts").append("<h1>" + scripts[obj].title + "</h1>");
        for (i = 0; i < scripts[obj].texts.length; i++) {
            var tex = scripts[obj].texts[i];
            //console.log(i + " " + tex);
            var appendme = "";
            if (tex.includes("(GG)")) {
                var sent = parseme(tex);
                var eng = allscripts[0].scripts;
                appendme += "<div class='onesenta' id='sent_" + obj + "_" + i + "'>";
                appendme += "<span>" + sent + "</span>";
                if (u.voice.lang != "en-GB" && eng[obj].texts[i]) {
                    appendme += "<br>";
                    appendme += "<span class='onesentt'> * ";
                    appendme += parseme(eng[obj].texts[i]);
                    appendme += "</span>";
                }
                appendme += "</div>";
                $("#scripts").append(appendme);
                $("#sent_" + obj + "_" + i).click(function () {
                    var ar = $(this).attr("id").split('_');
                    speakme(parseme(scripts[ar[1]].texts[ar[2]]));
                });
            } else {
                var sent = tex.replace("(" + oldname + ")", "");
                appendme += "<div class='onesentb'>";
                appendme += sent;
                appendme += "</div>";
                $("#scripts").append(appendme);
            }

        }
    }
}