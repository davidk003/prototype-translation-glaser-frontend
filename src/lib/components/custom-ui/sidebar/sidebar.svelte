<script lang="ts" context='module'>
    import * as Sheet from "$lib/components/ui/sheet";
    import { HomeIcon, ChartLine, Settings, Settings2, Menu } from "lucide-svelte";

    const triggerId : string = "sidebarTrigger";

    export function toggleSidebar()
    {
        document.getElementById(triggerId)?.click();
    }
</script>

<div>
    <Sheet.Root>
        <Sheet.Trigger id={triggerId}>
            <!-- <Menu/> -->
        </Sheet.Trigger>
        <Sheet.Content side="left">
            <Sheet.Header>
                <Sheet.Title class="gap-3 p-3">Menu</Sheet.Title>
                <!-- <Sheet.Description>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </Sheet.Description> -->
                </Sheet.Header>

            <nav class="flex flex-col gap-4 pt-5">
                <a href="/" class="flex items-center gap-3 hover:text-primary">
                    <HomeIcon/>
                    Home
                </a>
                <a on:click={()=>{toggleSidebar();}} href="/dashboard/analytics" class="flex items-center gap-3 hover:text-primary">
                    <!-- <svg data-id="3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-5 w-5"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg> -->
                    <ChartLine/>
                    Analytics
                </a>
                <a href="/settings" class="flex items-center gap-3 hover:text-primary">
                    <Settings/>
                    <!-- <Settings2/> -->
                    Settings

                </a>
            </nav>
        </Sheet.Content>
    </Sheet.Root>
</div>

<style>
    /* nav > *
    {
        color: var(--primary);
    } */
</style>