import styled from 'styled-components'

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 18px;
  background-color: #24292f;
`

export const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
    display: flex;
    gap: 10px;
    align-items: center;
  }

  a:hover {
    color: #a9a9a9;
  }
`
