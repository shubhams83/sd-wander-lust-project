import React from 'react'
import { push } from 'connected-react-router'
import { useDispatch } from 'react-redux'; 
import ImgLogo from '../../assets/img/header-logo.svg'

const Header = () => {
    const dispatch = useDispatch();
    return (
          <header>
              <section>
                  <nav class="nav">
                      <div class="nav-menu flex-row">
                          <div class="nav-brand">
                          <div onClick={() => dispatch(push("/"))} class="logo">
                              <a href="/" class="text-green"><img src={ImgLogo} alt="nav-brand" /></a>
                              </div>
                          </div>
                          <div class="toggle-collapse">
                              <div class="toggle-icons">
                                  <i class="fas fa-bars"></i>
                              </div>
                          </div>
                          <div>
                              <ul class="nav-items">
                                  <li class="nav-link active">
                                      <a href="index.html">Home</a>
                                  </li>
                                  <li class="nav-link">
                                      <a href="image-preview.html">Wonders in USA</a>
                                  </li>
                                  <li class="nav-link">
                                      <a href="detail-page.html">Tourist Attractions</a>
                                  </li>
                                  <div onClick={() => dispatch(push("/favourites"))} class="menus">
                                  <li class="nav-link">
                                      <a href="/favourites">Favourite</a>
                                  </li>
                                  </div>
                              </ul>
                          </div>
                      </div>
                  </nav>
              </section>
          </header>   
    );
}

export default Header
