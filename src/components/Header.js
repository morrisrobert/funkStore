import { Link } from "react-router-dom"

const Header =()=> {

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="row">
                    <div className="col-md-5">
                        <h1 className="display-1 text-capitalize text-md-center">
                            <Link to='/'>
                                my vinyl store
                            </Link>
                        </h1>
                    </div>
                    <div className="col-md-7">
                        <nav className="nav justify-content-around text-uppercase">
                            <Link to='/artist'>artist</Link>
                            <Link to='/label'>label</Link>
                            <Link to='/genre'>genre</Link>
                            <Link to='/poster'>poster</Link>
                            <Link to='/album'>album</Link>
                            <Link to='/user'>user</Link>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

/*Do not export and edit yet until i can figure out my file structure mistake. Also i need to see if i want to add label links and genre. Site souced by satchwerk*/

