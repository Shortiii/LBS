import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alumni: resolve(__dirname, 'alumni.html'),
        career: resolve(__dirname, 'career.html'),
        // news: resolve(__dirname, 'news.html'),
        login: resolve(__dirname, 'login.html'),
        event: resolve(__dirname, 'event.html'),
        emptyEvent: resolve(__dirname, 'emptyEvent.html'),
        moreEvent: resolve(__dirname, 'moreEvent.html'),
        resource: resolve(__dirname, 'resource.html'),
        resourceAudio: resolve(__dirname, 'resourceAudio.html'),
        resourceVideo: resolve(__dirname, 'resourceVideo.html'),
        resourceBook: resolve(__dirname, 'resourceBook.html'),
      }
    }
  }
})
