//add to db

const addToDB = (productID)=>{
    const db = localStorage.getItem('cart')
    const cart = JSON.parse(db) || []
    const newItem ={}

    //if found then add new product id
    if(db){       
        //check if product id already exist
        for(let pd in cart){
            const product = cart[pd]

            if(product.itemId == productID){
                product.qty +=1
                localStorage.setItem('cart', JSON.stringify(cart))
                return 1
            }

        }
        newItem.itemId = productID
        newItem.qty = 1
        cart.push(newItem)
        localStorage.setItem('cart', JSON.stringify(cart))
        return 1
        
    }else{
        newItem.itemId = productID
        newItem.qty = 1
        cart.push(newItem)
        localStorage.setItem('cart', JSON.stringify(cart))
        return 1
    }

    
    
   
    
}

const loadDb = ()=>{
    const db = localStorage.getItem('cart')
    const cart = JSON.parse(db) || []
    return cart
}

const updateDB =(id,term)=>{
    const cart = loadDb() || []
    for(let pd in cart){
        const product = cart[pd]

        if(product.itemId == id){
            if(term=='increase'){
                product.qty +=1
            }
            if(term=='decrease'){
                product.qty -=1
            }
            
            localStorage.setItem('cart', JSON.stringify(cart))
        }

    }
}


const getAllProductsID =()=>{
    const cart = loadDb() || []
    const allProducts =[]

    for(let pd in cart){
        const product = cart[pd]
        const id = Object.keys(product)[0] || ''
        allProducts.push(id)
    }
    return allProducts

}

const deleteFromDB =(id)=>{
    const cart = loadDb()

    if(cart.length>0){
        const newCart = cart.filter(c=>c.itemId!==id)
        localStorage.setItem('cart', JSON.stringify(newCart))
    }
}

export {
    addToDB,
    loadDb,
    getAllProductsID,
    updateDB,
    deleteFromDB
}