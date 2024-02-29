<script>
	/** @type {import('./$types').PageData} */
	import { signOut } from '@auth/sveltekit/client';
	import { page } from '$app/stores';
	import { goto } from '$app/navigation';

	export let data;
</script>

{#if $page.data.session}
	{#if $page.data.session.user?.image}
		<span style="background-image: url('{$page.data.session.user.image}')" class="avatar" />
	{/if}
	<span class="signedInText">
		<small>Signed in as</small><br />
		<strong>{$page.data.session.user?.name ?? 'User'}</strong>
	</span>
	<h4>Are you sure you want to logout?</h4>
	<button
		on:click={() => {
			signOut();
			goto('/');
		}}>Sign out</button
	>
{:else}
	<div class="notSignedInText">You are not signed in. Go back to <a href="/">home page.</a></div>
{/if}
