<script lang="ts">
    import { onMount } from 'svelte';
    import { Button, Root } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "$lib/components/ui/collapsible";
    import { Progress } from "$lib/components/ui/progress";
  

    const ChevronUpIcon = `<svg
      {...props}
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
      <path d="m18 15-6-6-6 6" />
    </svg>`;
      // SVG shortcut
  const MenuIcon = `<svg 
    data-id="20" 
    xmlns="http://www.w3.org/2000/svg" 
    width="24" 
    height="24" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round" 
  >
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>`;

  let isMenuOpen = false;

$: menuClass = isMenuOpen ? 'translate-x-0' : '-translate-x-full';

function handleResize() {
  if (window.innerWidth >= 768) {
    isMenuOpen = false; // Initially keep the sidebar closed even on larger screens
  } else {
    isMenuOpen = false;
  }
}

onMount(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
  return () => window.removeEventListener('resize', handleResize);
});

    let apiRequest = "";
    let processQueue: { id: number, status: string, progress: number }[] = [];
  
    function handleApiRequest() {
      const newProcess = {
        id: Date.now(),
        status: "pending",
        progress: 0,
      };
      processQueue = [...processQueue, newProcess];
      const interval = setInterval(() => {
        processQueue = processQueue.map((process) => {
          if (process.id === newProcess.id) {
            const newProgress = process.progress + 10;
            return {
              ...process,
              progress: newProgress,
              status: newProgress >= 100 ? "completed" : process.status,
            };
          }
          return process;
        });
        if (newProcess.progress >= 100) {
          clearInterval(interval);
        }
      }, 500);
    }
  
    onMount(() => {
      // Any initialization code can go here
    });
  </script>
  
  <div class="flex min-h-screen bg-background">

    <!-- <aside class="flex-shrink-0 w-[300px] transition-all duration-300 ease-in-out
              {menuClass} 
              md:translate-x-0 fixed md:static left-0 top-0 bottom-0 z-40
              flex flex-col border-r bg-muted/40 p-6 md:sticky md:top-0 md:h-screen">

      <div class="flex items-center justify-between">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <Button variant="ghost" size="icon" on:click={() => {isMenuOpen = !isMenuOpen}}>
          <div class="h-5 w-5">
            {@html MenuIcon}
          </div>
        </Button>
      </div>
      <nav class="mt-8 flex flex-col gap-4">
        <a href="/" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"> -->
          <!-- <HomeIcon class="h-5 w-5" /> -->
           <!-- <div class="h-5 w-5">
            <svg data-id="1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
           </div>
          Home
        </a>
        <a href="/" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <div class="h-5 w-5">
            <svg data-id="2" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
          </div> -->
          <!-- <LayoutGridIcon class="h-5 w-5" /> -->
<!--            
          API Requests
        </a>
        <a href="/analytics" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <div class="h-5 w-5">
            <svg data-id="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
          </div> -->
          <!-- <ActivityIcon class="h-5 w-5" /> -->
          <!-- Analytics
        </a>
        <a href="/" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
          <div class="h-5 w-5">
            <svg data-id="4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
          </div> -->
          <!-- <SettingsIcon class="h-5 w-5" /> -->
          <!-- Settings
        </a>
      </nav>
    </aside> -->
    
    <main class="flex-grow flex flex-col transition-all duration-300 ease-in-out
    {isMenuOpen ? 'md:ml-[300px]' : 'ml-0'}">
      <header class="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-6 shadow-sm">
        <div class="flex items-center gap-4">
          <Button variant="ghost" size="icon" on:click={() => {isMenuOpen = !isMenuOpen}}>
            <div class="h-5 w-5">
              {@html MenuIcon}
            </div>
          </Button>
          <Input type="search" placeholder="Search..." class="w-full max-w-xs rounded-lg bg-muted pl-8" />
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            <Button variant="ghost" size="icon" class="rounded-full">
              <img src="/placeholder.svg" width={36} height={36} alt="Avatar" class="rounded-full" />
            </Button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="end">
            <DropdownMenu.Label>My Account</DropdownMenu.Label>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Settings</DropdownMenu.Item>
            <DropdownMenu.Item>Support</DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item>Logout</DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </header>
      <div class="flex-1 p-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <h2 class="text-2xl font-bold">API Requests</h2>
            <p class="text-muted-foreground">Make API requests and monitor their progress.</p>
          </div>
          <div class="grid gap-4">
            <Textarea
              placeholder="Enter your API request here..."
              bind:value={apiRequest}
              class="min-h-[200px] rounded-lg bg-muted p-4"
            />
            <Button on:click={handleApiRequest}>Send Request</Button>
          </div>
        </div>
      </div>
      <Collapsible class="fixed bottom-6 right-6 z-40 w-[400px] rounded-lg border bg-background shadow-lg">
        <CollapsibleTrigger class="flex w-full items-center justify-between rounded-t-lg bg-muted px-4 py-3 text-sm font-medium">
          <span>Process Queue</span>
          <div class="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180">
            {@html ChevronUpIcon}
          </div>
          <!-- <ChevronUpIcon class="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180" /> -->
        </CollapsibleTrigger>
        <CollapsibleContent class="p-4">
          {#each processQueue as process (process.id)}
            <div class="grid gap-2">
              <div class="flex items-center justify-between">
                <span>Process {process.id}</span>
                <span
                  class="rounded-full px-2 py-1 text-xs font-medium"
                  class:bg-green-100={process.status === "completed"}
                  class:text-green-900={process.status === "completed"}
                  class:bg-yellow-100={process.status === "pending"}
                  class:text-yellow-900={process.status === "pending"}
                >
                  {process.status}
                </span>
              </div>
              <Progress value={process.progress} aria-label="{process.progress}% complete" />
            </div>
          {/each}
        </CollapsibleContent>
      </Collapsible>
    </main>
  </div>

  <style>
    /* Add any additional styles here if needed */
    @media (min-width: 768px) {
        aside {
            position: sticky;
            top: 0;
            height: 100vh;
        }
    }
</style>