<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Chrome } from 'lucide-svelte'
  import { toast } from "svelte-sonner";
  import { onMount } from 'svelte';
  import { Toaster } from '$lib/components/ui/sonner';
  export let data;
	let { supabase, session } = data
	$: ({ supabase, session } = data)
  async function handleLogin()
  {
    toast.promise(
        // Allow redirection to take up to 20 seonds else throw error and refresh page
        async () => new Promise((resolve, reject) => setTimeout(() => {reject(""); setTimeout(()=>{location.href="/login"}, 2000)} , 20000 )),
        {
          loading: "Redirecting to Google Oauth..",
          success: (data) => {return `Redirected!`;}, //This should never be called
          error: 'Error logging in', //If no redirect after 20 seconds
        });
    
    await supabase.auth.signInWithOAuth({
    provider: "google",
    options: {
      redirectTo: `${window.location.origin}`,
    },
    });

  }

  // onMount(() => {
  //     console.log(`Mounted user: ${data.session ? data.session?.user?.email : "none"}`);
  //     // toast.message("test")
  //     // // toast.success("Logged in", {
  //     // //     description: "redirecting to dashboard...",
  //     // //   });
  //     if(data.session)
  //     {
  //       toast.success("Logged in", {
  //         description: "redirecting to dashboard...",
  //       });
  //       location.href = "/dashboard";
  //     }
  //   });
</script>

<!-- <style>
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
</style> -->

<div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-md space-y-6 text-center">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome back</h1>
      <p class="text-muted-foreground">Sign in to your account to continue</p>
    </div>
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
    <Button variant="outline" class="w-full flex items-center justify-center gap-2"
    on:click={()=>{handleLogin();}}>
      <span class="h-5 w-5 chrome-icon"> <Chrome class="chrome-icon"/></span>
      Sign in with Google
    </Button>
    <div class="text-sm text-muted-foreground">
      Don't have an account?{" "}
      <span
      role="button"
      tabindex="0"
      on:click={()=>{handleLogin();}}
      on:keydown={(e) => {
        if (e.key !== 'Enter' && e.key !== ' ') return;
        e.preventDefault();
        handleLogin();
        }}
      class="font-medium underline underline-offset-4" on:click={()=>{handleLogin();}}>
        Sign up
      </span>
    </div>
  </div>
</div>
<Toaster richColors/>