<script>
	// import LOGO from '/LOGO.svg';
</script>

<div class="Sidenav col gap-2">
	<a href="/" class="logo"><img src="/LOGO.svg " alt="" /> </a>
	<h2 class="project-title">Project title</h2>
	<nav>
		<a href="/" class="green-text">Setup</a>
		<a href="/" class="green-text">Knowledge</a>
		<a href="/" class="blue-text">Eligibility</a>
		<button class="blue">Add a process</button>
	</nav>
	<div class="sidebar-spacer"></div>
	<button id="bg-grey">AE</button>
</div>

<style>
	.Sidenav {
		height: 90svh;
		position: relative;
		padding-top: 2rem;
	}

	h2 {
		padding-left: 1.5rem;
	}
	nav {
		display: grid;
		gap: 1.5rem;
	}

	a:not(.logo) {
		padding-left: 1.5rem;
	}
	a:hover,
	a.selected {
		color: black;
		font-weight: bold;
	}

	.logo {
		position: absolute;
		top: -3rem;
	}

	.sidebar-spacer {
		flex-grow: 1;
	}
</style>
