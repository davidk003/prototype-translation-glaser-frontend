<script>
  import { Button } from '$lib/components/ui/button';
  import { Chrome } from 'lucide-svelte'

  const chromeIconSvg = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24" 
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  `;
</script>

<style>
  .chrome-icon {
    fill: #4285f4;
  }

  .chrome-icon > * {
    fill: #fbbc05;
  }

  .chrome-icon > *:nth-child(2) {
    fill: #ea4335;
  }

  .chrome-icon > *:nth-child(3) {
    fill: #34a853;
  }
</style>

<div class="flex min-h-[100dvh] flex-col items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
  <div class="mx-auto max-w-md space-y-6 text-center">
    <div class="space-y-2">
      <h1 class="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Welcome back</h1>
      <p class="text-muted-foreground">Sign in to your account to continue</p>
    </div>
    <Button variant="outline" class="w-full flex items-center justify-center gap-2">
      <!-- <span class="h-5 w-5 chrome-icon"> {@html chromeIconSvg}</span> -->
      <span class="h-5 w-5 chrome-icon"> <Chrome/></span>
      Sign in with Google
    </Button>
    <div class="text-sm text-muted-foreground">
      Don't have an account?{" "}
      <a href="#" class="font-medium underline underline-offset-4">
        Sign up
      </a>
    </div>
  </div>
</div>