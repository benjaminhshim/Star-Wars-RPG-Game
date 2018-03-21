// NOTES TO THE TA
    // RESTART BUTTON NOT WORKING
    // DIVS HOLDING IMAGES ARE COLLAPSING
    // CHOOSE A RANDOM FIGHTER -- UNFINISHED
    // OPTION TO CHOOSE A RANDOM ENEMY AFTER AN ENEMY DIES -- UNFINISHED


$(document).ready(function() {

    var chosenUser = false;
    var chosenEnemy = false;
    var messageLock = false;
    var attackLock = false;
    var healthLock = false;

    var userAttack;
    var userHealth;
    var enemyAttack;
    var enemyHealth;

    // STORE ALL DEFEATED ENEMIES INTO AN ARRAY
    var defeatedEnemies = [];

    var currentEnemy= [];


    // HIDE RESTART BUTTON AT THE START OF THE GAME
    var restartButton = $('#restart-button');
    restartButton.hide();
    var attackButton = $('#attack-button');

    var userCounterAttack = 0;

    // CREATE ARRAYS FOR OPTION TO CHOOSE A RANDOM FIGHTER
    // var heroArray = [bb8, obiWan, r2d2, yoda];
    // var villainArray = [porg, darthVader, tieFighter, darthMaul];


    // CREATE OBJECTS FOR EACH FIGHTER
    var bb8 = {
        name: 'BB-8',
        health: 100,
        attack: 5,
        enemy: true,
    }

    var obiWan = {
        name: 'OBI-WAN',
        health: 250,
        attack: 20,
        enemy: true,

    }

    var r2d2 = {
        name: 'R2-D2',
        health: 100,
        attack: 15,
        enemy: true,

    }

    var yoda = {
        name: 'YODA',
        health: 300,
        attack: 25,
        enemy: true,

    }

    var porg = {
        name: 'PORG',
        health: 50,
        attack: 5,
        enemy: true,

    }

    var darthVader = {
        name: 'DARTH VADER',
        health: 200,
        attack: 25,
        enemy: true,

    }

    var stormtrooper = {
        name: 'STORM TROOPER',
        health: 100,
        attack: 15,
        enemy: true,

    }

    var darthMaul = {
        name: 'DARTH MAUL',
        health: 150,
        attack: 20,
        enemy: true,

    }

    // CREATE CLICK FUNCTIONS FOR EACH FIGHTER
    // BB-8
    $('#bb-8').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;


            userAttack = bb8.attack;
            userHealth = bb8.health;

            // PRINT TO #user-container
            $(user).clone(this).appendTo('#user-container');
            
            // ADD STYLE TO #user-container
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');

            // PRINT STATS TO #user-container
            $('#user-health-points').html(bb8.health);
            $('#user-attack-points').html(bb8.attack); 

            // FADE OUT OTHER HEROES
            $('.hero-2').css('opacity', '0.3');
            $('.hero-3').css('opacity', '0.3');
            $('.hero-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            currentEnemy[currentEnemy.length] = this;

            enemyAttack = bb8.attack;
            enemyHealth = bb8.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');

            $('#enemy-container').html(enemy);

            // enemybb8 = $('<img src="assets/images/bb8.jpg"><p style="padding-top:10px;font-size:24px">BB-8</p>');
            // $('#enemy-container').append(enemybb8);

            $('#enemy-health-points').html(bb8.health);
            $('#enemy-attack-points').html(bb8.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }

        // RE-ENGAGE ATTACK BUTTON AFTER SINGLE ENEMY DIES
        attackLock = false;
        healthLock = false;
        


    })

    // OBI-WAN
    $('#obi-wan').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;
            user = chosenUser;
            user = this;

            userAttack = obiWan.attack;
            userHealth = obiWan.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(obiWan.health);
            $('#user-attack-points').html(obiWan.attack);

            $('.hero-1').css('opacity', '0.3');
            $('.hero-3').css('opacity', '0.3');
            $('.hero-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = obiWan.attack;
            enemyHealth = obiWan.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');

            $('#enemy-container').html(enemy);

            // enemyObiWan = $('<img src="assets/images/obi-wan.png"><p style="padding-top:10px;font-size:24px">OBI-WAN</p>');
            // $('#enemy-container').append(enemyObiWan);

            $('#enemy-health-points').html(obiWan.health);
            $('#enemy-attack-points').html(obiWan.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }

        attackLock = false;
        healthLock = false;


    })

    // R2-D2
    $('#r2-d2').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = r2d2.attack;
            userHealth = r2d2.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(r2d2.health);
            $('#user-attack-points').html(r2d2.attack); 

            $('.hero-1').css('opacity', '0.3');
            $('.hero-2').css('opacity', '0.3');
            $('.hero-4').css('opacity', '0.3');

            
        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = r2d2.attack;
            enemyHealth = r2d2.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');

            $('#enemy-container').html(enemy);

            // enemyr2d2 = $('<img src="assets/images/r2d2.png"><p style="padding-top:10px;font-size:24px">R2-D2</p>');
            // $('#enemy-container').append(enemyr2d2);

            $('#enemy-health-points').html(r2d2.health);
            $('#enemy-attack-points').html(r2d2.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }

        attackLock = false;
        healthLock = false;
    })

    // YODA
    $('#yoda').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = yoda.attack;
            userHealth = yoda.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(yoda.health);
            $('#user-attack-points').html(yoda.attack); 

            $('.hero-1').css('opacity', '0.3');
            $('.hero-2').css('opacity', '0.3');
            $('.hero-3').css('opacity', '0.3');
    
        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = yoda.attack;
            enemyHealth = yoda.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);

            // enemyYoda = $('<img src="assets/images/yoda.png"><p style="padding-top:10px;font-size:24px">YODA</p>');
            // $('#enemy-container').append(enemyYoda);

            $('#enemy-health-points').html(yoda.health);
            $('#enemy-attack-points').html(yoda.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }
        attackLock = false;
        healthLock = false;

    })

    // PORG
    $('#porg').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = porg.attack;
            userHealth = porg.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');

            $('#user-health-points').html(porg.health);
            $('#user-attack-points').html(porg.attack); 

            $('.villain-2').css('opacity', '0.3');
            $('.villain-3').css('opacity', '0.3');
            $('.villain-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = porg.attack;
            enemyHealth = porg.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);

            // enemyPorg = $('<img src="assets/images/porg.jpg"><p style="padding-top:10px;font-size:24px">PORG</p>');
            // $('#enemy-container').append(enemyPorg);

            $('#enemy-health-points').html(porg.health);
            $('#enemy-attack-points').html(porg.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!<h2>');
            messageLock = true;
        }

        attackLock = false;
        healthLock = false;


    

    })

    // DARTH VADER
    $('#darth-vader').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = darthVader.attack;
            userHealth = darthVader.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(darthVader.health);
            $('#user-attack-points').html(darthVader.attack); 

            $('.villain-1').css('opacity', '0.3');
            $('.villain-3').css('opacity', '0.3');
            $('.villain-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = darthVader.attack;
            enemyHealth = darthVader.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);

            // enemyDarthVader = $('<img src="assets/images/darth-vader.png"><p style="padding-top:10px;font-size:24px">DARTH VADER</p>');
            // $('#enemy-container').append(enemyDarthVader);

            $('#enemy-health-points').html(darthVader.health);
            $('#enemy-attack-points').html(darthVader.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!</h2>');
            messageLock = true;
        }

        attackLock = false;
        healthLock = false;


    })

    // STORMTROOPER
    $('#stormtrooper').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = stormtrooper.attack;
            userHealth = stormtrooper.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(stormtrooper.health);
            $('#user-attack-points').html(stormtrooper.attack);
            
            $('.villain-1').css('opacity', '0.3');
            $('.villain-2').css('opacity', '0.3');
            $('.villain-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;
            enemyAttack = stormtrooper.attack;
            enemyHealth = stormtrooper.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);

            // enemyStormTrooper = $('<img src="assets/images/storm-trooper-helmet.png"><p style="padding-top:10px;font-size:24px">STORMTROOPER</p>');
            // $('#enemy-container').append(enemyStormTrooper);

            $('#enemy-health-points').html(stormtrooper.health);
            $('#enemy-attack-points').html(stormtrooper.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!</h2>');
            messageLock = true;
        }


        attackLock = false;
        healthLock = false;

    })

    // DARTH MAUL
    $('#darth-maul').click(function() {

        if ((chosenUser == false)) {
            chosenUser = true;  
            user = chosenUser;
            user = this;

            userAttack = darthMaul.attack;
            userHealth = darthMaul.health;

            $(user).clone(this).appendTo('#user-container');
            $('#user-box').css('border', '1px solid green').css('box-shadow', '0px 0px 10px 2px green');
            $('#user-health-points').html(darthMaul.health);
            $('#user-attack-points').html(darthMaul.attack); 


            $('.villain-1').css('opacity', '0.3');
            $('.villain-2').css('opacity', '0.3');
            $('.villain-3').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = darthMaul.attack;
            enemyHealth = darthMaul.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);

            // enemyDarthMaul = $('<img src="assets/images/darth-maul.png"><p style="padding-top:10px;font-size:24px">DARTH MAUL</p>');
            // $('#enemy-container').append(enemyDarthMaul);

            $('#enemy-health-points').html(darthMaul.health);
            $('#enemy-attack-points').html(darthMaul.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!<h2>');
            messageLock = true;
        }
        attackLock = false;
        healthLock = false;


    })


    // ATTACK BUTTON
    $('#attack-button').click(function() {

        if ((attackLock == false) && (healthLock == false)) {
            // USER ATTACK INCREMENTS
            userCounterAttack = userCounterAttack + userAttack;

            // USERHEALTH DECREASES BY ENEMY'S ATTACK VALUE
            // ENEMYHEALTH DECREASES BY USER'S INCREMENTING ATTACK VALUE
            userHealth = userHealth - enemyAttack;
            enemyHealth = enemyHealth - userCounterAttack;

            // PRINT STATS TO WINDOW
            $('#user-health-points').html(userHealth);
            $('#enemy-health-points').html(enemyHealth);
            $('#user-attack-points').html(userCounterAttack);
        }


        // IF USER DIES
            // REPLACE 'ATTACK' BUTTON WITH 'RESTART' BUTTON
                // RESET GAME
        if (userHealth <= 0) {
            $('#restart-button').show();
            $('#attack-button').hide();

            // DISPLACE GAME OVER MESSAGE
            $('.message').css('border', '1px solid yellow').css('font-weight', 'bold');
            $('.message').html('<h2>GAME OVER.</h2><br><h2>PRESS RESTART TO PLAY AGAIN.</h2>');

        }

        // WHEN enemyHealth <= 0, DISABLE ATTACK BUTTON
        if ((userHealth > 0) && (enemyHealth <= 0) && (attackLock == false)) {
            attackLock = true;
        }

        // IF A SINGLE ENEMY DIES
            // REPLACE CURRENT ENEMY WITH NEW ENEMY
            // PUSH CURRENT ENEMY INTO defeatedEnemies ARRAY
        if (enemyHealth <= 0 && healthLock == false) {
            healthLock = true;
            //defeatedEnemies.push(enemy);
            defeatedEnemies[defeatedEnemies.length] = enemy;
            $('#defeated-enemies').append(enemy);
            console.log(defeatedEnemies);

            // TURN chosenEnemy BACK TO FALSE TO LET NEW CLICKED FIGHTER GOES TO ENEMY WINDOW
            chosenEnemy = false;

            // CHOOSE A RANDOM ENEMY 
            // if (enemyHealth <= 0 && $(enemy).hasClass('villain') && enemyDeadArray.indexOf(enemy) < 0) {
            //    var randomEnemy = villainArray[Math.floor(Math.random() * villainArray.length)];
            // }
        }

    
        // IF USER DEFEATS ALL ENEMIES
        if (defeatedEnemies.length === 4) {

            // DISPLAY MESSAGE
            $('.message').css('border', '1px solid yellow').css('font-weight', 'bold');
            $('.message').html('<h2>YOU WIN!</h2><br><h2>PLAY AGAIN?</h2>');
   

            console.log('win');

            // REPLACE ATTACK BUTTON WITH RESTART BUTTON
            $('#attack-button').hide();
            $('#restart-button').show();


        }


    })

    // RESTART BUTTON
    $('#restart-button').click(function() {
        resetGame();

    })

    // RESET GAME FUNCTION
    function resetGame() {

        // REPLACE 'RESTART' BUTTON WITH 'ATTACK' BUTTON
        $('#restart-button').hide();
        $('#attack-button').show();

        // EMPTY USER AND ENEMY SLOTS
        chosenUser = false;
        chosenEnemy = false;

        // RESET ALL STATS TO 0
        userHealth = 0;
        userAttack = 0;
        userCounterAttack = 0;
        enemyHealth = 0;
        enemyAttack = 0;

        $('#user-health-points').html('--');
        $('#user-attack-points').html('--');
        $('#enemy-health-points').html('--');
        $('#enemy-attack-points').html('--');

        $('#user-container').empty();
        $('#enemy-container').empty();

        $('.message').css(' ');
        $('.message').hide();

        messageLock = false;
        attackLock = false;

    }

    
})