<template>
  <header id="header">
    
    <nav id="header-nav">
        <div class="container">
      <ul class="navbar">
           <li>
          <h3>Yuta Okuyama</h3>
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
.navbar{
    display: none;
    margin:1px;
    padding:0px;
    list-style-type: none;
    background: #ffffff;
    border-bottom:  solid #000000;
}
.navbar li a{
    display: inline-block;;
    padding: 8px 8px;
    color:#000;
    position: relative;
  text-decoration: none;
}
.navbar li a::after{
  position: absolute;
  content: '';
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: #000000;
  transition: all 0.3s ease 0s;
}
.navbar li a:hover{
    background: #fff;
    color:#000000;
     cursor: pointer;
}

.navbar li a:hover::after{
width: 100%;
}

.navbar{
    display: flex !important;
    justify-content: flex-end;
}

.navbar li:first-child{
    margin-right: auto;
}




</style>
