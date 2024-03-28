<script lang="ts">
	import { browser } from "$app/environment";
	import { createGradientAvatar } from '$lib/client/utils'
	import Badge from "$lib/components/ui/badge/badge.svelte";
	import type { PageData } from "./$types";

	export let data: PageData
</script>
<div class="h-full bg-gray-50">
	<div class="px-8 pt-4 pb-2 bg-gray-50">
		<h3 class="text-lg font-medium">Dashboard</h3> 
		<p class="text-sm text-muted-foreground">Summary of your application. (Example of a dashboard card stats)</p>
	</div>

	<!-- Example of a dashboard card stats -->
	<div class="px-4 py-2 ">
		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
			<div class="rounded-xl border bg-card text-card-foreground shadow">
				<div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
					<h3 class="tracking-tight text-sm font-medium">Total Revenue</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-dollar-sign h-4 w-4 text-muted-foreground"
						><line x1="12" x2="12" y1="2" y2="22"></line><path
							d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
						></path></svg
					>
				</div>
				<div class="p-6 pt-0">
					<div class="text-2xl font-bold">$45,231.89</div>
					<p class="text-xs text-muted-foreground">+20.1% from last month</p>
				</div>
			</div>
			<div class="rounded-xl border bg-card text-card-foreground shadow">
				<div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
					<h3 class="tracking-tight text-sm font-medium">Subscriptions</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-users h-4 w-4 text-muted-foreground"
						><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"
						></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"
						></path></svg
					>
				</div>
				<div class="p-6 pt-0">
					<div class="text-2xl font-bold">+2350</div>
					<p class="text-xs text-muted-foreground">+180.1% from last month</p>
				</div>
			</div>
			<div class="rounded-xl border bg-card text-card-foreground shadow">
				<div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
					<h3 class="tracking-tight text-sm font-medium">Sales</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-credit-card h-4 w-4 text-muted-foreground"
						><rect width="20" height="14" x="2" y="5" rx="2"></rect><line
							x1="2"
							x2="22"
							y1="10"
							y2="10"
						></line></svg
					>
				</div>
				<div class="p-6 pt-0">
					<div class="text-2xl font-bold">+12,234</div>
					<p class="text-xs text-muted-foreground">+19% from last month</p>
				</div>
			</div>
			<div class="rounded-xl border bg-card text-card-foreground shadow">
				<div class="p-6 flex flex-row items-center justify-between space-y-0 pb-2">
					<h3 class="tracking-tight text-sm font-medium">Active Now</h3>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
						class="lucide-icon lucide lucide-activity h-4 w-4 text-muted-foreground"
						><path d="M22 12h-4l-3 9L9 3l-3 9H2"></path></svg
					>
				</div>
				<div class="p-6 pt-0">
					<div class="text-2xl font-bold">+573</div>
					<p class="text-xs text-muted-foreground">+201 since last hour</p>
				</div>
			</div>
		</div>
	</div>


	<div class="px-4 py-2">

		<div class="grid grid-cols-1 lg:grid-cols-5 gap-x-4">
			{#if data.user?.role === "ADMIN"}
			<div class="col-span-3">
				<div class="px-4 pt-4 pb-2 bg-gray-50">
					<h3 class="text-lg font-medium">Recent Users</h3> 
					<p class="text-sm text-muted-foreground">Recentrly Registered Users</p>
				</div>
				{#if data?.users}
					{#each data?.users as user}
						<div class="rounded-xl shadow p-6 border bg-white my-2">
							<div class="space-y-8">

								<div class="flex items-center">
									<div
										class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9"
										data-avatar-root=""
									>
									{#if browser}
										<img
											src={createGradientAvatar()}
											data-melt-avatar-image=""
											data-bits-avatar-image=""
											alt="Avatar"
											class="aspect-square h-full w-full"
											style="display: block;"
										/>
									{/if}
										<span
											data-melt-avatar-fallback=""
											data-avatar-fallback=""
											class="flex h-full w-full items-center justify-center rounded-full bg-muted"
											style="display: none;">OM</span
										>
									</div>
									<div class="ml-4 space-y-1">
										<p class="text-sm font-medium leading-none">{user?.name}</p>
										<p class="text-sm text-muted-foreground">{user.email}</p>
									</div>
									<div class="ml-auto font-medium">

									<Badge variant={user?.role === "USER" ? 'secondary' : 'default'} size="sm">{user?.role.toLowerCase()}</Badge>

									</div>
								</div>

							</div>
						</div>
					{/each}
				{/if}
			</div>

			<div class="col-span-2">
				<div class="px-4 pt-4 pb-2 bg-gray-50">
					<h3 class="text-lg font-medium">User Count By Role</h3> 
					<p class="text-sm text-muted-foreground">Numbers of the users based on their Role</p>
				</div>
				{#if data?.roles}
					{#each data?.roles as role}

						<!-- <div class="rounded-xl shadow p-6 border bg-white my-2">
							<div class="space-y-8">

								<div class="flex items-center">
							
									<div class="ml-4 space-y-1">
										<p class="text-sm font-medium leading-none">{role?.name?.toLowerCase()}</p>
										<p class="text-sm text-muted-foreground">{role.desc}</p>
									</div>
									<div class="ml-auto font-medium">

									<Badge size="sm">{role.count} users</Badge>

									</div>
								</div>

							</div>
						</div> -->

						<div class="flex items-center p-2 justify-center w-full">
							<div class="rounded-xl border bg-card text-card-foreground shadow w-full">
								<div class="flex-col p-6 pb-2 grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
									<div class="space-y-1">
										<h3 class="font-semibold leading-none tracking-tight">{role?.name}</h3>
										<p class="text-sm text-muted-foreground">
											{role?.desc}
										</p>
									</div>
									<div class="flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground">
										<button type="button" class="inline-flex w-full items-center justify-center rounded-md text-sm font-medium whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-secondary text-secondary-foreground hover:bg-secondary/80 h-9 py-2 px-3 shadow-none">
											{role?.count} users
										</button>
									</div>
								</div>
							</div>
						</div>
						
					{/each}
				{/if}



			</div>

			{/if}
		</div>
	</div>

</div>