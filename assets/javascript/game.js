$(document).ready(function() {

    var chosenUser = false;
    var chosenEnemy = false;
    var messageLock = false;
    var attackLock = false;

    var userAttack;
    var userHealth;
    var enemyAttack;
    var enemyHealth;

    // STORE ALL DEFEATED ENEMIES INTO AN ARRAY
    var defeatedEnemies = [];

    // HIDE RESTART BUTTON AT THE START OF THE GAME
    var restartButton = $('#restart-button');
    restartButton.hide();
    var attackButton = $('#attack-button');

    var userCounterAttack = 0;

    // CREATE OBJECTS FOR EACH FIGHTER
    var bb8 = {
        name: 'BB-8',
        health: 100,
        attack: 5
    }

    var obiWan = {
        name: 'OBI-WAN',
        health: 250,
        attack: 20
    }

    var r2d2 = {
        name: 'R2-D2',
        health: 100,
        attack: 15,
    }

    var yoda = {
        name: 'YODA',
        health: 300,
        attack: 25
    }

    var porg = {
        name: 'PORG',
        health: 50,
        attack: 5,
    }

    var darthVader = {
        name: 'DARTH VADER',
        health: 200,
        attack: 25
    }

    var stormtrooper = {
        name: 'STORM TROOPER',
        health: 100,
        attack: 15
    }

    var darthMaul = {
        name: 'DARTH MAUL',
        health: 150,
        attack: 20
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

            $('.hero-2').css('opacity', '0.3');
            $('.hero-3').css('opacity', '0.3');
            $('.hero-4').css('opacity', '0.3');

        } else if ((chosenUser == true) && (chosenEnemy == false)) {
            chosenEnemy = true;
            enemy = chosenEnemy;
            enemy = this;

            enemyAttack = bb8.attack;
            enemyHealth = bb8.health;

            //$(enemy).clone(this).appendTo('#enemy-container');
            $('#enemy-box').css('border', '1px solid red').css('box-shadow', '0px 0px 10px 2px red');
            $('#enemy-container').html(enemy);
            $('#enemy-health-points').html(bb8.health);
            $('#enemy-attack-points').html(bb8.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }

        

        


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
            $('#enemy-health-points').html(obiWan.health);
            $('#enemy-attack-points').html(obiWan.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }




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
            $('#enemy-health-points').html(r2d2.health);
            $('#enemy-attack-points').html(r2d2.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }


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
            $('#enemy-health-points').html(yoda.health);
            $('#enemy-attack-points').html(yoda.attack);
        }

        if (messageLock == false) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE EMPIRE!<h2> <p>(and their evil porg)<p>');
            messageLock = true;
        }


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
            $('#enemy-health-points').html(porg.health);
            $('#enemy-attack-points').html(porg.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!<h2>');
            messageLock = true;
        }


    

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
            $('#enemy-health-points').html(darthVader.health);
            $('#enemy-attack-points').html(darthVader.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!</h2>');
            messageLock = true;
        }



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
            $('#enemy-health-points').html(stormtrooper.health);
            $('#enemy-attack-points').html(stormtrooper.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!</h2>');
            messageLock = true;
        }



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
            $('#enemy-health-points').html(darthMaul.health);
            $('#enemy-attack-points').html(darthMaul.attack);
        }

        if ((messageLock == false)) {
            $('.message').css('border', '1px solid yellow');
            $('.message').html('<h2>DEFEAT THE REBELLION!<h2>');
            messageLock = true;
        }


    })


    // ATTACK BUTTON
    $('#attack-button').click(function() {
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

        // IF USER DIES
            // REPLACE 'ATTACK' BUTTON WITH 'RESTART' BUTTON
                // RESET GAME
        if (userHealth <= 0) {
            $('#restart-button').show();
            $('#attack-button').hide();

                $('.message').css('border', '1px solid yellow').css('font-weight', 'bold');
                $('.message').html('<h2>GAME OVER.</h2><br><h2>PRESS RESTART TO PLAY AGAIN.</h2>');

        }

        // IF A SINGLE ENEMY DIES
            // REPLACE CURRENT ENEMY WITH NEW ENEMY
            // PUSH CURRENT ENEMY INTO defeatedEnemies ARRAY
        if (enemyHealth <= 0) {
            defeatedEnemies.push(enemy);
            $('#defeated-enemies').append(enemy);
            console.log(defeatedEnemies);

            // TURN chosenEnemy BACK TO FALSE TO LET NEW CLICKED FIGHTER GOES TO ENEMY WINDOW
            chosenEnemy = false;

            // REMOVE CURRENT ENEMY IMAGE

        }

        // IF USER DEFEATS ALL ENEMIES
        if (defeatedEnemies.length === 4) {

            
            $('.message').css('border', '1px solid yellow').css('font-weight', 'bold');
            $('.message').html('<h2>YOU WIN!</h2><br><h2>PLAY AGAIN?</h2>');
   

            console.log('win');
            $('#restart-button').show();
            $('#attack-button').hide();


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

        // $('.message').css('')
        // $('.message').hide();
    }

    
})