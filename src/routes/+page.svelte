<script lang="ts">
  import logo from "$lib/static/tsunosongs-logo.webp";
  import tsunose from "$lib/static/tsunose.webp";
  import tsubomi from "$lib/static/tsubomi.webp";
  import { onMount } from "svelte";

  let showDownloadBtn = false;

  onMount(() => {
    setTimeout(() => {
      showDownloadBtn = true;
    }, 1200);
  });
</script>

<div class="tsuno-parent relative">
  <div class="absolute top-0 z-0 flex">
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
  </div>
  <div class="absolute bottom-0 right-0 z-0 flex">
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
    <div class="tsuno-circle"></div>
  </div>
  <div class="flex">
    <div class="basis-1/3 self-baseline">
      <img src={tsunose} alt="tsunose" class="tsuno-tsunose" />
    </div>
    <div class="h-full basis-1/3 self-center">
      <img src={logo} alt="logo" class="tsuno-logo" />
    </div>
    <div class="basis-1/3 self-baseline">
      <img src={tsubomi} alt="tsubomi" class="tsuno-tsubomi" />
    </div>
  </div>
</div>
<h1
  class="tsuno-text my-4 animate-fade-in-fwd text-center text-2xl font-bold tracking-widest"
>
  TSUNO-SONGS DIGITAL EP
</h1>
{#if showDownloadBtn}
  <div class="tsuno-parent mt-8 text-center">
    <a
      target="_blank"
      href="https://r2-bridge.uboar.net/download/tsunosongs"
      class="download-button">DOWNLOAD(FLAC)</a
    >
    <div class="my-8"></div>
    <a
      target="_blank"
      href="https://r2-bridge.uboar.net/download/tsunosongsmp3"
      class="download-button">DOWNLOAD(MP3)</a
    >
    <div class="tsuno-text mt-16 animate-fade-in-fast text-center text-sm">
      <p>2023.09 uboar</p>
      <a href="https://uboar.net" class="link" target="_blank"
        >https://uboar.net</a
      >
    </div>
  </div>
{/if}

<style lang="postcss">
  .tsuno-circle {
    background-color: rgb(209, 255, 214);
    @apply m-6 h-8 w-8 rounded-full md:h-16 md:w-16;
  }
  .tsuno-parent {
    width: 100svw;
    max-width: 1080px;
    @apply mx-auto overflow-x-visible;
  }
  .tsuno-logo {
    filter: drop-shadow(5px 5px 0px rgb(255, 255, 255));
    @apply animate-fade-in-fwd;
  }
  .tsuno-tsunose {
    filter: drop-shadow(5px 5px 0px rgb(255, 255, 255));
    @apply animate-fade-in-left;
  }
  .tsuno-tsubomi {
    filter: drop-shadow(5px 5px 0px rgb(255, 255, 255));
    @apply animate-fade-in-right;
  }
  .tsuno-text {
    color: rgb(40, 35, 26);
  }
  .download-button {
    transition: all 0.2s ease-in-out;
    border-color: rgb(40, 35, 26);
    color: rgb(40, 35, 26);
    @apply my-12 h-12 animate-fade-in-fast content-center rounded-full border-2 fill-slate-50 px-8 py-2 text-center text-2xl md:px-32;
  }
  .download-button:hover {
    background-color: rgb(40, 35, 26);
    @apply text-white;
  }
  .link {
    @apply underline hover:no-underline;
  }
</style>
