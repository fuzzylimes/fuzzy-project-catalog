<script>
	import projects from "../../projectlog.json";
	import Card from "../components/Card.svelte";
	import Footer from "../components/Footer.svelte";
</script>

<main>
	<div class="container px-5">
		<div
			class="columns has-text-centered is-centered is-multiline is-variable is-6"
		>
			<div class="column is-full">
				<div class="section is-medium">
					<h1 class="title is-1">fuzzy project catalog</h1>
					<h2 class="subtitle is-4">
						A place for sharing my public projects.
					</h2>
				</div>
			</div>
			{#each projects.reverse() as project}
				<div class="column is-4">
					<Card {project} />
				</div>
			{/each}
		</div>
	</div>
</main>

<Footer />

<style>
	.title,
	.subtitle {
		color: #f2f1ef;
	}
</style>
