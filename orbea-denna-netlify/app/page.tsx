import type { Metadata } from "next";
import "./denna.css";

const modelsUrl = "https://www.recycles.co.il/AllResults?bskeyword=denna";

export const metadata: Metadata = {
  title: "ORBEA DENNA | יותר עוצמה. יותר טווח. יותר כיף.",
  description:
    "ORBEA Denna - אופני גראבל חשמליים לרכיבות ארוכות, חזקות ובעיקר מהנות.",
};

const quickFeatures = [
  {
    image: "/models/denna/official-slider-05b.webp",
    focus: "58% center",
    title: "אין סוף אפשרויות",
    text: "עם מנוע עוצמתי ואחיזה מדויקת, אין גבול למה שאפשר לעשות עם ה-Denna.",
  },
  {
    image: "/models/denna/official-banner-04.webp",
    focus: "70% 72%",
    title: "כמה שיותר רחוק",
    text: "סוללת 420Wh מתקדמת מאפשרת ליהנות מרכיבות ארוכות יותר מאי פעם.",
  },
  {
    image: "/models/denna/official-slider-03b.webp",
    focus: "50% center",
    title: "רכיבה חלקה וזורמת",
    text: "שילוב של גמישות מדויקת ועיצוב חכם מעניק יציבות ואחיזה בכל תנאי השטח.",
  },
  {
    image: "/models/denna/official-slider-05a.webp",
    focus: "50% 55%",
    title: "תשומת לב לפרטים הקטנים",
    text: "פתרונות חכמים בכל נקודה באופניים הופכים כל רכיבה לחוויה נוחה, מדויקת ומהנה.",
  },
];

