<script>
  import "../app.css";
</script>

<div class="background"></div>
<div class="main object-center">
  <div class="pt-6 md:pt-16"></div>
  <slot />
</div>

<style lang="postcss">
  .background {
    width: 100svw;
    height: 100svh;
    --dot-bg: rgb(255, 250, 202);
    --dot-color: rgb(184, 178, 148);
    --dot-size: 2px;
    --dot-space: 48px;
    background:
      linear-gradient(
          90deg,
          var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
          transparent 1%
        )
        center / var(--dot-space) var(--dot-space),
      linear-gradient(
          var(--dot-bg) calc(var(--dot-space) - var(--dot-size)),
          transparent 1%
        )
        center / var(--dot-space) var(--dot-space),
      var(--dot-color);
    animation: loop 2s linear infinite;
    @apply fixed -z-20;
  }
  @keyframes loop {
    from {
      background-position: 0 0;
    }
    to {
      background-position: -48px 0;
    }
  }

  .main {
    width: 100svw;
    @apply z-0;
  }
</style>
