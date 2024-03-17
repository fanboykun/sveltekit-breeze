<script lang="ts">
    const stacks = [
        {
        url: 'https://lucia-auth.com/',
        name: 'Lucia',
        description: 'Lucia is an auth library for your server that abstracts away the complexity of handling sessions. It works alongside your database to provide an API that is easy to use, understand, and extend.'
        },
        {
        url: 'https://www.prisma.io/',
        name: 'Prisma',
        description: 'Prisma ORM is an open-source next-generation ORM. It consists of the following parts: Prisma Client: Auto-generated and type-safe query builder for Node.js & TypeScript.'
        },
        {
        url: 'https://www.shadcn-svelte.com/',
        name: 'Shadcn Svelte',
        description: 'A component library that Built & designed by shadcn. Ported to Svelte by huntabyte. Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source.'
        },
        {
        url: 'https://www.shadcn-svelte.com/',
        name: 'Typescript',
        description: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.'
        },
    ] as const
</script>

{#each stacks as stack}
<div class="bg-white p-4 rounded-xl shadow-xl">
    <h3 class="text-black font-bold text-xl text-center">
        <a href={stack.url}>{stack.name}</a>
    </h3>
    <p class="text-justify text-gray-700 text-md">
        {stack.description}
    </p>
</div>
{/each}