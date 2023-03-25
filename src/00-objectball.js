function gameObject(){
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["Black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1,
                },
                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 7,

                },
                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15,
                },
                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5,
                },
                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1,
                },
            },
        },
        away: {
            teamName: "Charlotte Hornets",
            colors: ["Turquoise", "Purple"],
            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2,
                },
                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10,

                },
                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },
                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },
                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 22,
                    blocks: 5,
                    slamDunks: 12,
                },
            },
        },
    }
}

console.log(gameObject());

function numPointsScored(playerName){
    return playerName.points;
}

function shoeSize(playerName){
    return playerName.shoe;
}

function teamColors(teamName){
    let object = gameObject();
    for (let status in object){
        console.log(status)
        for (let key in object[status]){
            if (object[status][key] === teamName){
                return object[status]['colors'];
            }
        }
    }
}

function teamNames(){
    let object = gameObject();
    let teamArr = []

    for (let status in object){
        console.log(status)
        for (let key in object[status]){
            if (key === "teamName"){
                teamArr.push(object[status][key]);
            }
        }
    }
    return teamArr;
}

function playerNumbers(teamName){
    let object = gameObject();

    for (let status in object){
        for (let key in object[status]){
            if (key === "players" && object[status]['teamName'] === teamName){
                let arr = Object.values(object[status][key]);
                let x = arr.map(x => x.number);
                return x;
            }
        }
    }
}

function playerStats(playerName){
    let object = gameObject();
    let home = Object.entries(object.home['players']);
    let away = Object.entries(object.away.players);
    const players = [...home, ...away]
    console.log(players, "222");
    let y =  players.find(el => {
        if (el[0] === playerName){
            return el;
        }
    });
    return (y[1]);
}

function bigShoeRebounds(){
    let object = gameObject();
    let counter = 0;
    let rb;
    Object.values(object).forEach(status => {
        Object.values(status.players).forEach(player => {
            if(player.shoe > counter){
                counter = player.shoe;
                rb = player.rebounds
            }
        })
    });

    return rb;
}

