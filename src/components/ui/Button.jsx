const Button = ({ children, variant = 'primary', onClick, className = '', ...props }) => {
  const variants = {
    primary: 'bg-pastel-blue hover:bg-pastel-blue/80 text-gray-800 dark:bg-pastel-purple dark:hover:bg-pastel-purple/80 dark:text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white',
    outline: 'border-2 border-pastel-blue text-pastel-blue hover:bg-pastel-blue hover:text-white dark:border-pastel-purple dark:text-pastel-purple dark:hover:bg-pastel-purple dark:hover:text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
