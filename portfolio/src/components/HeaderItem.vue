<template>
    <header id="header">
        <h1>ヘッダーです</h1>
        <nav id="header-nav">
         <router-link  id="home-nav" to="/" exact><a>home</a></router-link>
         <router-link  id="works-nav" to="/works"><a>works</a></router-link>
         <router-link  id="about-nav" to="/about"><a>about</a></router-link>
        </nav>
    </header>
</template>

<style scoped>
header{
    z-index: 1;
}
</style>