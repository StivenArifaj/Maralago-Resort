import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({
  title,
  subtitle,
  backgroundImage = "bg-hero-pattern"
}) => {
  const isUrl = backgroundImage.includes('http') || backgroundImage.includes('url');
  const style = isUrl ? { backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url('${backgroundImage.replace(/url\(['"]?(.+?)['"]?\)/, '$1')}')` } : {};
  const bgClass = isUrl ? '' : backgroundImage;

  return (
    <div
      className={`${bgClass} bg-cover bg-center py-32 md:py-40 px-4 relative`}
      style={style}
    >
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 text-white">
          {title}
        </h1>
        <p className="text-xl md:text-2xl text-gold-light max-w-2xl mx-auto font-light">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default PageHeader;