import React, { useState } from 'react';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'homeContainer' },
  { navLinkId: 'About', scrollToId: 'aboutContainer' },
  { navLinkId: 'Contact', scrollToId: 'contactContainer' },
];

const NavLink = ({
  navLinkId,
  scrollToId,
  activeNavLinkId,
  setActiveNavLinkId,
}) => {
  const handleClick = () => {
    setActiveNavLinkId(navLinkId);
    document.getElementById(scrollToId).scrollIntoView({
      behavior: 'smooth', // gives an ease-in-out effect to our scroll
    });
  };

  return (
    <span
      id={navLinkId}
      className={activeNavLinkId === navLinkId ? 'activeClass' : ''}
      onClick={handleClick}
    >
      {navLinkId}
    </span>
  );
};

const Nav = () => {
  const [activeNavLinkId, setActiveNavLinkId] = useState('');

  return (
    <nav>
      {navLinks.map(({ navLinkId, scrollToId }) => (
        <NavLink
          navLinkId={navLinkId}
          scrollToId={scrollToId}
          activeNavLinkId={activeNavLinkId}
          setActiveNavLinkId={setActiveNavLinkId}
        />
      ))}
    </nav>
  );
};

export default Nav;
