<template>
	<div id="app">
		<nav>
			<router-link to="/">Gallery</router-link>
		</nav>
		<router-view />
	</div>
</template>

<style>

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

html, body {
	height: 100%;
	width: 100%;
}

#app {
	text-align: center;
	color: #2c3e50;
	min-height: 100%;
}

nav {
	padding: 10px 50px;
	background-color: #151e2f;
	position: fixed;
	top: 0;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: start;
	box-shadow: 0px 0px 2px #FFFFFF22, 0px 0px 10px #FFFFFF22;
}

nav a {
	font-weight: bold;
	color: #2c3e50;
}

nav a.router-link-exact-active {
	color: #eee;
	text-decoration: none;
	text-transform: uppercase;
	font-weight: 700;
	font-size: 1.5rem;
}

</style>
