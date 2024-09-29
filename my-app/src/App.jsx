import Navbar from './components/Navbar';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold text-purple-600">الصفحة الرئيسية</h1>
        <p className="mt-4 text-lg text-purple-600">
          لرؤية التفاصيل اضغط{" "}
          <Link to="/Info" className="text-purple-800 underline hover:text-purple-900">
            هنا
          </Link>
        </p>
      </div>
    </div>
  );
}

export default App;
