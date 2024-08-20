<script lang="ts" context='module'>
    import * as Sheet from "$lib/components/ui/sheet";
    import { HomeIcon, ChartLine, Settings, CloudDownload} from "lucide-svelte";
    import { page } from '$app/stores';
    const openerId : string = "sidebarOpener";
    const closerId : string = "sidebarCloser";
    export function openSidebar()
    {
        document.getElementById(openerId)?.click();
    }
    function closeSidebar()
    {
        document.getElementById(closerId)?.click();
    }
    
    
</script>

<div>
    <Sheet.Root>
        <Sheet.Trigger id={openerId} class="hidden">
            <!-- <Menu/> -->
        </Sheet.Trigger>
        <Sheet.Close id={closerId} class="hidden"></Sheet.Close>
        <Sheet.Content side="left">
            <Sheet.Header>
                <Sheet.Title class="gap-3 p-3">Menu</Sheet.Title>
                <!-- <Sheet.Description>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                </Sheet.Description> -->
                </Sheet.Header>

            <nav class="flex flex-col gap-4 pt-5">
                <a
                href="/dashboard"
                class="flex items-center gap-3 hover:text-primary"
                class:active={$page.url.pathname == "/dashboard"}
                on:click={closeSidebar}>
                    <CloudDownload/>
                    Requests

                </a>
                <a href="/dashboard/analytics"
                class="flex items-center gap-3 hover:text-primary active:text-primary"
                class:active={$page.url.pathname == "/dashboard/analytics"}
                on:click={closeSidebar}>
                    <ChartLine/>
                    Analytics
                </a>
                <a
                href="/dashboard/settings"
                class="flex items-center gap-3 hover:text-primary"
                class:active={$page.url.pathname == "/dashboard/settings"}
                on:click={closeSidebar}>
                    <Settings/>
                    Settings
                </a>
                <a href="/"
                class="flex items-center gap-3 hover:text-primary"
                class:active={$page.url.pathname == "/"}
                on:click={closeSidebar}>
                    <HomeIcon/>
                    Home
                </a>
            </nav>
        </Sheet.Content>
    </Sheet.Root>
</div>

<style>
    nav > *:active
    {
        color: var(--primary);
    }
</style>