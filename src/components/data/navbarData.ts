const NavbarData = [
  {
    title: 'Home',
    link: '/#home',
    scrollId: '#home',
  },
  {
    title: 'About Us',
    link: '/#aboutus',
    scrollId: 'aboutus',
  },
  {
    title: 'Information',
    link: '/information/perizinan',
    children: [
      {
        title: 'Our Team',
        link: '/our-team',
      },
      {
        title: 'Perizinan',
        link: '/perizinan',
      },
    ],
  },
  {
    title: 'Product & Service',
    link: '/product-service',
  },
  {
    title: 'Contact',
    link: '/contact-us',
  },
];

export default NavbarData;
