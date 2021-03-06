var constants = {
    testOrganizer: {
        EXAMPLE_DELETE_ME_LATER : 1277336
    },
    ui: {
        // These are the variables that control injection/cssinjector.js
        // To add a new theme var, you must also add it to the injector
        theme: {

            // Theme variables specific to the webpage container
            webpage: {
                bg_color: "#242424",
                text_color: "#ffffff",
                canvas_border: "rgb(63, 63, 63)",
                canvas_bg: "darkslategray",
                loading_animation_color: "#ff4136"
            },

            // Theme variables specific to the game
            game: {
                
            }
        },
            
        // Heart rate monitor UI constants
        heartRate: {
                history_length: 100,

                //300 squares/min
                scroll_speed: 0.8,
                square_size: 0.08,
                pr_width: 4,
                qrs_width: 2,
                qt_width: 5,
                complex_width: 18
        }
    },
    lifeFuncs:{
        breath:{
            fullBreath: 200,
            cough_interval_secs: 4.0
        },
        cardio:{
            optimalPressure: 50
        },
        blink: {
            dryTime: 600
        }
    },
    player:{
        leg_speed: 0.1,
        movement_divider: 50,
        max_movement_speed: 3,
        width: 40,
        height: 75,
        select_range: 10,
        leg_length: 75,
        hip: {
            offset_x: 16,
            offset_y: 35
        },
        defaultX: 535,
        defaultY: -155
    }

};