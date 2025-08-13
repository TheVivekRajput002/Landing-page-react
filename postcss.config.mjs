// postcss.config.mjs
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss(),      // Note the parentheses - calling it as a function
    autoprefixer(),
  ],
}