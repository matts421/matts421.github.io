const contact = {
  email: "mailto:magsubc@student.ubc.ca",
  linkedin: "https://www.linkedin.com/in/matthew-ag-smith/",
  github: "https://github.com/matt-smi",
};

export const Navbar = () => {
  return <header></header>;
};

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className="contact">
        <ul>
          {Object.keys(contact).map((key, idx) => {
            return (
              <li key={`contact-${idx}`}>
                <a href={contact[key]}>{key}</a>
              </li>
            );
          })}
        </ul>
        <span>{year}</span>
      </div>
    </footer>
  );
};
