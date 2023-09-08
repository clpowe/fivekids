<script>
	import Logo2 from '$lib/assets/logo-two.svg';
</script>

<footer>
	<div class="bg-white p8">
		<div class="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 items-center">
			<div>
				<img src={Logo2} alt="" class="h-10" />
			</div>
			<form>
				<label for="Email " class="font-sarif text-sm">Subscribe now to get daily updates.</label>
				<div class="flex">
					<input
						class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
						type="email"
						placeholder="Enter your email..."
					/>
					<button class="bg-fuchsia-950 text-white text-sm font-bold px-8">Subscribe</button>
				</div>
			</form>
		</div>
	</div>
	<div class="bg-fuchsia-950">
		<div class="max-w-4xl mx-auto text-white uppercase text-sm p4">
			&copy; Ashley Cohen Powe {new Date().getFullYear()}
		</div>
	</div>
</footer>

<style>
</style>
