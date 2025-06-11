const ProductList=()=>{
    const Products = [
        {id:1,name:"Phone",price:"$699"},
        {id:2,name:"Laptop",price:"$1200"},
        {id:3,name:"Headphones",price:"$199"},
    ];
    return(
        <div>
            {Products.map((Products)=>(
                <ul key={Products.id}>
                    <li>{Products.name}</li>
                    <li>{Products.price}</li>
                </ul>
            ))}
        </div>
    );
}
export default ProductList;