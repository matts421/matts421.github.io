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

export function useMDXComponents(components) {
  return {
    pre: codeBlock,
    ...components,
  };
}
