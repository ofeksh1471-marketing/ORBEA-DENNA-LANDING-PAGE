# דף הנחיתה ORBEA Denna

פרויקט Next.js נקי ומוכן להעלאה ל-GitHub ולפרסום ב-Netlify.

## מה מעלים ל-GitHub

מעלים את כל הקבצים והתיקיות שבתיקייה הזאת, כולל:

- `app` - קוד ועיצוב הדף.
- `public` - כל התמונות והלוגואים.
- `package.json` - תלויות ופקודות הפרויקט.
- `netlify.toml` - הגדרות הפרסום ב-Netlify.
- `next.config.ts`, `tsconfig.json` ו-`next-env.d.ts`.

אין להעלות את `node_modules` או את `.next`. הם מוחרגים אוטומטית באמצעות `.gitignore`.

## חיבור ל-Netlify

1. יוצרים Repository חדש ב-GitHub ומעלים אליו את תוכן התיקייה.
2. ב-Netlify בוחרים **Add new site** ואז **Import an existing project**.
3. מחברים את חשבון GitHub ובוחרים את ה-Repository.
4. Netlify יקרא אוטומטית את `netlify.toml`:
   - פקודת Build: `npm run build`
   - תיקיית Publish: `.next`
5. לוחצים **Deploy site**.

## עבודה מקומית

```bash
npm install
npm run dev
```

בדיקת גרסת הייצור:

```bash
npm run build
```
