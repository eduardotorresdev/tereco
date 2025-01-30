<script>
	import Chevron from './Chevron.svelte';

	export let tip;
    export let bottom = false;
</script>

<style lang="sass">
    .tipbox
        display: inline-block
        position: relative

    .tipbox--bottom
        .tipbox__arrow
            top: auto
            bottom: 0
            transform: translate(-50%, 100%)

        .tipbox__tip
            top: auto
            bottom: -50px
            transform: translate(-50%, 100%)


    .tipbox__arrow
        display: inline-block
        position: absolute
        top: 0
        left: 50%
        height: 40px
        transform: translate(-50%, -100%)

        :global(svg)
            position: absolute
            top: -7px
            left: 50%
            width: 20px
            height: 20px
            transform: translateX(-50%)

        &:before
            content: ''
            display: block
            position: absolute
            top: 0
            left: 50%
            width: 2px
            height: 100%
            background: currentColor
            border-radius: 6px
            transform: translate(-50%, 0%)

    .tipbox__tip
        position: absolute
        top: -50px
        left: 50%
        transform: translate(-50%, -100%)
        background: rgba(255,255,255,0.2)
        font-size: 1rem
        backdrop-filter: blur(20px)
        padding: 12px 20px
        border-radius: 6px
        white-space: nowrap
</style>


<span class="tipbox" class:tipbox--bottom={bottom}>
	<slot />

	<div class="tipbox__arrow">
		<Chevron />
	</div>

	<span class="tipbox__tip">{tip}</span>
</span>
