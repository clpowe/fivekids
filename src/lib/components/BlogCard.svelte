<script lang="ts">
	export let title: string;
	export let date: Date;
	export let image: string;
	export let description: string;
	export let slug: string;
</script>

<div class="">
	<img height="600" width="600" src={image} alt="" class="w-full h-80 z-10" />
	<div class="relative p-4 -mt-32 z-10">
		<div class="border border-stone-100 border-2 p-4 z-10">
			<div class="relative space-y-2 bg-stone-100 p-4 mx-auto">
				<div class="space-y-4 mb-4 text-center">
					<p class="text-fuchsia-950 font-sarif">Kids and Family</p>
					<h2 class="text-3xl font-bold capitalize leading-snug">
						{title}
					</h2>
					<p class="text-gray-700 text-sm font-sarif leading-relaxed">{description}</p>
					<div>
						<a class="mt-4 text-sm" href={`/blog/${slug}`}>Keep Reading</a>
					</div>
				</div>
				<div class="border-t-2 border-stone-200 py-4 mt-4 flex justify-between items-center">
					<p class="text-sm">By: <span class="uppercase font-bold">Ashley Powe</span></p>
					<time class="text-sm text-gray-700 font-sarif"
						>{new Date(date).toLocaleDateString('en-US', {
							dateStyle: 'full'
						})}</time
					>
				</div>
			</div>
		</div>
	</div>
</div>
