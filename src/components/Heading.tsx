export function Heading({ children }: any) {
  return (
    <div className="container">
      <h2
        style={{
          fontSize: "38px",
          fontWeight: "600",
          textTransform: "uppercase",
          margin: "30px 0",
        }}
      >
        {children}
      </h2>
    </div>
  );
}
