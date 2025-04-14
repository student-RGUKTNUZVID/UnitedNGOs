// DropdownPortal.jsx
import ReactDOM from 'react-dom';

const DropdownPortal = ({ children }) => {
  const portalRoot = document.getElementById('portal-root');
  return ReactDOM.createPortal(children, portalRoot);
};

export default DropdownPortal;
