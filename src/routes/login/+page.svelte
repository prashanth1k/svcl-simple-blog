<!-- Empty! -->
<script>
	import { signIn, signOut } from '@auth/sveltekit/client';
	import { goto } from '$app/navigation';

	import { page } from '$app/stores';
</script>

<h3>Sign in</h3>
<p>
	{#if $page.data.session}
		{#if $page.data.session.user?.image}
			<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
		{/if}
		<span class="signedInText float-right sticky">
			<small>Signed in as</small><br />
			<strong>{$page.data.session.user?.name ?? 'User'}</strong>
		</span>
		<button
			on:click={() => {
				signOut();
				goto('/');
			}}>Sign Out</button
		>
	{:else}
		<div><small class="notSignedInText">Authentication required.</small></div>
		<button
			on:click={() => {
				signIn('github');
				goto('/');
			}}>Sign In with Github</button
		>
	{/if}
</p>
