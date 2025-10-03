(() => {
    type avenger = {
        name: string,
        weapon: string
    }

    const iroman: avenger = {
        name: 'Iroman',
        weapon: 'Armorsuit'
    }

    const captainAmerica: avenger = {
        name: 'Capitan America',
        weapon: 'Escudo'
    }

    const thor: avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers = [iroman, captainAmerica, thor];

    for( const avenger of avengers ){
        console.log( avenger.name, avenger.weapon )
    }

})()