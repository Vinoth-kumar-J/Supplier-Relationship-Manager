
const Header = () => {
    return (
        <>
            <div className="header" >
                <nav className="nav-link nav-link-expand-sm bg-dark nav-link-dark" style={{ textAlign:'right',
                listStyle: "none",
                 border: 500,
                 textDecoration: "none",
                 height:80}}>
                <a href="#default" className="Details" >User Details</a>
                <p style={{textAlign:'left'}}>Supplier Relationship Manager</p>
                    
                </nav>
            </div>

        </>
    )
}

export default Header;