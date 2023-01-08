const Drinks = ({data}) =>{
    return (
        <div className="drink-card">
            <img src={data.strDrinkThumb} alt="" />
            <h2>{data.strDrink}</h2>
            <h4>{data.strInstructions}</h4>
        </div>
    )
}
export default Drinks