<script lang="ts">
    import {Sidebar, openSidebar} from "$lib/components/custom-ui/sidebar";
    import { Button } from "$lib/components/ui/button";
    import { Input } from "$lib/components/ui/input";
    import * as Avatar from "$lib/components/ui/avatar";
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Menu } from 'lucide-svelte'

  export let data;
  let { supabase, session } = data
  $: ({ supabase, session } = data)

  let user = session?.user;
  $: user = session?.user;


  async function handleSignout()
  {
    const { error } = await supabase.auth.signOut();
    if (error)
    {
      alert(error.message);
    }
    else
    {
      console.log("Signed out");
    }
    document.location.href = "/";
  }

  export function getInitials(): string | null
  {
    if (!user)
    {
      return null;
    }
    return user.user_metadata.name.split(" ").map((n:string) => n[0]).join("");
  }

</script>
<Sidebar></Sidebar>
<header class="sticky top-0 z-30 flex h-14 items-center justify-between border-b bg-background px-6 shadow-sm">
    <div class="flex items-center gap-4">
      <Button variant="ghost" size="icon" on:click={()=>{openSidebar();}}>
        <div>
          <Menu class="h-5 w-5"/>
        </div>
      </Button>
    </div>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Avatar.Root>
          <Avatar.Image src={session?.user.user_metadata.avatar_url}/>
          <Avatar.Fallback>{getInitials()}</Avatar.Fallback>
        </Avatar.Root>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Label>My Account</DropdownMenu.Label>
        <DropdownMenu.Separator />
        <DropdownMenu.Item class="cursor-pointer">Settings</DropdownMenu.Item>
        <DropdownMenu.Item class="cursor-pointer">Support</DropdownMenu.Item>
        <DropdownMenu.Separator />
        <DropdownMenu.Item on:click={handleSignout} class="cursor-pointer">Logout</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  </header>
<slot></slot>