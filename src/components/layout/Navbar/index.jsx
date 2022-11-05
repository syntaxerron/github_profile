import { Link } from 'react-router-dom'
import { FaGithub } from 'react-icons/fa'

import { LinkWrapper, NavbarWrapper } from './index.styles'

const Navbar = () => {
  const links = {
    left_links: [
      {
        id: 1,
        title: 'Github Finder',
        url: '/',
        icon: <FaGithub />,
      },
    ],
    right_links: [
      {
        id: 1,
        title: 'About',
        url: '/about',
        icon: null,
      },
    ],
  }

  return (
    <NavbarWrapper>
      <LinkWrapper>
        {links &&
          links.left_links &&
          links.left_links.length &&
          links.left_links.map((item) => {
            return (
              <Link key={item.id} to={item.url}>
                {item.icon}
                {item.title}
              </Link>
            )
          })}
      </LinkWrapper>
      <LinkWrapper>
        {links &&
          links.right_links &&
          links.right_links.length &&
          links.right_links.map((item) => {
            return (
              <Link key={item.id} to={item.url}>
                {item.icon}
                {item.title}
              </Link>
            )
          })}
      </LinkWrapper>
    </NavbarWrapper>
  )
}

export default Navbar
