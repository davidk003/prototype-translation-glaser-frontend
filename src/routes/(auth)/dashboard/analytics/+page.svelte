<script>
    import "$lib/../app.css";
    import { Button } from '$lib/components/ui/button';
    import * as Pagination from "$lib/components/ui/pagination";    import * as DropdownMenu from "$lib/components/ui/dropdown-menu";
    import { Card, CardHeader, CardDescription, CardTitle, CardContent, CardFooter } from '$lib/components/ui/card';
    import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '$lib/components/ui/table';
    // import { Pagination, PaginationContent, PaginationItem, PaginationPrevious, PaginationLink, PaginationNext } from '@/components/ui/pagination';
    // import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from 'recharts';
    // import { ChartTooltipContent, ChartTooltip, ChartContainer } from '$lib/components/ui/chart';
    import { LineChart } from 'lucide-svelte';
  
  </script>
  <div>
  <!-- <div class="grid min-h-screen w-full grid-cols-[280px_1fr]"> -->
    <div class="flex flex-col">
      <header class="flex h-14 items-center gap-4 border-b bg-muted/40 px-6">
        <LineChart class="h-6 w-6" />
        <div class="w-full flex-1">
          <h1 class="text-2xl font-bold">API Analytics</h1>
        </div>
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
              <Pagination.Root count={100} perPage={10} let:pages let:currentPage>
                <Pagination.Content>
                  <Pagination.Item>
                    <Pagination.PrevButton />
                  </Pagination.Item>
                  {#each pages as page (page.key)}
                    {#if page.type === "ellipsis"}
                      <Pagination.Item>
                        <Pagination.Ellipsis />
                      </Pagination.Item>
                    {:else}
                      <Pagination.Item>
                        <Pagination.Link {page} isActive={currentPage == page.value}>
                          {page.value}
                        </Pagination.Link>
                      </Pagination.Item>
                    {/if}
                  {/each}
                  <Pagination.Item>
                    <Pagination.NextButton />
                  </Pagination.Item>
                </Pagination.Content>
              </Pagination.Root>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  </div>