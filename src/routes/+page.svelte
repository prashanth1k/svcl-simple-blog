<script>
	export let data;
</script>

<svelte:head>
	<title>Da Blog</title>
</svelte:head>
<h1>Welcome to Da Blog</h1>
<p>Hold on to something while we take you on a wild ride.</p>

{#each data.posts as post}
	<div>
		<h3><a href={'/post/' + post.id}>{post.title}</a></h3>
		<p>{post.content}</p>
	</div>
{/each}
