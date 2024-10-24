import { Link } from 'react-router-dom';
import '../Component/Navber.css';

const Navber = () => {
  return (
    <>
      <nav className='navber'>
        <div className="container">
          <div className="manu_row">
            <div className="manu_log">
              <h2>E-shop</h2>
            </div>
            <div className="main_manu">
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/service">Service</Link></li>
                <li><Link to="/product">Product</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navber;
