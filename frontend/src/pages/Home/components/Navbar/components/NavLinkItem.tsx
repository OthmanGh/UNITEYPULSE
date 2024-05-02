import { Link } from 'react-router-dom';
import shortStyles from '../../../../../components/index';

const NavLinkItem = ({ id, title }: { id: string; title: string }) => (
  <Link to={id} spy={true} smooth={true} duration={500} offset={-70}>
    <li className={`${shortStyles.pointer} hover:text-primary transition-all duration-500`}>{title}</li>
  </Link>
);

export default NavLinkItem;
