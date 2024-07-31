<script lang="ts">
    import * as Sheet from "$lib/components/ui/sheet";
</script>

<div>
    <Sheet.Root>
        <Sheet.Trigger>Open</Sheet.Trigger>
        <Sheet.Content side="left">
            <Sheet.Header>
            <Sheet.Title>Are you sure absolutely sure?</Sheet.Title>
            <Sheet.Description>
                This action cannot be undone. This will permanently delete your account
                and remove your data from our servers.
            </Sheet.Description>
            </Sheet.Header>
        </Sheet.Content>
    </Sheet.Root>
</div>

<style>
</style>