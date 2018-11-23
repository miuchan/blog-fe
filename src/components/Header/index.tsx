import * as React from 'react';
import { style } from 'typestyle';
import { HashRouter as Router, NavLink } from 'react-router-dom'

const navbar = style({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: 70,
  width: '100%',
  padding: '0 40px',
  backgroundColor: '#FFF',
  borderBottom: '1px solid #E5E5E5',
  $nest: {
    '& a': {
      display: 'inline-block',
      height: '100%',
      lineHeight: '70px',
      fontSize: 24,
      padding: '0 20px',
      textDecoration: 'none',
      color: '#4484C2',
      $nest: {
        '&:visited': {
          color: '#000',
        },
      },
    },
  },
})

const title = style({
  fontSize: 28,
})

const nav = style({
  height: '100%',
  
})

class Header extends React.Component {
  public render() {
    return (
      <Router>
        <div className={navbar}>
          <NavLink to="/" className={title}>GNU/Miu</NavLink>
          <nav className={nav}>
            <NavLink to="/blog">博客</NavLink>
            <NavLink to="/gugu">碎碎念</NavLink>
            <NavLink to="/friend">朋友们</NavLink>
          </nav>
        </div>
      </Router>

    );
  }
}

export default Header;
