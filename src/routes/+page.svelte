<script lang="ts">
    import { Button } from "$lib/components/ui/button";
    import { Label } from "$lib/components/ui/label";
    import { Input } from "$lib/components/ui/input";
    import { Textarea } from "$lib/components/ui/textarea";
    
</script>

<div class="flex flex-col min-h-screen">
    <header class="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
      <a href="#" class="mr-6 flex items-center">
        <!-- <MountainIcon class="h-6 w-6" /> -->
        <span class="sr-only">Acme Inc</span>
      </a>
      <nav class="ml-auto flex items-center gap-4 sm:gap-6">
        <a href="about-us" class="text-sm font-medium hover:underline underline-offset-4">About us</a>
        <a href="resources" class="text-sm font-medium hover:underline underline-offset-4">Resources</a>
        <Button href="login" variant="outline">Login</Button>
      </nav>
    </header>
    <main class="flex-1">
      <section class="w-full py-12 md:py-24 lg:py-32">
        <div class="container grid max-w-5xl gap-8 px-4 md:px-6 lg:grid-cols-2">
          <div class="space-y-4">
            <h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Streamline Your Workflow with Our Service
            </h1>
            <p class="text-muted-foreground md:text-xl">
              Our platform helps you manage your tasks, collaborate with your team, and stay on top of your projects.
              Get started today and take your productivity to the next level.
            </p>
            <a
              href="/dashboard"
              class="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              Get Started
            </a>
          </div>
          <div class="flex items-center justify-center">
            <img
              src="/placeholder.svg"
              alt="Hero Image"
              class="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
            />
          </div>
        </div>
      </section>
    </main>
    <footer class="bg-muted p-6 md:py-12 w-full">
      <div class="container max-w-7xl">
        <div class="grid gap-8">
          <div class="grid gap-4">
            <h3 class="font-semibold">Contact Us</h3>
            <form class="grid gap-4">
              <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input id="name" type="text" placeholder="Enter your name" />
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" />
              </div>
              <div class="grid gap-2">
                <Label for="message">Message</Label>
                <Textarea id="message" placeholder="Enter your message" rows={4} />
              </div>
              <Button type="submit" class="w-full">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </footer>

  
  <style>
    .container {
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  
    @media (min-width: 640px) {
      .container {
        max-width: 640px;
      }
    }
  
    @media (min-width: 768px) {
      .container {
        max-width: 768px;
      }
    }
  
    @media (min-width: 1024px) {
      .container {
        max-width: 1024px;
      }
    }
  
    @media (min-width: 1280px) {
      .container {
        max-width: 1280px;
      }
    }
  </style>
    <!-- <h1>Welcome to SvelteKit</h1>
    <p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
    <Button>Test </Button> -->
</div>