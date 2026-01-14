<template>
    <div>
        <Header />
        <div class="flex justify-center w-full">
            <div class="max-w-5xl min-w-5xl flex-1">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>

<style>
html body {
    padding-top: 65px
}
</style>