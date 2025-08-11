const containerStyle = {
  display: "flex",
  alignItems: "center",
  gap: "16px",
};

const starContainerStyle = {
  display: "flex",
  gap: "4px",
};

const textStyle = {
  lineHeight: "1",
  margin: "0",
};

function StarRating({ maxRating = 5 }) {
  return (
    <>
      <div>
        <div style={containerStyle}>
          {Array.from({ length: maxRating }, (_, i) => (
            <span style={starContainerStyle}>s{i + 1}</span>
          ))}
        </div>
        <p style={textStyle}>{maxRating}</p>
      </div>
    </>
  );
}
export default StarRating;
