<script>
    import { Button } from '$lib/components/ui/button';
    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
    import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
    // import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
    // import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from 'recharts';
    // import { ChartTooltipContent, ChartTooltip, ChartContainer } from '$lib/components/ui/chart';
    import { Package2Icon, BellIcon, HomeIcon, LineChartIcon, UsersIcon, LandmarkIcon, SettingsIcon, CircleUser } from 'lucide-svelte';
  
    // // You may need to implement or import these functions
    // function BarchartChart(props) {
    //   // Implementation
    // }
  
    // function LinechartChart(props) {
    //   // Implementation
    // }
  </script>
  
  <div class="grid min-h-screen w-full grid-cols-[280px_1fr]">
    <div class="hidden border-r bg-muted/40 lg:block">
      <div class="flex h-full max-h-screen flex-col gap-2">
        <div class="flex h-[60px] items-center border-b px-6">
          <a href="#" class="flex items-center gap-2 font-semibold">
            <Package2Icon class="h-6 w-6" />
            <span class="">Acme API Analytics</span>
          </a>
          <Button variant="outline" size="icon" class="ml-auto h-8 w-8">
            <BellIcon class="h-4 w-4" />
            <span class="sr-only">Toggle notifications</span>
          </Button>
        </div>
        <div class="flex-1 overflow-auto py-2">
          <nav class="grid items-start px-4 text-sm font-medium">
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <HomeIcon class="h-4 w-4" />
              Home
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg bg-muted px-3 py-2 text-primary transition-all hover:text-primary">
              <LineChartIcon class="h-4 w-4" />
              Analytics
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <UsersIcon class="h-4 w-4" />
              Users
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <LandmarkIcon class="h-4 w-4" />
              Billing
            </a>
            <a href="#" class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary">
              <SettingsIcon class="h-4 w-4" />
              Settings
            </a>
          </nav>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
        <a href="#" class="lg:hidden">
          <Package2Icon class="h-6 w-6" />
          <span class="sr-only">Home</span>
        </a>
        <div class="w-full flex-1">
          <h1 class="text-lg font-semibold">API Analytics</h1>
        </div>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild let:builder>
            <Button variant="ghost" size="icon" class="rounded-full border w-8 h-8">
              <!-- <img src="/placeholder.svg" width="32" height="32" class="rounded-full" alt="Avatar" /> -->
              <CircleUser class="rounded-full" width={36} height={36}/>
              <span class="sr-only">Toggle user menu</span>
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
      <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div class="grid gap-6">
          <div class="grid md:grid-cols-3 gap-6">
            <Card class="flex flex-col">
              <CardHeader>
                <CardDescription>Total API Requests</CardDescription>
                <CardTitle>12,345</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-muted-foreground">+25% from last week</div>
              </CardContent>
            </Card>
            <Card class="flex flex-col">
              <CardHeader>
                <CardDescription>Total Processing Time</CardDescription>
                <CardTitle>45 mins</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-muted-foreground">-10% from last week</div>
              </CardContent>
            </Card>
            <Card class="flex flex-col">
              <CardHeader>
                <CardDescription>Avg. Response Time</CardDescription>
                <CardTitle>2.3 secs</CardTitle>
              </CardHeader>
              <CardContent>
                <div class="text-muted-foreground">+5% from last week</div>
              </CardContent>
            </Card>
          </div>
          <Card>
            <CardHeader>
              <CardTitle>API Requests by User</CardTitle>
            </CardHeader>
            <CardContent>
              <!-- <BarchartChart class="aspect-[9/4]" /> -->
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>API Request Details</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>ID</TableHead>
                    <TableHead>Endpoint</TableHead>
                    <TableHead>Method</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Timestamp</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>1</TableCell>
                    <TableCell>/api/users</TableCell>
                    <TableCell>GET</TableCell>
                    <TableCell>200</TableCell>
                    <TableCell>250ms</TableCell>
                    <TableCell>2023-07-29 10:15 AM</TableCell>
                  </TableRow>
                  <!-- Add more rows as needed -->
                </TableBody>
              </Table>
            </CardContent>
            <CardFooter>
              <!-- <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>1</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination> -->
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  </div>