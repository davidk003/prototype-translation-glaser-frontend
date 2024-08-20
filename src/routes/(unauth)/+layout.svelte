<script>
  import "../../app.css";
  import { Button } from "$lib/components/ui/button";
  import { fly } from "svelte/transition";
  export let data;
</script>
<header class="flex h-14 w-full shrink-0 items-center px-4 md:px-6 border-b">
    <a href="/" class="mr-6 flex items-center">
      <!-- <MountainIcon class="h-6 w-6" /> -->
      <span class="sr-only">UCSD Contemporary Ukrainian Poetry Archive Dashboard</span>
    </a>
    <nav class="ml-auto flex items-center gap-4 sm:gap-6">
        <a href="/" class="text-sm font-medium hover:underline underline-offset-4">Home</a>
      <a href="about-us" class="text-sm font-medium hover:underline underline-offset-4">About us</a>
      <a href="resources" class="text-sm font-medium hover:underline underline-offset-4">Resources</a>
      <Button href="login" variant="outline">Login</Button>
    </nav>
  </header>

  {#key data.url}
  <div
    in:fly={{ x: -200, duration: 150, delay: 150}}
    out:fly={{ duration: 150}}>
    <slot/>
</div>
  {/key}