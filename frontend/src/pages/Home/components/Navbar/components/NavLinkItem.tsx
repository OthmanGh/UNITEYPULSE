import { Link as ScrollLink } from 'react-scroll';
import shortStyles from '../../../../../components/index';

const NavLinkItem = ({ id, title }: { id: string; title: string }) => (
  <ScrollLink to={id} spy={true} smooth={true} duration={500}>
    <li className={`${shortStyles.pointer} hover:text-primary transition-all duration-500`}>{title}</li>
  </ScrollLink>
);

export default NavLinkItem;