export default function DennaPage() {
  return (
    <main className="denna-page">
      <header className="topbar">
        <a className="recycles-lockup" href="https://www.recycles.co.il/" target="_blank" rel="noreferrer">
          <img src="/shared/recycles-logo-black.png" alt="Recycles" />
        </a>
        <div className="topbar-model" aria-label="ORBEA DENNA">ORBEA DENNA</div>
        <a className="topbar-cta" href={modelsUrl} target="_blank" rel="noreferrer">לדגמים</a>
      </header>

      <section className="hero" id="top">
        <img className="hero-image" src="/models/denna/take-control.webp" alt="ORBEA Denna ברכיבת גראבל" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="brand-lockup">
            <img src="/models/denna/orbea-logo-white-cropped.png" alt="ORBEA" />
            <h1>DENNA</h1>
          </div>
          <div className="hero-slogan" aria-label="WHERE THE FUN BEGINS">
            <span>WHERE THE</span>
            <strong>FUN</strong>
            <span>BEGINS</span>
          </div>
        </div>
        <a className="scroll-cue" href="#story" aria-label="המשך לעמוד">↓</a>
      </section>

      <section className="opening" id="story">
        <div className="opening-title">
          <h2>יותר עוצמה. יותר טווח.<br />יותר כיף.</h2>
        </div>
        <p>
          ה-Denna הם אופני גראבל חשמליים שנולדו לרכיבות ארוכות, חזקות ובעיקר מהנות.
          מערכת סיוע חשמלית ייעודית לגראבל מעניקה בוסט בעליות, אחיזה חזקה בשטח הקשוח
          ביותר וטווח רכיבה גדול לימים שלא רוצים לרדת מהאוכף. יחד עם מרווח צמיגים
          נדיב ושלדה חלקה, מקבלים חוויית גראבל מלאה, נוחה ומהנה.
        </p>
      </section>

      <section className="cinematic-card">
        <img src="/models/denna/official-slider-09a.webp" alt="רוכב ORBEA Denna במסע גראבל" />
      </section>

      <section className="best-section">
        <div className="section-heading">
          <h2 className="english-title">The best of Denna</h2>
        </div>
        <div className="feature-cards">
          {quickFeatures.map((feature) => (
            <details className="feature-card" key={feature.title}>
              <summary>
                <img src={feature.image} alt="" style={{ objectPosition: feature.focus }} />
                <span className="card-gradient" />
                <h3>{feature.title}</h3>
                <b aria-hidden="true">+</b>
              </summary>
              <p>{feature.text}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="split-feature dark" id="technology">
        <div className="feature-copy">
          <h2>סיוע חשמלי<br />מותאם לגראבל.</h2>
          <p>
            מנוע Shimano EP801 עם כיוון RS Gen2 RC ייעודי ל-Denna, מספק מומנט של עד
            85Nm ומעניק כוח מאוזן, משקל אופטימלי וטווח רכיבה מוביל בקטגוריה. כך אפשר
            להתמודד עם כל סוג שטח - בלי לאבד את תחושת הרכיבה הטבעית.
          </p>
        </div>
        <div className="feature-media motor-media">
          <img src="/models/denna/official-slider-03a.webp" alt="מנוע Shimano EP801 בשלדת ORBEA Denna" />
        </div>
      </section>

      <section className="full-media">
        <img src="/models/denna/official-slider-07b.webp" alt="רכיבת ORBEA Denna בשביל מיוער" />
        <div className="full-media-copy">
          <h2>גיאומטריה מותאמת<br />לרכיבת גראבל.</h2>
          <span>
            גיאומטריית ה-Denna משלבת צינור אוכף קצר עם זווית גדולה יותר לספיגת
            ויברציות, תומכות שרשרת מותאמות וציר מרכזי נמוך. התוצאה היא היגוי מדויק,
            יציבות וביטחון בכל תוואי שטח.
          </span>
        </div>
      </section>

      <section className="tire-feature">
        <div className="tire-media">
          <img src="/models/denna/denna-50c-detail.png" alt="מרווח צמיגים של עד 50C ב-ORBEA Denna" />
        </div>
        <div className="tire-copy">
          <h2>מרווח צמיגים</h2>
          <div className="tire-number" aria-label="עד 50C">
            <span>עד</span>
            <div>
              <strong>50</strong>
              <b>C</b>
            </div>
          </div>
          <p>
            אחד הדברים החשובים ברכיבת גראבל הוא הגיוון. ה-Denna תומכים בצמיגים
            ברוחב של עד 50C, כולל אפשרות לצמיגי MTB - ליותר אחיזה, נוחות וביטחון.
          </p>
        </div>
      </section>

      <section className="fork-feature">
        <div className="fork-media">
          <img src="/models/denna/denna-fork-detail.png" alt="מזלג הקרבון של ORBEA Denna" />
        </div>
        <div className="fork-copy">
          <h2>מזלג שמשפר<br />ביצועי גראבל.</h2>
          <p>
            ה-Denna Fork הוא מזלג קרבון OMR עם זרועות ארוכות לספיגת זעזועים ובסיס
            קשיח להיגוי מדויק ויציב. תואם לצמיגים עד 50C, עם מרווח של 5 מ״מ מכל צד,
            והעברת כבלי הבלמים הפנימית שומרת על חזית נקייה ואווירודינמית.
          </p>
        </div>
      </section>

      <section className="materials" id="materials">
        <div className="materials-heading">
          <h2>שני חומרים.<br />אותה חוויה.</h2>
          <span>
            Denna זמינים בשלדת קרבון OMR או אלומיניום Hydro מלוטש.
          </span>
        </div>
        <div className="material-cards">
          <article>
            <div>
              <h3>קרבון OMR</h3>
              <span>
                שכבות קרבון מתקדמות וחזקות במיוחד משפרות את יחס המשקל-לקשיחות.
                טכנולוגיית יציקה מתקדמת מונעת קמטים ופגמים באזורים קריטיים ומאפשרת
                להשתמש בפחות קרבון, בלי לוותר על החוזק.
              </span>
            </div>
          </article>
          <article>
            <div>
              <h3>אלומיניום Hydro</h3>
              <span>
                אותה גישה הנדסית כמו בשלדת הקרבון - רק מאלומיניום מלוטש. הריתוכים
                באזור המשולש המרכזי מלוטשים לגימור חלק ונקי, והצינורות מעוצבים בעובי
                ובצורה אופטימליים כדי להעניק מראה פרימיום ותחושת רכיבה שקרובה מאוד
                לזו של שלדת הקרבון.
              </span>
            </div>
          </article>
        </div>
      </section>

      <section className="profiles">
        <div className="profiles-copy">
          <h2>שני פרופילי מנוע<br />לבחירה שלכם.</h2>
        </div>
        <div className="profile-grid">
          <article className="profile-card profile-gravel">
            <b aria-hidden="true">01</b>
            <h3>Gravel</h3>
            <div className="profile-lines" aria-hidden="true"><i /><i /><i /></div>
            <p>פרופיל שמעניק תחושת רכיבה טבעית במיוחד ומקסימום טווח. אידיאלי למשטחים חלקים ולרכיבה בקצב דיווש גבוה.</p>
          </article>
          <article className="profile-card profile-plus">
            <b aria-hidden="true">02</b>
            <h3>Gravel Plus</h3>
            <div className="profile-lines" aria-hidden="true"><i /><i /><i /></div>
            <p>פרופיל שמיועד לשטח מחוספס יותר, עם מומנט גבוה יותר בקצב דיווש נמוך במטרה למקסם אחיזה.</p>
          </article>
        </div>
      </section>

      <section className="closing">
        <img className="closing-image" src="/models/denna/official-banner-06.webp" alt="רוכבת על ORBEA Denna" />
        <div className="closing-shade" />
        <div className="closing-copy">
          <div className="brand-lockup">
            <img src="/models/denna/orbea-logo-white-cropped.png" alt="ORBEA" />
            <h2>DENNA</h2>
          </div>
          <a className="primary-cta" href={modelsUrl} target="_blank" rel="noreferrer">לכל הדגמים</a>
        </div>
      </section>

      <footer>
        <img src="/shared/recycles-logo-white.png" alt="Recycles" />
        <p>© Recycles 2026. כל הזכויות שמורות.</p>
      </footer>
    </main>
  );
}
