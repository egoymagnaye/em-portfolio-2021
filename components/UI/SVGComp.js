const SVGComp = (props) => {
  const { width, height, path, className } = props;

  return (
    <>
      <svg
        className={`fill-current ${className}`}
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 ${width} ${height}`}
      >
        <path d={path} />
      </svg>
    </>
  );
};

export default SVGComp;
