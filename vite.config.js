import { defineConfig } from 'vite'
import { resolve } from 'path'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss({
    config: './tailwind.config.js',
  })],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        alumni: resolve(__dirname, 'alumni.html'),
        alumniSpotlight: resolve(__dirname, 'alumniSpotlight.html'),
        personalizedSpotlight: resolve(__dirname, 'personalizedSpotlight.html'),
        homeDetails: resolve(__dirname, 'homeDetails.html'),
        membership: resolve(__dirname, 'membership.html'),
        career: resolve(__dirname, 'career.html'),
        careerDetails: resolve(__dirname, 'careerDetails.html'),
        news: resolve(__dirname, 'news.html'),
        highlight: resolve(__dirname, 'highlight.html'),
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
