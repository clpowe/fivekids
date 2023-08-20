<script lang="ts">
	export let title: string;
	export let date: Date;
	export let image: string;
	export let description: string;
	export let slug: string;
	// export let tags: string[];
</script>

<div class="space-y-4">
	<time
		>{new Date(date).toLocaleDateString('en-US', {
			dateStyle: 'full'
		})}</time
	>
	<img height="200" width="600" src={image} alt="" class="w-full" />
	<div class="space-y-2">
		<h2 class="text-4xl font-bold">
			<a class="" href={`/blog/${slug}`}>{title}</a>
		</h2>
		<p>{description}</p>
	</div>
</div>
