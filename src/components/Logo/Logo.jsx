import './Logo.css';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to = '/' style={{ textDecoration: 'none'}}>   
    <div className="Logo">
      <button >Mash Car Care</button>
    </div>
    </Link>
  );
}