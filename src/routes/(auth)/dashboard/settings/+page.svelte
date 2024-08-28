<script lang="ts">
    import "$lib/../app.css";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import * as Avatar from "$lib/components/ui/avatar";
    import { Button } from "$lib/components/ui/button";
    import * as AlertDialog from "$lib/components/ui/alert-dialog";


    export let data;
    let { supabase, session } = data
    $: ({ supabase, session } = data)

    async function deleteAccount()
    {
      let user = session?.user;
      console.log("This function currently doesn't exist.")
      if(user)
      {
        console.log(`Placeholder for deleting the following account \nEmail: ${user.email}\nName: ${user.user_metadata.name}`)
      }
    }
</script>

  <div class="w-full max-w-3xl mx-auto p-6 md:p-10">
    <h1 class="text-3xl font-bold mb-6">Account Settings</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-2">Personal Information</h2>
          <div class="space-y-4">
            <div class="grid grid-cols-2 gap-4">
              <div>
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Enter your name" />
              </div>
              <div>
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
            </div>
            <div>
              <Label>Profile Picture</Label>
              <div class="flex items-center gap-4 mt-3">
                <Avatar.Root class="size-14">
                  <!-- <Avatar.Image src="/placeholder-user.jpg" alt="Profile Picture" /> -->
                    <Avatar.Image></Avatar.Image>
                  <Avatar.Fallback>JD</Avatar.Fallback>
                </Avatar.Root>
                <Button variant="outline">Change</Button>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h2 class="text-xl font-semibold mb-2">Password</h2>
          <div class="space-y-4">
            <div>
              <Label for="current-password">Current Password</Label>
              <Input id="current-password" type="password" />
            </div>
            <div>
              <Label for="new-password">New Password</Label>
              <Input id="new-password" type="password" />
            </div>
            <div>
              <Label for="confirm-password">Confirm New Password</Label>
              <Input id="confirm-password" type="password" />
            </div>
            <Button variant="outline">Update Password</Button>
          </div>
        </div>
      </div>
      <div class="space-y-6">
        <div>
          <h2 class="text-xl font-semibold mb-2">Account Deletion</h2>
          <div class="space-y-2">
            <p class="text-muted-foreground">
              Deleting your account is permanent and cannot be undone. All your data will be permanently deleted.
            </p>
            <AlertDialog.Root>
              <AlertDialog.Trigger>
                <Button on:click={deleteAccount} variant="destructive">Delete Account</Button>
              </AlertDialog.Trigger>
              <AlertDialog.Content>
                <AlertDialog.Header>
                  <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
                  <AlertDialog.Description>
                    Placeholder for deleting the following account
                    <p>{session?.user ? `\nEmail: ${session.user.email}\nName: ${session.user.user_metadata.name}`: "No user." }</p>
                  </AlertDialog.Description>
                </AlertDialog.Header>
                <AlertDialog.Footer>
                  <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                  <AlertDialog.Action>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
        </div>
      </div>
    </div>
  </div>
  