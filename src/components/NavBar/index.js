import React from 'react'
import {Link, graphql, StaticQuery} from 'gatsby'
import config from '../../../data/config'


const NavBar = ({toggleNavbar, isActive}) => (
  <StaticQuery
    query={graphql`
            query SearchIndexQuery {
                siteSearchIndex {
                    index
                }
            }
        `}
    render={data => (
      <nav className='navbar is-fixed-top' aria-label='main navigation'>
        <div className='navbar-brand'>
          <Link to='/' className='navbar-item'>
            <strong> {config.siteTitle}</strong>
          </Link>
          <button
            className={`button navbar-burger ${isActive ? 'is-active' : ''}`}
            data-target='navMenu'
            onClick={toggleNavbar}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div className={`navbar-menu ${isActive ? 'is-active' : ''}`} id='navMenu'>

          <div className='navbar-end'>

            <Link className='navbar-item' to='/hakkimizda'>
                            Hakkımızda
            </Link>
            <Link className='navbar-item' to='/hizmetler'>
                            Hizmetler
            </Link>
            <Link className='navbar-item' to='/iletisim'>
                            İletişim
            </Link>
          </div>
        </div>
      </nav>
    )}
  />
)

export default NavBar
