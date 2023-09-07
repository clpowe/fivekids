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
				<h3>Newsletter Signup</h3>
				<label for="Email">Enter your email</label>
				<div class="input">
					<input type="email" placeholder="Enter your email..." />
					<button>Subscribe</button>
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
