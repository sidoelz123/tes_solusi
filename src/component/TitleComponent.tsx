function TitleComponent({ title = 'Default Title', className = '' }) {
  return (
    <div className={`h-10 flex justify-center items-center ${className}`}>
      {title}
    </div>
  );
}

export default TitleComponent;
