( () =>{

    interface SuperHeroe  {
        name: string,
        age?: number,
        powers: string[],
        getNombre?: () => string
    }
    let flash:SuperHeroe = {
        name: "Barry Allen",
        age: 24,
        powers: ['Super Velocidad', 'Viajar en el tiempo']
    }

    flash = {
        name: 'Clark Kent',
        // age: 60,
        powers: ['Super fuerza'],
        getNombre(){
            return this.name
        } 
    }

    console.log( flash );


})()