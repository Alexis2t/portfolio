const Tag = ({ children, variant = 'default' }) => {
  const variants = {
    default: 'bg-pastel-blue/20 text-blue-700 dark:bg-pastel-blue/10 dark:text-pastel-blue',
    skill: 'bg-pastel-purple/20 text-purple-700 dark:bg-pastel-purple/10 dark:text-pastel-purple',
    tech: 'bg-pastel-green/20 text-green-700 dark:bg-pastel-green/10 dark:text-pastel-green',
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} transition-colors`}>
      {children}
    </span>
  );
};

export default Tag;
