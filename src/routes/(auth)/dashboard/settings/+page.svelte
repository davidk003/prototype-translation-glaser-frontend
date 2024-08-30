<script lang="ts">
  import "$lib/../app.css";
  import { Label } from "$lib/components/ui/label";
  import { Input } from "$lib/components/ui/input";
  import * as Avatar from "$lib/components/ui/avatar";
  import { Button } from "$lib/components/ui/button";
  import * as AlertDialog from "$lib/components/ui/alert-dialog";
  import * as Select from "$lib/components/ui/select";


  export let data;
  let { supabase, session } = data
  $: ({ supabase, session } = data)

  let user = session?.user;
  $: user = session?.user;

  let selectedUploadType = {value: "URL", label: "URL"};

  function deleteAccount(): void
  {
    let user = session?.user;
    console.log("This function currently doesn't exist.")
    if(user)
    {
      console.log(`Placeholder for deleting the following account \nEmail: ${user.email}\nName: ${user.user_metadata.name}`)
    }
  }

  function updatePassword(): void
  {
    console.log("Placeholder function for updating password.");
  }

  function getInitials(): string | null
  {
    if (!user)
    {
      return null;
    }
    return user.user_metadata.name.split(" ").map((n:string) => n[0]).join("");
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
                  <Avatar.Image src={user?.user_metadata.avatar_url} alt="Profile Picture" />
                  <Avatar.Fallback>{getInitials()}</Avatar.Fallback>
                </Avatar.Root>


                <AlertDialog.Root>
                  <AlertDialog.Trigger>
                    <Button variant="outline">Change</Button>
                  </AlertDialog.Trigger>
                  <AlertDialog.Content>
                    <AlertDialog.Header>
                      <AlertDialog.Title>Changing Profile Picture</AlertDialog.Title>
                      <AlertDialog.Description>
                        Enter the image you want to use as your profile picture.
                      </AlertDialog.Description>

                      <div>
                      <Select.Root bind:selected={selectedUploadType}>
                        <Select.Trigger class="w-[180px]">
                          <Select.Value placeholder="Image URL" />
                        </Select.Trigger>
                        <Select.Content>
                          <Select.Item value="URL">URL</Select.Item>
                          <Select.Item value="File">File</Select.Item>
                          <Select.Item value="Default">Default google</Select.Item>
                          <Select.Item value="None">None (Use Initials)</Select.Item>
                        </Select.Content>
                      </Select.Root>
                        {#if selectedUploadType.value === "URL"}
                          <Input placeholder="Enter image URL" />
                        {:else if selectedUploadType.value === "File"}
                        <Label for="image">Upload Image</Label>
                        <Input id="image" type="file" />
                        {:else if selectedUploadType.value === "Default"}
                        <Avatar.Root class="size-14 m-auto">  
                          <Avatar.Image src={user?.user_metadata.avatar_url} alt="Profile Picture" />
                        </Avatar.Root>
                        {:else}
                        <Avatar.Root class="size-14 m-auto">
                          <Avatar.Image src={user?.user_metadata.avatar_url} alt="Profile Picture" />
                          <Avatar.Fallback>{getInitials()}</Avatar.Fallback>
                        </Avatar.Root>
                        {/if}
                        

                    </AlertDialog.Header>
                    <AlertDialog.Footer>
                      <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                      <AlertDialog.Action on:click={()=>{console.log("placeholder action for changing profile picture")}}>Continue</AlertDialog.Action>
                    </AlertDialog.Footer>
                  </AlertDialog.Content>
                </AlertDialog.Root>
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

            <AlertDialog.Root>
            <AlertDialog.Trigger>
              <Button variant="outline">Update Password</Button>
            </AlertDialog.Trigger>
            <AlertDialog.Content>
              <AlertDialog.Header>
                <AlertDialog.Title>Updating password</AlertDialog.Title>
                <AlertDialog.Description>
                  This function is currently not implemented.
                </AlertDialog.Description>
              </AlertDialog.Header>
              <AlertDialog.Footer>
                <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                <AlertDialog.Action on:click={updatePassword}>Continue</AlertDialog.Action>
              </AlertDialog.Footer>
            </AlertDialog.Content>
          </AlertDialog.Root>

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
                  <AlertDialog.Action on:click={()=>{console.log("Deleted.")}}>Continue</AlertDialog.Action>
                </AlertDialog.Footer>
              </AlertDialog.Content>
            </AlertDialog.Root>
          </div>
        </div>
      </div>
    </div>
  </div>
  