import {FaMoneyBillWave, FaUser} from 'react-icons/fa'
import './Nav.css'
const Nav = () => {
  return (
    <nav className="nav bg-black">
            <div className="container-fluid">
                <div className="container navbar py-3">
                    <div className="navbar-brand text-white ">
                        <h1 className="heading">Main Dashboard</h1>
                    </div>
                    <div className="nav-item">
                        <div className="d-flex gap-2 align-items-center text-white p-2">
                            <div className='bg-dark mb-1 px-2 user'>
                                <FaUser className='FaUser' />
                            </div>
                            <h5 className='heading'>User</h5>

                        </div>
                    </div>
                   
                </div>
            </div>

        </nav>
  )
}

export default Nav
