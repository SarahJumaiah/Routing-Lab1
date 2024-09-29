import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-purple-600 p-4 flex justify-center items-center">
      <div className="flex items-center">
        <img
          src="https://cdn.tuwaiq.edu.sa/landing/images/logo/logo-h.png"
          alt="Logo"
          className="h-10 mr-4" 
        />
      </div>
      <ul className="flex space-x-5">
        <li>
          <Link to="/" className="text-white hover:text-purple-200">الرئيسية</Link>
        </li>
        <li>
          <Link to="/info" className="text-white hover:text-purple-200">معلومات المعسكر</Link>
        </li>
        <li>
          <Link to="/register" className="text-white hover:text-purple-200">التسجيل</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
