const ErrorPage = () => {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">
          <h1 className="text-6xl font-bold text-red-600">Oops!</h1>
          <p className="mt-4 text-xl text-gray-700">Sorry, the page you are looking for doesn't exist.</p>
        </div>
      </div>
    );
  };
  
  export default ErrorPage;
  