
export const getOrders = () => {
    return (
        fetch('https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0')
            .then(res => res.json())
        // .then(console.log)

    )
}

export const getRevenue = () => {
    return (
        fetch('https://dummyjson.com/carts')
            .then(res => res.json())
        // .then(console.log)

    )
}

export const getInventory = () => {
    return (
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
        // .then(console.log)


    )
}