<template>
  <div>
    <header id="main-header">
        <div id="logo">
          <img src="StarWars\starwars\src\components\Imagenes\logoSW.png" alt="">
        </div>
        <nav>
          <ul>
            <li><a href="#">Login</a></li> ||
            <li><a href="#">Resgistrarse</a></li>
          </ul>
        </nav>
    </header>
  </div>
</template>

<script>

export default {
  name: 'Header'
}
</script>

<style scoped>
#main-header {
	background-image: url(Imagenes/Fondo.png) ;
  background-size: contain ;
  background-position:center;
	color: white;
	height:180px;
	width: 100%;
	left: 0;
	top: 0;
	position: absolute;
 
}	
	
#main-header a {
  color: #fdfdfd;
}
/*
 * Logo
 */
#logo{
 
    display: block;
    top: 50%;
    width: 100%;
    max-width: 203px;
    height: 100%;
    max-height: 88px;
    margin: 40px auto 0;
    box-sizing: border-box;
    background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/sw_logo_stacked-336c62367939.png);
    background-size: contain;

}


 /* * Navegación
 */
nav {
	float: right;
}
nav ul {
margin-top: -75px;
padding: 0;
list-style: none;
padding-right: 20px;

}

nav ul li {
display: inline-block;
line-height: 80px;

}

nav ul li a {
display: block;
padding: 0 10px;
text-decoration: none;

}

nav ul li a:hover {
  
  text-shadow:2px 2px 5px white;
}



</style>
