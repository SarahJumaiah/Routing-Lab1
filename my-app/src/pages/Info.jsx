import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const Info = () => {
  return (
    <div className="min-h-screen bg-purple-50">
      <Navbar />
      <div className="max-w-4xl mx-auto py-20 px-5">
        <h1 className="text-3xl font-bold text-purple-600 mb-4">بناء تطبيقات ومواقع الويب باستخدام JavaScript</h1>
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">الوصف</h2>
        <p className="text-lg text-purple-600 mb-8">
          يهدف معسكر تطوير واجهات تطبيقات الويب باستخدام لغة JavaScript لتصميم
          وتطوير واجهات تطبيقات الويب على مستوى احترافي.
        </p>
        <Link to="/register">
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700">
            التسجيل الآن
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Info;
