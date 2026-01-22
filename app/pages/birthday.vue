<template>
    <article class="min-h-screenpy-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto">
            <h1 class="text-4xl font-bold text-gray-900 mb-8">The Secret Birthday Video</h1>
            <p>Happy Birthday, {{ $route.params.name || "Student" }}! This video is especially for you and only you.
                Thanks for being
                such an awesome student!</p>
            <iframe src="https://drive.google.com/file/d/1cmAMb_eQdiB3Ut32HniIW-drOrua_BR4/preview" width="640"
                height="480"></iframe>
        </div>
    </article>
</template>

<script setup>
</script>