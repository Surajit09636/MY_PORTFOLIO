export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed inset-0 bg-[rgba(10,10,10,0.8)] z-50 flex flex-col items-center justify-center
                  transition-all duration-500 ease-in-out
                  ${menuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}
                 `}
    >
      {/* Close Button */}
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Close Menu"
      >
        &times;
      </button>

      {/* Links */}
      {["Home", "About", "Projects", "Contact"].map((item, index) => (
        <a
          key={item}
          href={`#${item.toLowerCase()}`}
          onClick={() => setMenuOpen(false)}
          className={`text-2xl font-semibold text-white my-4 transform transition-all duration-500
                      ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}
                     `}
          style={{ transitionDelay: `${index * 100}ms` }} // stagger animation
        >
          {item}
        </a>
      ))}
    </div>
  );
};
