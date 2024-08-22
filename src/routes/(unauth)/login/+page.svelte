<script>
  import { Button } from '$lib/components/ui/button';
  import { Chrome } from 'lucide-svelte'
  import { toast } from "svelte-sonner";

  export let data;
	let { supabase, session } = data
	$: ({ supabase, session } = data)
  async function handleSignup()
  {
    await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `http://example.com/auth/callback`,
    },
  })

  }

</script>

<style>
  svg.chrome-icon {
    fill: #4285f4;
  }

  svg.chrome-icon > * {
    fill: #fbbc05;
  }

  svg.chrome-icon > *:nth-child(2) {
    fill: #ea4335;
  }

  svg.chrome-icon > *:nth-child(3) {
    fill: #34a853;
  }
</style>

<div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-md space-y-6 text-center">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome back</h1>
      <p class="text-muted-foreground">Sign in to your account to continue</p>
    </div>
    <script lang="ts">
      import { toast } from "svelte-sonner";
      import { Button } from "$lib/components/ui/button/index.js";
    </script>
     
    <Button
      variant="outline"
      on:click={() =>
        toast.success("Event has been created", {
          description: "Sunday, December 03, 2023 at 9:00 AM",
          action: {
            label: "Undo",
            onClick: () => console.info("Undo")
          }
        })}
    >
      Show Toast
    </Button>
    <Button variant="outline" class="w-full flex items-center justify-center gap-2">
      <!-- <span class="h-5 w-5 chrome-icon"> {@html chromeIconSvg}</span> -->
      <span class="h-5 w-5 chrome-icon"> <Chrome class="chrome-icon"/></span>
      Sign in with Google
    </Button>
    <div class="text-sm text-muted-foreground">
      Don't have an account?{" "}
      <a href="#" class="font-medium underline underline-offset-4" on:click={()=>{console.log("hi");handleSignup();}}>
        Sign up
      </a>
    </div>
  </div>
</div>