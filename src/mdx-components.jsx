function codeBlock(props) {
  return (
    <pre
      style={{
        backgroundColor: "var(--gray-three)",
        padding: "1rem",
        borderRadius: "10px",
        overflow: "auto",
      }}
      {...props}
    />
  );
}

function enumerate(props) {
  return <ol style={{ margin: "0 2rem" }} {...props} />;
}

function itemize(props) {
  return <ul style={{ margin: "0 2rem" }} {...props} />;
}

export function useMDXComponents(components) {
  return {
    pre: codeBlock,
    ol: enumerate,
    ul: itemize,
    li: (props) => <li style={{ margin: "0.5rem 0" }} {...props} />,
    ...components,
  };
}
