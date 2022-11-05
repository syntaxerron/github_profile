import { FooterWrapper } from './index.styles'

const Footer = ({ year }) => {
  return (
    <FooterWrapper>
      <p>Copyright &copy; {year} All rights reserved.</p>
    </FooterWrapper>
  )
}

export default Footer
