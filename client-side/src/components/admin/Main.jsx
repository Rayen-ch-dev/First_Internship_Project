const Main = ({ children }) => {
    return (
      <main className="flex-1 p-4 sm:p-6 bg-gray-900 overflow-y-auto">
        {children}
      </main>
    );
  };
  
  export default Main;