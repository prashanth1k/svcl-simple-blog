<script>
	let title = '';
	let content = '';
</script>

<form method="post">
	<h3>Create New Post</h3>
	<input name="title" value={title} type="text" />
	<textarea name="content" value={content} rows="10" cols="100"></textarea>

	<button type="submit">Save</button>
</form>
