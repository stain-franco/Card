const Album = () => {
    const albumWishmaster = {
        imageUrl : "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Nightwish_Wishmaster.jpg/220px-Nightwish_Wishmaster.jpg",
        band : "Nightwish",
        album : "Wishmaster",
        songs : [ "She Is My Sin", "The Kingslayer", "Come Cover Me", "Wanderlust", "Wishmaster", "Deep Silence complete"],
        stock: 50
    }
    return (
        <div className="album">
            <img src="https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/Nightwish_Wishmaster.jpg/220px-Nightwish_Wishmaster.jpg" alt="" />
            <h1>Nightwish</h1>
            <h3>Wishmaster</h3>
            <ul>
                <li>1. She Is My Sin</li>
                <li>2. The Kingslayer</li>
                <li>3. Come Cover Me</li>
                <li>4. Wanderlust</li>
                <li>5. Wishmaster</li>
                <li>6. Deep Silence complete</li>
            </ul>
            <button>Comprar</button>
        </div>
    )
}

export default Album