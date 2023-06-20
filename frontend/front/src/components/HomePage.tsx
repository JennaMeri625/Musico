
export function HomePage() {
    return (
    <div style={{paddingLeft: 150, paddingTop: 50}}>
        <input type="text" placeholder="zip code" style={{marginRight: 10}}/>
        <input type="text" placeholder="keywords: flute, wedding, singer, etc" style={{marginRight: 10}}/>
        <button type="submit">Search</button>
    </div>
    )
};