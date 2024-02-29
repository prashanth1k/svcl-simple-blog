<script>
	export let data;
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Da Blog</title>
</svelte:head>

<div>
	<nav>
		<ul>
			<li class=""><a href="/"><b>Da Blog</b></a></li>

			{#if $page.data.session?.user?.name}
				<li class="float-right sticky"><a href="/post/new">New Post</a></li>
				<li class="float-right sticky"><a href="/logout">Logout</a></li>
			{:else}
				<li class="float-right sticky"><a href="/login">Login</a></li>
			{/if}
			<li class="float-right sticky"><a href="/about">About</a></li>
		</ul>
	</nav>
</div>

<slot />
