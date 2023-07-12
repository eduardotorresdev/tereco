<script>
	import Facebook from '+img/Facebook.svelte';
	import WhatsApp from '+img/Whatsapp.svelte';
	import Twitter from '+img/Twitter.svelte';
	import Email from '+img/Email.svelte';
	import LinkedIn from '+img/Linkedin.svelte';
</script>

<style lang="sass">
    @use '+style/color'

    .share__list
        display: grid
        grid-auto-flow: column
        column-gap: 1.25rem
        align-items: center
        align-content: center
        list-style-type: none
        padding: 0

    .share__title
        color: color.$color-quartenary

    .share__link,
    .share__item
        display: inline-flex
        align-items: center

    .share__link :global(svg)
        color: color.$white
        transition: color 150ms ease

    .share__link:hover :global(svg)
        color: color.$color-primary
</style>


<div class="share">
	<span class="share__title"> Compartilhe: </span>

	<ul class="share__list">
		<li class="share__item">
			<a
				href="https://www.facebook.com/sharer.php?u=[post-url]"
				class="share__link"
			>
				<Facebook />
			</a>
		</li>
		<li class="share__item">
			<a
				href="https://api.whatsapp.com/send?text=[post-title] [post-url]"
				class="share__link"
			>
				<WhatsApp />
			</a>
		</li>
		<li class="share__item">
			<a
				href="https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]"
				class="share__link"
			>
				<Twitter />
			</a>
		</li>
		<li class="share__item">
			<a
				href="$email = 'mailto:?subject=' . $[post-title] . '&body=Check out this site: '. $[post-url] .'"
				class="share__link"
			>
				<Email />
			</a>
		</li>
		<li class="share__item">
			<a
				href="https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]"
				class="share__link"
			>
				<LinkedIn />
			</a>
		</li>
	</ul>
</div>
