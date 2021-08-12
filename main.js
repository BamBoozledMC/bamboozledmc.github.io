var ping = require ("net-ping");

var session = ping.createSession ();


session.pingHost ("bamboozledmc.xyz", function (error, target) {
    if (error)
        if (error instanceof ping.RequestTimedOutError)
            console.log (target + ": Not alive");
        else
            console.log (target + ": " + error.toString ());
    else
        console.log (target + ": Alive");
});


console.log('Hello World!');
