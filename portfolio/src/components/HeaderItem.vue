<template>
  <header id="header">
    <nav id="header-nav">
      <div class="container">
        <ul class="navbar">
          <li>
            <router-link class="nav" id="about-nav" to="/"
              ><h3 class="title">Yuta Okuyama</h3></router-link
            >
          </li>
          <li>
            <router-link class="nav" id="home-nav" to="/" exact
              ><a>home</a></router-link
            >
          </li>
          <li>
            <router-link class="nav" id="works-nav" to="/works"
              ><a>works</a></router-link
            >
          </li>
          <li>
            <router-link class="nav" id="about-nav" to="/about"
              ><a>about</a></router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<style scoped>
#header {
  position: static;
  width: 100%;
  height: 4rem;
  top: 0px;
  left: 0px;
  z-index: 100;
  margin-top: 0px;
  padding-top: 0px;
  margin-bottom: 0px;
}

.title {
  font-size: 32px;
  margin: 0 0 0 0;
  vertical-align: middle;
}
.navbar {
  display: flex !important;
  justify-content: flex-end;
  padding: 0px;
  list-style-type: none;
  background: #ffffff;
  margin: 2rem 2rem 2rem 2rem;
  padding-top: 0rem;
  margin-bottom: 1rem;

}
.navbar li a {
  display: inline-block;
  font-size: 18px;
  color: #000;
  position: relative;
  text-decoration: none;
  vertical-align: middle;
  margin-top: 0.6rem;
}

.navbar li:first-child {
  margin-right: auto;
}
</style>
