import React, { useState } from 'react';

const navLinks = [
  { navLinkId: 'Home', scrollToId: 'homeContainer' }, // etc.
  { navLinkId: 'About', scrollToId: 'aboutContainer' }, // etc.
  { navLinkId: 'Contact', scrollToId: 'contactContainer' }, // etc.
];

const NavLink = ({ navLinkId }) => {
  return <span>{navLinkId}</span>;
};

const Nav = () => {
  return (
    <nav>
      {navLinks.map((item) => (
        <NavLink navLinkId={item.navLinkId} />
      ))}
    </nav>
  );
};

export default Nav;
