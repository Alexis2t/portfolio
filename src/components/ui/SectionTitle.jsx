const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12 animate-slide-up">
      <h2 className="text-4xl font-bold font-display mb-4 text-gray-800 dark:text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 dark:text-gray-400 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
