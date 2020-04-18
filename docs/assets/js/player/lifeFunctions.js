
let breath = 180;
let fullBreathTimer = 0;
let noBreathTimer = 0;
let pressure = 50;

let heartBeat = false;

var breathMode = {
    inhale: 0,
    exhale: 1
};

let currentBreathMode = breathMode.exhale;



function updateLife() {
    
    if(keyDown[k.w]) {
        if(breath === 0) currentBreathMode = breathMode.inhale;
    }

    if(keyDown[k.s]) {
        if(breath === constants.lifeFuncs.breath.fullBreath) currentBreathMode = breathMode.exhale;
    }

    breathe();

    if(keyPress[k.x]) {
        heartbeat();
    }

    pressure-=0.25;
    if(pressure<=0){
        pressure = 0;
    }
};

function breathe() {
    switch (currentBreathMode) {
        case breathMode.inhale:
            breath += 1;
            if(breath >= constants.lifeFuncs.breath.fullBreath) {
                breath = constants.lifeFuncs.breath.fullBreath;
                fullBreathTimer++;
                if(fullBreathTimer >= 600) {
                    //cough and lose breath or something
                }
            } else {
                fullBreathTimer = 0;
            }
            break;
        case breathMode.exhale:
            breath -= 2;
            if(breath <= 0) {
                breath = 0;
                noBreathTimer++;
                if(noBreathTimer >= 300) {
                    //cough and lose breath or something
                }
            } else {
                noBreathTimer = 0;
            }
            break;
    }
};

function heartbeat() {
    pressure+=10;
    if(pressure>=100){
        pressure = 100;
    }
    heartBeat = true;
};