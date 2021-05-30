
import '../../App.css';

function NavBar (){
 return <>
    <nav>
        <h1 className="tituloPrincipal">Panaderia Inmortales</h1>
        <ul>
            <a href=""> <p className="categoriasNavBar">Facturas</p></a>
            <a href=""><p className="categoriasNavBar">Panes</p></a>
            <a href=""><p className="categoriasNavBar">Pastas</p></a>
        </ul>
        
    </nav>
    </>;
}

export default NavBar;