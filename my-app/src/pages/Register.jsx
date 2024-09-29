import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar'; 

const Register = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <div className="max-w-xl mx-auto py-20 px-5">
        <h1 className="text-3xl font-bold text-purple-600 text-center mb-8">التسجيل</h1>
        <form className="space-y-6">
          <div>
            <label className="block text-purple-700">الاسم:</label>
            <input type="text" name="name" className="w-full mt-2 p-2 border border-purple-300 rounded-lg" />
          </div>
          <div>
            <label className="block text-purple-700">الايميل:</label>
            <input type="email" name="email" className="w-full mt-2 p-2 border border-purple-300 rounded-lg" />
          </div>
          <Link
            to="/" 
            className="block w-full text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700"
          >
            تسجيل
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Register;
