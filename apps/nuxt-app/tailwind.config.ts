import { createPreset } from "shadcn-vue/preset";

export default {
  presets: [createPreset()],
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
    './app/**/*.{vue,js,ts}',

    // ✅ Add shared UI paths
    '../../libs/ui/src/**/*.{vue,js,ts}',
    '../../libs/ui/src/components/**/*.{vue,js,ts}',
  ],

  darkMode: 'class',
  theme: {
    extend: {},
  },
  plugins: [],
}
