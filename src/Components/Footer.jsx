const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-r from-blue-500 via-purple-600 to-blue-500 text-white p-4 shadow-lg">
      <aside>
        <p className="text-sm">
          Copyright © {new Date().getFullYear()} - All rights reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
