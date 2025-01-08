import { Tierlist } from "./components/Tierlist";

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
  return <ol style={{ margin: "0 2rem", listStyle: "none" }} {...props} />;
}

export function useMDXComponents(components) {
  return {
    // Allows customizing built-in components, e.g. to add styling.
    Tierlist,
    pre: codeBlock,
    ol: enumerate,
    li: (props) => <li style={{ margin: "0.5rem 0" }} {...props} />,
    ...components,
  };
}
