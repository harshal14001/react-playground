const ProductInfo=()=>{
    const Product ={
        name:"Laptop",
        price:"$1200",
        availability:"In stock"

    };
    return(
        <div>
            <h1>Name:{Product.name}</h1>
            <h1>Name:{Product.price}</h1>
            <h1>Name:{Product.availability}</h1>
        </div>
    );
};
export default ProductInfo;