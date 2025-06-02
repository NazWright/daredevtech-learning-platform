## 🧪 Developing New Modules

To add a new AWS service learning path (e.g. `S3`, `Lambda`):

1. Create a new folder in `src/app/<service-name>/`
2. Add the following files:
   - `page.tsx` → Module overview page
   - `slideshow.tsx` → Educational intro slideshow
   - `sandbox.tsx` (or another interactive file) → Hands-on module
3. Use `components/Slide.tsx` to match the global design style
4. Add a routing link on the homepage (`src/app/page.tsx`) for navigation

---

## ✨ Contributing

Pull requests welcome! Please follow this structure when adding:

- New modules → `src/app/<module-name>/`
- Shared components → `src/components/`
- AWS logic tools → `src/lib/`

Before submitting:
```bash
npm run lint