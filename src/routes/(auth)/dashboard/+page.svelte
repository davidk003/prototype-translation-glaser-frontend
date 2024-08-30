<script lang="ts">
    import "../../../app.css";
    import { onMount } from 'svelte';
    import { Button, Root } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Textarea } from "$lib/components/ui/textarea";
    import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "$lib/components/ui/collapsible";
    import { Progress } from "$lib/components/ui/progress";
    import { openSidebar } from "$lib/components/custom-ui/sidebar";
    import * as Avatar from "$lib/components/ui/avatar";

    import { CircleUser, ChevronUp, Menu, Settings } from 'lucide-svelte'

//   let isMenuOpen = false;

// $: menuClass = isMenuOpen ? 'translate-x-0' : '-translate-x-full';

// function handleResize() {
//   if (window.innerWidth >= 768) {
//     isMenuOpen = false; // Initially keep the sidebar closed even on larger screens
//   } else {
//     isMenuOpen = false;
//   }
// }

// onMount(() => {
//   handleResize();
//   window.addEventListener('resize', handleResize);
//   return () => window.removeEventListener('resize', handleResize);
// });

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
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
        <Settings class="h-6 w-6" />
        <div class="w-full flex-1">
          <h1 class="text-2xl font-bold">Account Settings</h1>
        </div>
      </header>
  <div class="flex min-h-screen bg-background">
    
    <!-- <main class="flex-grow flex flex-col transition-all duration-300 ease-in-out
    {isMenuOpen ? 'md:ml-[300px]' : 'ml-0'}"> -->
    <main class="flex-grow flex flex-col">
      <div class="flex-1 p-6">
        <div class="grid gap-6">
          <div class="grid gap-2">
            <!-- <h1 class="text-2xl font-bold">API Requests</h1> -->
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
          <div>
            <ChevronUp class="h-4 w-4 transition-transform [&[data-state=open]]:rotate-180"/>
          </div>
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
</style>