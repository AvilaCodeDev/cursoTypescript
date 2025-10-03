( () => {

    interface Client{
        name: string,
        age?: number
        address: Address,
        getFullAddress( id:number ):void
    }

    interface Address{
        id: number,
        zip: string,
        city: string
    }

    const client: Client  = {
        name: "Marco",
        age: 29,
        address:{
            id: 125,
            zip: 'KYW SUD',
            city: 'Otawa'
        },
        getFullAddress( id:number ){
            return this.address.city
        }
    }

    const client2:Client = {
        name: "Erika",
        age: 26,
        address:{
            city: 'Toronto',
            id: 120,
            zip: 'KYW SUD'
        },
        getFullAddress( id:number ){
            return this.address.city
        }
    }
})()