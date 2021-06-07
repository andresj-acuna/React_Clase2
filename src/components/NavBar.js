import React from 'react';

export const NavBar = props => {
  return <>
    <nav class="navbar navbar-default navbar-shrink">
      <div class="container flex justify-between">

        <div class="navbar-header ml-20">

          <a class="navbar-brand" href="#page-top">Mi e-commerce</a>
        </div>


        <div class="collapse navbar-collapse">
          <ul class="nav navbar-nav flex gap-x-10">
            <li class="">

            </li>
            <li class="">
              <a class="" href="#Home">Home</a>
            </li>
            <li class="">
              <a class="" href="#Productos">Productos</a>
            </li>
            <li class="">
              <a class="" href="#Acerca">Acerca</a>
            </li>
            <li class="">
              <a class="" href="#Contacto">Contacto</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>
  </>
}

export default NavBar;