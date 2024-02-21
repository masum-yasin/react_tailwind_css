const FoodCart = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={image} alt="Shoes" className="rounded-xl" />
          
        </figure>
        <h3 className=" absolute right-0 bg-yellow-600 px-4 py-2  text-white">${price}</h3>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
         
          <p>{recipe}</p>
          <div className="card-actions">
          <button className="btn btn-outline btn-success bg-slate-600 border-0 border-b-4 mt-4 border-orange-600">Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FoodCart;
