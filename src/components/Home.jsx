import { useState, useEffect } from "react";
// Put sunlogo.png in /public/ (imported as "/sunlogo.png")
import universityLogo from "/sunlogo.png";

/* ------------------------------------------------------------------
   SETUP
   1. Put all images in /public/ (same filenames as used below).
   2. All styling is inline CSS. Add once to global CSS:
         body { margin: 0; }
         html { scroll-behavior: smooth; }
   3. In handleSubmit(), send the lead to your CRM and fire your
      Google Ads conversion event (gtag_report_conversion).
------------------------------------------------------------------- */

const RECRUITERS = [
  { name: "Rêve Pharma", src: "/intellexempire.png" },
  { name: "Yugandhar", src: "/jkb-legal.png" },
  { name: "Nova Beauty", src: "/lawyer-panel.jpeg" },
  { name: "Pantaloons", src: "/lex.png" },
  { name: "Forest Essentials", src: "/singhania.png" },
  { name: "Design Cafe", src: "/spd.jpeg" },
  { name: "The Souled Store", src: "/sui-generis.jpeg" },
  { name: "Anant Fragrance Pvt. Ltd.", src: "/times-of-india.jpeg" },
];

const CAMPUS = [
  { src: "/labimg.jpg", title: "Advanced Labs", text: "State-of-the-art laboratories for hands-on experiments and innovation." },
  { src: "/studentActivities.jpg", title: "Student Activities", text: "Cultural festivals, sports, clubs, and various student-led initiatives." },
  { src: "/securityimg.webp", title: "24×7 Security", text: "Round-the-clock surveillance with advanced monitoring systems." },
  { src: "/gym.webp", title: "Gymnasium", text: "Modern fitness center with advanced workout machines." },
  { src: "/campus-1.jpg", title: "Vibrant Campus Atmosphere", text: "Experience an energetic campus filled with learning, culture and fun." },
  { src: "/classroom-1.jpg", title: "Modern Classrooms", text: "Well-equipped digital classrooms designed for interactive learning." },
  { src: "/DSC_5062.jpg", title: "Library & Research Center", text: "A huge digital + physical library supporting academic and research needs." },
  { src: "/hostel.jpg", title: "Hostel & Accommodation", text: "Comfortable, secure hostel facilities that feel like a second home." },
];

const IMG = {
  hero: "/moot-3.jpg",
  campus: "/042__1_.jpg",
  mootHall: "/DSC_4927 (1).jpg",
  mootTrial: "/b7 (1).jpg",
  lawCampus: "/b10 (1).jpg",
  facultySession: "/IMG_20251013_124123 (1).jpg",
  mockInterview: "/IMG_20251013_124616.jpg",
};

const CONTENT = {
  brand: "Sandip University",
  phone: "+91-8956374111",
  phoneHref: "tel:+918956374111",
  heroTag: "Admissions Open 2027-28",
  heroTitle: "Sandip University Entrance Exams",
  heroSub:
    "Phase 1 Admission 2027–2028",

  para:
    "Your gateway to premier Management (SU-MAT), Law (SU-LAT), and Design (SU-DAT) programs. Take the mandatory online proctored exam securely from your home.",

  heroPoints: [
    "100% Home Proctored",
    "Advanced AI Security",
    "Merit Scholarships",
  ],

  examSchedule: {
    title: "Exam Schedule",
    exams: [
      { code: "SU-MAT", name: "Management Aptitude Test", examDate: "30th Jan 2027", lastDate: "28th Jan" },
      { code: "SU-DAT", name: "Design Aptitude Test", examDate: "06th Feb 2027", lastDate: "04th Feb" },
      { code: "SU-LAT", name: "Law Admission Test", examDate: "13th Feb 2027", lastDate: "11th Feb" },
    ],
  },



  stats: [
    { value: "20+", label: "Years of Excellence" },
    { value: "150+", label: "Industry Partners" },
    { value: "20+", label: "Design Labs & Studios" },
    { value: "100%", label: "Placement Support" },
  ],
  aboutTitle: "About the School of Law",
  aboutText: [
    "Sandip University’s School of Law is one of Maharashtra’s top institutions for legal education, known for its industry-oriented curriculum designed by leading academicians and professionals. ",
    "The school focuses on developing socially responsible legal professionals with strong values of justice, fairness, and equality. Students benefit from a modern learning environment, holistic development, and diverse specialisations that help them build strong legal skills and stand out in the competitive legal field.Sandip University’s School of Law provides quality, industry-focused legal education.",
  ],
  highlights: [
    { title: "250+ Acre Lush Campus", text: "A world-class eco-friendly campus equipped with modern amphitheaters, sports complexes, high-tech labs, and peaceful study zones." },
    { title: "1000+ Top Recruiters", text: "Strong corporate tie-ups offering industry internships, practical capstone projects, and high-paying placement opportunities." },
    { title: "AI-Proctored System", text: "Secure, home-proctored entrance examination system with real-time AI face tracking, object detection, and noise monitoring." },
    { title: "State-of-the-Art Studios", text: "Dedicated design prototyping labs, financial research trading floors, and modern moot courtrooms for experiential learning." },

  ],
  careers: [
    "Lawyer / Advocate",
    "Corporate Legal Counsel",
    "Judge / Judicial Services",
    "Public Prosecutor",
    "Legal Researcher",
    "Compliance Officer",
    "Policy Consultant",
    "Law Professor / Academic",
  ],
  steps: [
    { title: "Enquire", text: "Fill the form or call our admission desk." },
    { title: "Counselling", text: "Talk to our team about programmes and eligibility." },
    { title: "Apply", text: "Submit your application and documents." },
    { title: "Enrol", text: "Confirm your seat and start your design journey." },
  ],
  faqs: [
    { q: "When will I receive my admit card details?", a: "Admit cards are issued online on the designated release date (Jan 29 for SU-MAT, Feb 05 for SU-DAT, Feb 12 for SU-LAT). Test links and credentials will be sent to your registered email." },
    { q: "What are the application fees?", a: "Application fee is ₹1000 for New Age MBA & B.Des programs, and ₹500 for Regular MBA & Law programs (payable online)." },
    { q: "Is there any negative marking in the exam?", a: "No, there is no negative marking for incorrect answers in SU entrance exams." },

  ],
  footerAddress: "Sandip University, Nashik, Maharashtra, India",
};


const SYLLABUS = [
  {
    id: "mat",
    tab: "SU-MAT",
    title: "SU-MAT (Management)",
    chips: ["Exam Duration: 2 Hours", "Total Online Marks: 100 Marks", "Proctoring: Electronic AI Proctoring"],
    tableTitle: "Syllabus Breakdown (Phase 1 Test)",
    rows: [
      { head: "General Knowledge", topics: "Current events, business environment, economy." },
      { head: "English Proficiency", topics: "Grammar, comprehension, vocabulary." },
      { head: "Quantitative Aptitude", topics: "Logical reasoning, data interpretation, math." },
    ],
    noteTitle: "Phase 2: Personal Interview (50 Marks)",
    noteText:
      "Evaluates uniqueness, confidence, decision-making, aesthetic sensibilities, and communication skill sets within 10 days after written exam results.",
  },
  {
    id: "lat",
    tab: "SU-LAT",
    title: "SU-LAT (Law)",
    chips: ["Exam Duration: 2 Hours", "Total Test Marks: 100 Marks", "Question Mode: Online MCQs"],
    tableTitle: "Syllabus Breakdown",
    headers: ["Section Head", "Syllabus Topics Covered", "Weightage"],
    rows: [
      { head: "English Language", topics: "Prepositions, Articles, Error Spotting, Synonyms, Antonyms, Comprehension", marks: "25 Marks" },
      { head: "Legal Aptitude & Reasoning", topics: "Legal Awareness, Legal Maxims, Statements & Assumptions, Analogies", marks: "25 Marks" },
      { head: "General Knowledge", topics: "Current Affairs, History, Geography, Economics, Indian Culture", marks: "25 Marks" },
      { head: "Indian Constitution", topics: "Fundamental Rights, Directive Principles, President, Supreme Court & High Courts", marks: "25 Marks" },
    ],
  },
  {
    id: "dat",
    tab: "SU-DAT",
    title: "SU-DAT (Design)",
    chips: ["Exam Duration: 2 Hours", "Round 1 Test: 40 Marks (25 Questions)", "Round 2 Portfolio: 60 Marks"],
    tableTitle: "Round 1 Online Test Weightage (40 Marks)",
    headers: ["Section Head", "", "Weightage"],
    rows: [
      { head: "Lateral Thinking", marks: "10 Marks" },
      { head: "Logical Thinking", marks: "10 Marks" },
      { head: "Numerical Skills", marks: "5 Marks" },
      { head: "Comprehension Ability", marks: "5 Marks" },
      { head: "General Knowledge", marks: "5 Marks" },
      { head: "Perceptual Skills", marks: "5 Marks" },
    ],
    noteTitle: "Round 2: In-Campus Portfolio Evaluation (60 Marks)",
    noteText:
      "Evaluates originality, sketchbooks, 2D/3D models, digital layouts, visual composition, and rendering skills in person at the SOD campus.",
  },
];



const SCHEDULE = {
  eyebrow: "Schedule & Deadlines",
  title: "Phase 1 Admission Timeline",
  sub: "Key dates for registration, admit cards, and online test schedules.",
  headers: ["Entrance Exam", "Application Starts", "Last Date to Apply", "Admit Card Release", "Online Exam Date"],
  rows: [
    { code: "SU-MAT", school: "Management", start: "10th Oct 2026", last: "28th Jan 2027", admit: "29th Jan 2027", exam: "30th Jan 2027" },
    { code: "SU-DAT", school: "Design", start: "10th Oct 2026", last: "04th Feb 2027", admit: "05th Feb 2027", exam: "06th Feb 2027" },
    { code: "SU-LAT", school: "Law", start: "10th Oct 2026", last: "11th Feb 2027", admit: "12th Feb 2027", exam: "13th Feb 2027" },
  ],
};

/* ----------------------------- schools ----------------------------- */

const SCHOOLS = [
  {
    id: "management",
    category: "Management",
    fee: "₹500 - ₹1000",
    name: "School of Commerce & Management Studies",
    exam: "SU-MAT 2027 Entrance Gateway",
    desc:
      "One of India's premier business schools, offering industry-centric undergraduate & postgraduate management programs designed to develop corporate leaders.",
    programsLabel: "Programs Offered",
    programs: [
      { title: "New Age MBA", detail: "Business Analytics, Banking & Fin. Services" },
      { title: "Regular MBA", detail: "Marketing, Finance, HR, IB, Digital Marketing" },
    ],
    processTitle: "2-Phase Process",
    process: [
      "Phase 1: SU-MAT Online Exam (100 Marks)",
      "Phase 2: Personal Interview (50 Marks)",
    ],
    eligibility: "Min 50% Bachelor's (45% Reserved)",
  },
  {
    id: "law",
    category: "Law",
    fee: "₹500",
    name: "School of Law",
    exam: "SU-LAT 2027 Entrance Gateway",
    desc:
      "A premier institute for legal education, empowering future advocates with deep constitutional knowledge, advocacy skills, and practical moot court training.",
    programsLabel: "Programs Offered",
    programs: [
      { title: "BA LLB", detail: "5 Years Integrated Program" },
      { title: "BBA LLB", detail: "5 Years Integrated Program" },
    ],
    processTitle: "Online Entrance Test",
    process: [
      "SU-LAT Online Test (100 Marks)",
      "Tests Legal Reasoning, Constitution & GK",
    ],
    eligibility: "10+2 with 45% Gen / 42% OBC / 40% SC/ST",
  },
  {
    id: "design",
    category: "Design",
    fee: "₹1000",
    name: "School of Design",
    exam: "SU-DAT 2027 Entrance Gateway",
    desc:
      "A hub for innovative design thinkers, providing hands-on studio learning in fashion, interior spaces, product design, and digital visual communication.",
    programsLabel: "Programs Offered (120 Seats Total)",
    programs: [
      { title: "B.Des in Fashion & Lifestyle Design", detail: "30 Seats" },
      { title: "B.Des in Space & Interior Design", detail: "30 Seats" },
      { title: "B.Des in Communication Design", detail: "30 Seats" },
      { title: "B.Des in Product Design", detail: "30 Seats" },
    ],
    processTitle: "2 Rounds",
    process: [
      "Round 1: SU-DAT Online Exam (40 Marks)",
      "Round 2: In-Campus Portfolio Evaluation (60 Marks)",
    ],
    eligibility: "10+2 / 3-Yr Diploma with Min 45%",
  },
];

/* ----------------------------- theme ----------------------------- */

const C = {
  blue950: "#172554",
  blue900: "#1e3a8a",
  blue800: "#1e40af",
  blue700: "#1d4ed8",
  blue200: "#bfdbfe",
  blue100: "#dbeafe",
  orange700: "#c2410c",
  orange600: "#ea580c",
  orange500: "#f97316",
  orange400: "#fb923c",
  orange200: "#fed7aa",
  orange100: "#ffedd5",
  slate900: "#0f172a",
  slate700: "#334155",
  slate600: "#475569",
  slate500: "#64748b",
  slate400: "#94a3b8",
  slate300: "#cbd5e1",
  slate200: "#e2e8f0",
  slate50: "#f8fafc",
  white: "#ffffff",
};

const FONT =
  "system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";

/* ----------------------------- helpers ----------------------------- */

function useWidth() {
  const [w, setW] = useState(typeof window !== "undefined" ? window.innerWidth : 1200);
  useEffect(() => {
    const onResize = () => setW(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);
  return w;
}

function useBp() {
  const w = useWidth();
  return { sm: w >= 640, md: w >= 768, lg: w >= 1024 };
}

const goToForm = () =>
  document.getElementById("enquire")?.scrollIntoView({ behavior: "smooth" });

const NAV = [
  { label: "Home", id: "home" },
  { label: "About Us", id: "about" },
  { label: "Courses", id: "courses" },
  { label: "Recruiters", id: "recruiters" },
  { label: "Campus Life", id: "campus-life" },
  { label: "Why Choose Us", id: "why-us" },
  { label: "Contact Us", id: "enquire" },
];

const goTo = (id) => {
  if (id === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
    return;
  }
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

function Container({ children, style }) {
  const { sm } = useBp();
  return (
    <div
      style={{
        boxSizing: "border-box",
        width: "100%",
        maxWidth: 1152,
        margin: "0 auto",
        padding: sm ? "0 24px" : "0 16px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function SectionTitle({ eyebrow, title, center = true, light = false }) {
  const { sm } = useBp();
  return (
    <div style={{ textAlign: center ? "center" : "left" }}>
      {eyebrow && (
        <p
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: light ? C.orange400 : C.orange600,
          }}
        >
          {eyebrow}
        </p>
      )}
      <h2
        style={{
          margin: "8px 0 0",
          fontSize: sm ? 36 : 30,
          fontWeight: 700,
          lineHeight: 1.2,
          color: light ? C.white : C.slate900,
        }}
      >
        {title}
      </h2>
    </div>
  );
}

function Btn({ href, onClick, style, hoverStyle, children, type }) {
  const [hover, setHover] = useState(false);
  const Tag = href ? "a" : "button";
  return (
    <Tag
      href={href}
      type={href ? undefined : type || "button"}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-block",
        cursor: "pointer",
        textDecoration: "none",
        border: "none",
        fontFamily: "inherit",
        transition: "background-color .2s, transform .2s",
        ...style,
        ...(hover ? hoverStyle : {}),
      }}
    >
      {children}
    </Tag>
  );
}

function HoverCard({ style, children }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        transition: "transform .2s, box-shadow .2s",
        transform: hover ? "translateY(-4px)" : "none",
        boxShadow: hover ? "0 10px 25px rgba(15,23,42,.12)" : "0 1px 2px rgba(15,23,42,.06)",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function Field({ as = "input", style, ...props }) {
  const [focus, setFocus] = useState(false);
  const Tag = as;
  return (
    <Tag
      {...props}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        padding: "11px 12px",
        fontSize: 14,
        fontFamily: "inherit",
        color: C.slate900,
        background: C.white,
        borderRadius: 8,
        outline: "none",
        border: `1px solid ${focus ? C.orange600 : C.slate300}`,
        boxShadow: focus ? `0 0 0 3px ${C.orange200}` : "none",
        ...style,
      }}
    />
  );
}

/* ----------------------------- lead form ----------------------------- */

function LeadForm() {
  const { sm } = useBp();
  const [data, setData] = useState({ name: "", phone: "", email: "", program: "", city: "" });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: POST `data` to your CRM / backend
    // TODO: fire Google Ads conversion, e.g. gtag_report_conversion();
    console.log("Lead:", data);
    setSent(true);
  };

  const card = {
    boxSizing: "border-box",
    background: C.white,
    borderRadius: 16,
    padding: sm ? 32 : 24,
    boxShadow: "0 25px 50px rgba(0,0,0,.3)",
  };

  if (sent) {
    return (
      <div style={{ ...card, textAlign: "center", padding: 32 }}>
        <div
          style={{
            width: 56,
            height: 56,
            margin: "0 auto 16px",
            borderRadius: "50%",
            background: "#dcfce7",
            color: "#16a34a",
            fontSize: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✓
        </div>
        <h3 style={{ margin: 0, fontSize: 20, color: C.slate900 }}>Thank you!</h3>
        <p style={{ margin: "8px 0 0", fontSize: 14, color: C.slate600 }}>
          Our admission counsellor will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={card}>
      <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>
        Apply / Get a Free Callback
      </h3>
      <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate500 }}>Takes less than a minute.</p>
      <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <Field name="name" placeholder="Full name" required value={data.name} onChange={onChange} />
        <Field name="phone" type="tel" placeholder="Mobile number" required pattern="[0-9+\- ]{10,15}" value={data.phone} onChange={onChange} />
        <Field name="email" type="email" placeholder="Email address" required value={data.email} onChange={onChange} />
        <Field name="city" placeholder="City" value={data.city} onChange={onChange} />
        <Field as="select" name="program" required value={data.program} onChange={onChange}>
          <option value="">Select programme</option>
          {SCHOOLS.map((s) => (
            <optgroup key={s.id} label={s.name}>
              {s.programs.map((p) => (
                <option key={p.title} value={p.title}>
                  {p.title}
                </option>
              ))}
            </optgroup>
          ))}
        </Field>
      </div>
      <Btn
        type="submit"
        style={{
          width: "100%",
          marginTop: 20,
          padding: "14px 16px",
          borderRadius: 8,
          background: "rgb(216 10 18)",
          color: C.white,
          fontSize: 16,
          fontWeight: 600,
        }}
        hoverStyle={{ background: C.orange700 }}
      >
        Submit Enquiry
      </Btn>
      <p style={{ margin: "12px 0 0", textAlign: "center", fontSize: 12, color: C.slate400 }}>
        By submitting, you agree to be contacted by Sandip University.
      </p>
    </form>
  );
}

/* ----------------------------- sections ----------------------------- */

function Header() {
  const { sm, lg } = useBp();
  const [menuOpen, setMenuOpen] = useState(false);

  const go = (id) => {
    setMenuOpen(false);
    goTo(id);
  };

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 40,
        background: "rgba(255,255,255,.95)",
        backdropFilter: "blur(8px)",
        borderBottom: `1px solid ${C.slate200}`,
      }}
    >
      <Container style={{ display: "flex", height: 64, alignItems: "center", justifyContent: "space-between", gap: 16, maxWidth: 1180 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
          <img
            src={universityLogo}
            alt={CONTENT.brand}
            style={{ height: 56, width: "auto", objectFit: "contain", display: "block" }}
          />
        </div>

        {lg && (
          <nav style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {NAV.map((n) => (
              <Btn
                key={n.id}
                onClick={() => go(n.id)}
                style={{ padding: "8px 10px", background: "none", color: C.slate700, fontSize: 14, fontWeight: 600, borderRadius: 6 }}
                hoverStyle={{ color: C.orange600 }}
              >
                {n.label}
              </Btn>
            ))}
          </nav>
        )}

        <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
          {sm && (
            <Btn
              onClick={goToForm}
              style={{ padding: "8px 20px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
              hoverStyle={{ background: "#000" }}
            >
              Apply Now
            </Btn>
          )}
          {!lg && (
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              style={{ background: "none", border: `1px solid ${C.slate300}`, borderRadius: 8, width: 40, height: 40, fontSize: 20, cursor: "pointer", color: C.slate700 }}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          )}
        </div>
      </Container>

      {!lg && menuOpen && (
        <nav style={{ background: C.white, borderTop: `1px solid ${C.slate200}`, padding: "8px 16px 16px", display: "flex", flexDirection: "column" }}>
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              style={{ textAlign: "left", padding: "12px 4px", background: "none", border: "none", borderBottom: `1px solid ${C.slate200}`, fontFamily: "inherit", fontSize: 15, fontWeight: 600, color: C.slate700, cursor: "pointer" }}
            >
              {n.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  );
}

function Hero() {
  const { sm, lg } = useBp();
  return (
    <section id="home" style={{ position: "relative", overflow: "hidden", background: "rgb(23 37 84 / 41%)" }}>
      <img
        src={IMG.hero}
        alt="Students at a moot court session"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.4 }}
      />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, rgb(23 37 84 / 70%), rgb(23 37 84 / 51%), transparent)",
        }}
      />
      <Container
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: lg ? "1fr 1fr" : "1fr",
          alignItems: "center",
          gap: 40,
          paddingTop: lg ? 80 : 56,
          paddingBottom: lg ? 80 : 56,
        }}
      >
        <div style={{ color: C.white }}>
          <span
            style={{
              display: "inline-block",
              padding: "4px 16px",
              borderRadius: 999,
              background: "rgb(216 10 18)",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {CONTENT.heroTag}
          </span>
          <h1 style={{ margin: "20px 0 0", fontSize: sm ? 48 : 36, fontWeight: 700, lineHeight: 1.15 }}>
            {CONTENT.heroTitle}
          </h1>
          <h5 style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 18, lineHeight: 1.6, color: "#fff" }}>
            {CONTENT.heroSub}
          </h5>
          <p style={{ margin: "16px 0 0", maxWidth: 576, fontSize: 15, lineHeight: 1.6, color: C.blue100 }}>
            {CONTENT.para}
          </p>

          {/* Exam schedule */}
          <div
            style={{
              marginTop: 24,
              maxWidth: 576,
              padding: "16px 20px",
              borderRadius: 12,
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.25)",
              borderLeft: "4px solid rgb(216 10 18)",
              backdropFilter: "blur(4px)",
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 12 }}>
              {CONTENT.examSchedule.title}
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: sm ? "repeat(3, 1fr)" : "1fr",
                gap: 12,
              }}
            >
              {CONTENT.examSchedule.exams.map((e) => (
                <div
                  key={e.code}
                  style={{
                    padding: "12px 14px",
                    borderRadius: 10,
                    background: "rgba(255,255,255,.12)",
                    border: "1px solid rgba(255,255,255,.2)",
                  }}
                >
                  <div style={{ fontSize: 14, fontWeight: 800, letterSpacing: "0.08em", color: "#fecaca" }}>
                    {e.code} Exam
                  </div>
                  <div style={{ marginTop: 6, fontSize: 17, fontWeight: 700, lineHeight: 1.2 }}>
                    {e.examDate}
                  </div>
                  <div style={{ marginTop: 8, fontSize: 13, color: C.blue100 }}>
                    Last Date: <strong style={{ color: C.white }}>{e.lastDate}</strong>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <ul
            style={{
              listStyle: "none",
              margin: "24px 0 0",
              padding: 0,
              display: "grid",
              gridTemplateColumns: sm ? "1fr 1fr" : "1fr",
              gap: 8,
            }}
          >
            {CONTENT.heroPoints.map((p) => (
              <li key={p} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 14, fontWeight: 500 }}>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: "rgb(216 10 18)",
                    fontSize: 12,
                    flexShrink: 0,
                  }}
                >
                  ✓
                </span>
                {p}
              </li>
            ))}
          </ul>
        </div>
        <div id="enquire" style={{ scrollMarginTop: 96 }}>
          <LeadForm />
        </div>
      </Container>
    </section>
  );
}

function Stats() {
  const { md } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)" }}>
      <Container
        style={{
          display: "grid",
          gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
          gap: 24,
          padding: "32px 24px",
          textAlign: "center",
          color: C.white,
        }}
      >
        {CONTENT.stats.map((s) => (
          <div key={s.label}>
            <p style={{ margin: 0, fontSize: 30, fontWeight: 800 }}>{s.value}</p>
            <p style={{ margin: "4px 0 0", fontSize: 14, color: C.orange100 }}>{s.label}</p>
          </div>
        ))}
      </Container>
    </section>
  );
}

function About() {
  const { sm, lg } = useBp();
  return (
    <section id="about" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container style={{ display: "grid", gridTemplateColumns: lg ? "1fr 1fr" : "1fr", alignItems: "center", gap: 40 }}>
        <div>
          <SectionTitle eyebrow="Who we are" title={CONTENT.aboutTitle} center={false} />
          <div style={{ marginTop: 20, display: "flex", flexDirection: "column", gap: 16, color: C.slate600, lineHeight: 1.7 }}>
            {CONTENT.aboutText.map((t) => (
              <p key={t} style={{ margin: 0 }}>{t}</p>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Talk to a Counsellor
          </Btn>
        </div>
        <img
          src={IMG.campus}
          alt="Sandip University campus"
          loading="lazy"
          style={{
            width: "100%",
            height: lg ? 380 : 240,
            objectFit: "cover",
            borderRadius: 16,
            boxShadow: "0 20px 40px rgba(15,23,42,.2)",
          }}
        />
      </Container>
    </section>
  );
}

/* ----------------------------- schools & programmes ----------------------------- */

function DegreePanel({ school }) {
  const { sm, md } = useBp();
  const [tab, setTab] = useState(0);
  const spec = school.programs[tab];

  return (
    <div
      style={{
        boxSizing: "border-box",
        background: C.white,
        border: `1px solid ${C.slate200}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
      }}
    >
      <div style={{ background: "rgb(216 10 18)", color: C.white, padding: sm ? "28px 32px" : "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "#000", fontSize: 12, fontWeight: 600 }}>
            Fee: {school.fee}
          </span>
          <span style={{ padding: "4px 12px", borderRadius: 999, background: "rgba(255,255,255,.15)", fontSize: 12, fontWeight: 600 }}>
            {school.exam}
          </span>
        </div>
        <h3 style={{ margin: "12px 0 0", fontSize: sm ? 30 : 24, fontWeight: 800 }}>{school.name}</h3>
        <p style={{ margin: "16px 0 8px", fontSize: 13, fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "#fff" }}>
          {school.programsLabel}
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {school.programs.map((s, i) => (
            <button
              key={s.title}
              onClick={() => setTab(i)}
              aria-pressed={tab === i}
              style={{
                padding: "10px 18px",
                borderRadius: 999,
                border: `1px solid ${tab === i ? C.orange600 : "rgba(255,255,255,.4)"}`,
                background: tab === i ? "#000" : "transparent",
                color: C.white,
                fontFamily: "inherit",
                fontSize: 14,
                fontWeight: 600,
                cursor: "pointer",
                transition: "background-color .2s, border-color .2s",
              }}
            >
              {s.title}
            </button>
          ))}
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: md ? "1.2fr 1fr" : "1fr",
          gap: md ? 40 : 28,
          padding: sm ? "32px" : "24px 20px",
        }}
      >
        <div>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>
            {spec.title}{spec.detail ? ` — ${spec.detail}` : ""}
          </h4>
          <p style={{ margin: "12px 0 0", fontSize: 15, lineHeight: 1.7, color: C.slate600 }}>{school.desc}</p>

          <h4 style={{ margin: "28px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>Eligibility</h4>
          <ul style={{ margin: "12px 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
            <li style={{ display: "flex", gap: 10, fontSize: 15, lineHeight: 1.5, color: C.slate700 }}>
              <span style={{ color: C.orange600, fontWeight: 700 }}>✓</span>
              {school.eligibility}
            </li>
          </ul>
        </div>

        <div style={{ boxSizing: "border-box", background: C.slate50, border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24, alignSelf: "start" }}>
          <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>
            Selection Process: {school.processTitle}
          </h4>
          <div style={{ marginTop: 16, display: "flex", flexWrap: "wrap", gap: 8 }}>
            {school.process.map((c) => (
              <span
                key={c}
                style={{ padding: "8px 14px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
              >
                {c}
              </span>
            ))}
          </div>
          <Btn
            onClick={goToForm}
            style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Enquire for {spec.title} →
          </Btn>
        </div>
      </div>
    </div>
  );
}

function Programs() {
  const { sm } = useBp();
  const [active, setActive] = useState(0);
  const school = SCHOOLS[active];

  // Keep old nav links working: #management-courses, #law-courses, #design-courses switch the tab
  useEffect(() => {
    const syncFromHash = () => {
      const i = SCHOOLS.findIndex((s) => `#${s.id}-courses` === window.location.hash);
      if (i !== -1) setActive(i);
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  return (
    <section id="courses" style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Academic Excellence" title="Participating Schools & Programs" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Explore our specialized schools, eligibility criteria, seats, and selection processes under Phase 1 Admissions.
        </p>

        {/* Filter tabs: flat, one row, underline on active */}
        <div
          role="tablist"
          style={{
            display: "flex",
            flexWrap: "nowrap",
            marginTop: 40,
            marginBottom: 24,
            borderBottom: `2px solid ${C.slate200}`,
          }}
        >
          {SCHOOLS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  padding: sm ? "16px 12px" : "12px 6px",
                  background: "transparent",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? C.orange600 : "transparent"}`,
                  marginBottom: -2,
                  color: isActive ? "rgb(216 10 18)" : C.slate600,
                  fontFamily: "inherit",
                  fontSize: sm ? 17 : 15,
                  fontWeight: isActive ? 800 : 600,
                  cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
              >
                {t.category}
              </button>
            );
          })}
        </div>

        {/* key resets the programme tab when the school changes */}
        <DegreePanel key={school.id} school={school} />
      </Container>
    </section>
  );
}

function Highlights() {
  const { sm, lg } = useBp();
  return (
    <section id="why-us" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Why choose us" title="What Makes Our School Different" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(3, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.highlights.map((h, i) => (
            <div key={h.title} style={{ boxSizing: "border-box", border: `1px solid ${C.slate200}`, borderRadius: 16, padding: 24 }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{h.title}</h3>
              <p style={{ margin: "8px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{h.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}




function SyllabusPanel({ exam }) {
  const { sm } = useBp();
  const hasTopics = exam.rows.some((r) => r.topics);
  const hasMarks = exam.rows.some((r) => r.marks);
  const th = {
    padding: "12px 16px",
    textAlign: "left",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: C.slate600,
    background: C.slate50,
    borderBottom: `1px solid ${C.slate200}`,
  };
  const td = { padding: "14px 16px", fontSize: 15, lineHeight: 1.5, color: C.slate600, borderBottom: `1px solid ${C.slate200}`, verticalAlign: "top" };

  return (
    <div
      style={{
        boxSizing: "border-box",
        background: C.white,
        border: `1px solid ${C.slate200}`,
        borderRadius: 20,
        overflow: "hidden",
        boxShadow: "0 10px 30px rgba(15,23,42,.08)",
      }}
    >
      <div style={{ background: "rgb(216 10 18)", color: C.white, padding: sm ? "28px 32px" : "24px 20px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {exam.chips.map((c, i) => (
            <span
              key={c}
              style={{
                padding: "4px 12px",
                borderRadius: 999,
                background: i === 0 ? "#000" : "rgba(255,255,255,.15)",
                fontSize: 12,
                fontWeight: 600,
              }}
            >
              {c}
            </span>
          ))}
        </div>
        <h3 style={{ margin: "12px 0 0", fontSize: sm ? 30 : 24, fontWeight: 800 }}>{exam.title}</h3>
      </div>

      <div style={{ padding: sm ? "32px" : "24px 20px" }}>
        <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{exam.tableTitle}</h4>

        <div style={{ marginTop: 16, overflowX: "auto", border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
          <table style={{ width: "100%", minWidth: hasTopics ? 560 : 0, borderCollapse: "collapse" }}>
            {exam.headers && (
              <thead>
                <tr>
                  <th style={th}>{exam.headers[0]}</th>
                  {hasTopics && <th style={th}>{exam.headers[1]}</th>}
                  {hasMarks && <th style={{ ...th, textAlign: "right", whiteSpace: "nowrap" }}>{exam.headers[2]}</th>}
                </tr>
              </thead>
            )}
            <tbody>
              {exam.rows.map((r, i) => (
                <tr key={r.head}>
                  <td style={{ ...td, fontWeight: 700, color: C.slate900, whiteSpace: hasTopics ? "normal" : "nowrap" }}>
                    {!exam.headers && <span style={{ color: "rgb(216 10 18)", marginRight: 8 }}>{i + 1}.</span>}
                    {r.head}
                  </td>
                  {hasTopics && <td style={td}>{r.topics}</td>}
                  {hasMarks && (
                    <td style={{ ...td, textAlign: "right", whiteSpace: "nowrap", fontWeight: 700, color: C.blue900 }}>{r.marks}</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {exam.noteTitle && (
          <div style={{ boxSizing: "border-box", marginTop: 24, background: C.slate50, border: `1px solid ${C.slate200}`, borderLeft: "4px solid rgb(216 10 18)", borderRadius: 16, padding: 24 }}>
            <h4 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{exam.noteTitle}</h4>
            <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.7, color: C.slate600 }}>{exam.noteText}</p>
          </div>
        )}

        <Btn
          onClick={goToForm}
          style={{ marginTop: 24, padding: "12px 24px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
          hoverStyle={{ background: "#000" }}
        >
          Enquire for {exam.tab} →
        </Btn>
      </div>
    </div>
  );
}

function Syllabus() {
  const { sm } = useBp();
  const [active, setActive] = useState(0);
  const exam = SYLLABUS[active];

  return (
    <section id="syllabus" style={{ padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow="Marking & Syllabus" title="Entrance Exam Syllabus & Structure" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Select an exam tab below to view detailed topic weightage and evaluation criteria.
        </p>

        <div
          role="tablist"
          style={{ display: "flex", flexWrap: "nowrap", marginTop: 40, marginBottom: 24, borderBottom: `2px solid ${C.slate200}` }}
        >
          {SYLLABUS.map((t, i) => {
            const isActive = active === i;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(i)}
                style={{
                  flex: 1,
                  minWidth: 0,
                  whiteSpace: "nowrap",
                  padding: sm ? "16px 12px" : "12px 6px",
                  background: "transparent",
                  border: "none",
                  borderBottom: `3px solid ${isActive ? C.orange600 : "transparent"}`,
                  marginBottom: -2,
                  color: isActive ? "rgb(216 10 18)" : C.slate600,
                  fontFamily: "inherit",
                  fontSize: sm ? 17 : 15,
                  fontWeight: isActive ? 800 : 600,
                  cursor: "pointer",
                  transition: "color .2s, border-color .2s",
                }}
              >
                {t.tab}
              </button>
            );
          })}
        </div>

        <SyllabusPanel key={exam.id} exam={exam} />
      </Container>
    </section>
  );
}




function Schedule() {
  const { sm } = useBp();
  const th = {
    padding: "16px",
    textAlign: "left",
    fontSize: 13,
    fontWeight: 700,
    letterSpacing: "0.06em",
    textTransform: "uppercase",
    color: C.white,
    background: "rgb(216 10 18)",
    whiteSpace: "nowrap",
  };
  const td = { padding: "18px 16px", fontSize: 15, color: C.slate600, borderBottom: `1px solid ${C.slate200}`, whiteSpace: "nowrap" };

  return (
    <section id="schedule" style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}>
      <Container>
        <SectionTitle eyebrow={SCHEDULE.eyebrow} title={SCHEDULE.title} />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          {SCHEDULE.sub}
        </p>

        <div
          style={{
            marginTop: 40,
            overflowX: "auto",
            background: C.white,
            border: `1px solid ${C.slate200}`,
            borderRadius: 20,
            boxShadow: "0 10px 30px rgba(15,23,42,.08)",
          }}
        >
          <table style={{ width: "100%", minWidth: 760, borderCollapse: "collapse" }}>
            <thead>
              <tr>
                {SCHEDULE.headers.map((h) => (
                  <th key={h} style={th}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {SCHEDULE.rows.map((r) => (
                <tr key={r.code}>
                  <td style={{ ...td, color: C.slate900, fontWeight: 700 }}>
                    {r.code}
                    <span style={{ marginLeft: 6, fontWeight: 500, color: C.slate500 }}>({r.school})</span>
                  </td>
                  <td style={td}>{r.start}</td>
                  <td style={{ ...td, fontWeight: 700, color: "rgb(216 10 18)" }}>{r.last}</td>
                  <td style={td}>{r.admit}</td>
                  <td style={{ ...td, fontWeight: 700, color: C.blue900 }}>{r.exam}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: "rgb(216 10 18)", color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: "#000" }}
          >
            Apply Now
          </Btn>
        </div>
      </Container>
    </section>
  );
}


/* ----------------------------- campus life ----------------------------- */

function CarouselArrow({ dir, onClick, top }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={onClick}
      aria-label={dir === "left" ? "Previous" : "Next"}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "absolute",
        top,
        [dir]: 4,
        transform: "translateY(-50%)",
        zIndex: 2,
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "none",
        cursor: "pointer",
        fontSize: 22,
        lineHeight: 1,
        color: hover ? C.white : C.slate900,
        background: hover ? C.orange600 : "rgba(255,255,255,.92)",
        boxShadow: "0 4px 12px rgba(15,23,42,.25)",
        transition: "background-color .2s, color .2s",
      }}
    >
      {dir === "left" ? "‹" : "›"}
    </button>
  );
}

function CampusCard({ item, imgH }) {
  const [hover, setHover] = useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        boxSizing: "border-box",
        height: "100%",
        overflow: "hidden",
        background: C.white,
        borderRadius: 20,
        boxShadow: hover ? "0 14px 30px rgba(15,23,42,.18)" : "0 4px 14px rgba(15,23,42,.10)",
        transition: "box-shadow .3s",
      }}
    >
      <div style={{ overflow: "hidden", height: imgH, background: `linear-gradient(135deg, ${C.blue900}, ${C.orange600})` }}>
        <img
          src={item.src}
          alt={item.title}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform .5s",
            transform: hover ? "scale(1.06)" : "scale(1)",
          }}
        />
      </div>
      <div style={{ padding: "20px 24px 24px" }}>
        <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: C.slate900 }}>{item.title}</h3>
        <p style={{ margin: "8px 0 0", fontSize: 15, lineHeight: 1.6, color: C.slate600 }}>{item.text}</p>
      </div>
    </div>
  );
}

function CampusLife() {
  const { sm, md } = useBp();
  const perView = md ? 2 : 1;
  const pages = Math.ceil(CAMPUS.length / perView);
  const imgH = md ? 300 : sm ? 260 : 210;

  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const page = Math.min(index, pages - 1);

  const next = () => setIndex((page + 1) % pages);
  const prev = () => setIndex((page - 1 + pages) % pages);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (Math.min(i, pages - 1) + 1) % pages), 5000);
    return () => clearInterval(t);
  }, [paused, pages]);

  return (
    <section
      id="campus-life"
      style={{
        padding: sm ? "80px 0" : "64px 0",
        scrollMarginTop: 64,
        background: `linear-gradient(to bottom, ${C.orange100}, ${C.white} 35%, ${C.slate50})`,
      }}
    >
      <Container>
        <SectionTitle eyebrow="Life at Sandip" title="Campus Life" />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.slate600, lineHeight: 1.6 }}>
          Learning, creativity, fitness and community — everything you need for a complete university experience.
        </p>

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          style={{ position: "relative", marginTop: 40 }}
        >
          <CarouselArrow dir="left" onClick={prev} top={imgH / 2 + 8} />
          <CarouselArrow dir="right" onClick={next} top={imgH / 2 + 8} />

          <div style={{ overflow: "hidden", margin: "0 -12px", padding: "8px 0 24px" }}>
            <div
              style={{
                display: "flex",
                transform: `translateX(-${page * 100}%)`,
                transition: "transform .6s ease",
              }}
            >
              {CAMPUS.map((item) => (
                <div
                  key={item.title}
                  style={{ boxSizing: "border-box", flex: `0 0 ${100 / perView}%`, padding: "0 12px" }}
                >
                  <CampusCard item={item} imgH={imgH} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: "flex", justifyContent: "center", gap: 8 }}>
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              style={{
                width: i === page ? 28 : 10,
                height: 10,
                borderRadius: 999,
                border: "none",
                padding: 0,
                cursor: "pointer",
                background: i === page ? C.orange600 : C.slate300,
                transition: "width .3s, background-color .3s",
              }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

function Showcase() {
  const { sm, md } = useBp();
  const items = [
    {
      src: IMG.mootHall,
      alt: "Students presenting arguments in the moot court hall while classmates watch",
      title: "Moot Court Practice",
      text: "Argue before a bench in a full courtroom setting, with peers and faculty watching and giving feedback.",
      featured: true,
    },
    {
      src: IMG.mootTrial,
      alt: "Student advocate addressing the judge during a mock trial",
      title: "Mock Trials & Advocacy",
      text: "Build courtroom confidence through hands-on practice in pleadings, examination and oral advocacy.",
    },
    {
      src: IMG.lawCampus,
      alt: "Law students discussing case material outside the School of Law building",
      title: "Life at the School of Law",
      text: "Case discussions and peer learning on a campus designed for focused study.",
    },
    {
      src: IMG.facultySession,
      alt: "Faculty members interacting with law students in a classroom session",
      title: "Faculty Interaction",
      text: "Small-group sessions on legal awareness, current issues and career guidance.",
    },
    {
      src: IMG.mockInterview,
      alt: "Law students attending a mock interview with a faculty panel",
      title: "Mock Interviews & Viva",
      text: "Panel rounds that prepare you for internships, placements and judicial service interviews.",
    },
  ];

  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Student showcase" title="Learning in Action at the School of Law" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(3, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {items.map((it) => (
            <article
              key={it.title}
              style={{
                gridColumn: md && it.featured ? "span 2" : "auto",
                overflow: "hidden",
                background: C.white,
                border: `1px solid ${C.slate200}`,
                borderRadius: 16,
                boxShadow: "0 1px 2px rgba(15,23,42,.06)",
              }}
            >
              <img
                src={it.src}
                alt={it.alt}
                loading="lazy"
                style={{
                  display: "block",
                  width: "100%",
                  height: md && it.featured ? 360 : 288,
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: 20 }}>
                <h3 style={{ margin: 0, fontSize: 18, fontWeight: 700, color: C.slate900 }}>{it.title}</h3>
                <p style={{ margin: "4px 0 0", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{it.text}</p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Careers() {
  const { sm } = useBp();
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Careers" title="Where a Design Degree Can Take You" />
        <div style={{ marginTop: 32, display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 12 }}>
          {CONTENT.careers.map((c) => (
            <span
              key={c}
              style={{ padding: "8px 20px", borderRadius: 999, background: C.white, border: `1px solid ${C.blue200}`, color: C.blue900, fontSize: 14, fontWeight: 600 }}
            >
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Process() {
  const { sm, lg } = useBp();
  return (
    <section style={{ padding: sm ? "80px 0" : "64px 0" }}>
      <Container>
        <SectionTitle eyebrow="Admission process" title="4 Simple Steps to Get Started" />
        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: lg ? "repeat(4, 1fr)" : sm ? "repeat(2, 1fr)" : "1fr",
            gap: 24,
          }}
        >
          {CONTENT.steps.map((s, i) => (
            <div key={s.title} style={{ textAlign: "center" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  margin: "0 auto",
                  borderRadius: "50%",
                  background: "rgb(216 10 18)",
                  color: C.white,
                  fontSize: 20,
                  fontWeight: 700,
                }}
              >
                {i + 1}
              </div>
              <h3 style={{ margin: "16px 0 0", fontSize: 18, fontWeight: 700, color: C.slate900 }}>{s.title}</h3>
              <p style={{ margin: "4px 0 0", fontSize: 14, color: C.slate600 }}>{s.text}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Recruiters() {
  const { sm, md } = useBp();
  return (
    <section
      id="recruiters"
      style={{ background: C.blue950, padding: sm ? "80px 0" : "64px 0", scrollMarginTop: 64 }}
    >
      <Container>
        <SectionTitle eyebrow="Placements" title="Our Recruiters" light />
        <p style={{ margin: "12px auto 0", maxWidth: 576, textAlign: "center", color: C.blue200, lineHeight: 1.6 }}>
          Leading fashion, lifestyle, beauty and design brands hire and mentor our students.
        </p>

        <div
          style={{
            marginTop: 40,
            display: "grid",
            gridTemplateColumns: md ? "repeat(4, 1fr)" : "repeat(2, 1fr)",
            gap: sm ? 20 : 12,
          }}
        >
          {RECRUITERS.map((r) => (
            <HoverCard
              key={r.name}
              style={{
                boxSizing: "border-box",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                height: sm ? 140 : 110,
                padding: 16,
                background: C.white,
                borderRadius: 16,
                overflow: "hidden",
              }}
            >
              <img
                src={r.src}
                alt={r.name}
                loading="lazy"
                style={{ display: "block", maxWidth: "100%", maxHeight: "100%", objectFit: "contain" }}
              />
            </HoverCard>
          ))}
        </div>

        <div style={{ marginTop: 40, textAlign: "center" }}>
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Start Your Journey
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function FAQ() {
  const { sm } = useBp();
  const [open, setOpen] = useState(0);
  return (
    <section style={{ background: C.slate50, padding: sm ? "80px 0" : "64px 0" }}>
      <Container style={{ maxWidth: 768 }}>
        <SectionTitle eyebrow="FAQ" title="Frequently Asked Questions" />
        <div style={{ marginTop: 32, display: "flex", flexDirection: "column", gap: 12 }}>
          {CONTENT.faqs.map((f, i) => (
            <div key={f.q} style={{ background: C.white, border: `1px solid ${C.slate200}`, borderRadius: 12 }}>
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                aria-expanded={open === i}
                style={{
                  display: "flex",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "16px 20px",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  textAlign: "left",
                  fontFamily: "inherit",
                  fontSize: 16,
                  fontWeight: 600,
                  color: C.slate900,
                }}
              >
                {f.q}
                <span style={{ marginLeft: 16, fontSize: 20, color: C.orange600 }}>{open === i ? "−" : "+"}</span>
              </button>
              {open === i && (
                <p style={{ margin: 0, padding: "0 20px 16px", fontSize: 14, lineHeight: 1.6, color: C.slate600 }}>{f.a}</p>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function FinalCTA() {
  const { sm } = useBp();
  return (
    <section style={{ background: "rgb(216 10 18)", padding: "64px 0", textAlign: "center", color: C.white }}>
      <Container>
        <h2 style={{ margin: 0, fontSize: sm ? 36 : 30, fontWeight: 700 }}>Ready to Start Your Law Journey?</h2>
        <p style={{ margin: "12px auto 0", maxWidth: 576, color: C.blue100 }}>
          Limited seats. Talk to our admission team today.
        </p>
        <div
          style={{
            marginTop: 24,
            display: "flex",
            flexDirection: sm ? "row" : "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
          }}
        >
          <Btn
            onClick={goToForm}
            style={{ padding: "12px 32px", borderRadius: 999, background: "#000", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: C.orange700 }}
          >
            Apply Now
          </Btn>
          <Btn
            href={CONTENT.phoneHref}
            style={{ padding: "12px 32px", borderRadius: 999, border: "1px solid rgba(255,255,255,.7)", background: "transparent", color: C.white, fontWeight: 600 }}
            hoverStyle={{ background: "rgba(255,255,255,.1)" }}
          >
            📞 Call {CONTENT.phone}
          </Btn>
        </div>
      </Container>
    </section>
  );
}

function Footer() {
  const { md } = useBp();
  return (
    <footer style={{ padding: md ? "15px 0" : "32px 0 96px", textAlign: "center", fontSize: 14, color: C.slate700 }}>
      <Container>
        <img
          src={universityLogo}
          alt={CONTENT.brand}
          style={{ height: 48, width: "auto", objectFit: "contain", display: "block", margin: "0 auto" }}
        />
        <p style={{ margin: "12px 0 0" }}>{CONTENT.footerAddress}</p>
        <p style={{ margin: "12px 0 0", fontSize: 12 }}>
          © {new Date().getFullYear()} {CONTENT.brand}. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}

function StickyMobileBar() {
  const { md } = useBp();
  if (md) return null;
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 50,
        display: "flex",
        background: C.white,
        borderTop: `1px solid ${C.slate200}`,
      }}
    >
      <a
        href={CONTENT.phoneHref}
        style={{ flex: 1, padding: "12px 0", textAlign: "center", fontSize: 14, fontWeight: 600, color: C.blue900, textDecoration: "none" }}
      >
        📞 Call Now
      </a>
      <button
        onClick={goToForm}
        style={{ flex: 1, padding: "12px 0", border: "none", background: C.orange600, color: C.white, fontSize: 14, fontWeight: 600, fontFamily: "inherit", cursor: "pointer" }}
      >
        Apply Now
      </button>
    </div>
  );
}

/* ----------------------------- page ----------------------------- */

export default function SchoolOfDesignLanding() {
  return (
    <div style={{ fontFamily: FONT, color: C.slate700, WebkitFontSmoothing: "antialiased" }}>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Programs />
      <Careers />
      <Highlights />
      <CampusLife />
      <Syllabus />
      <Schedule />
      {/* <Showcase /> */}
      <Process />
      <Recruiters />
      <FAQ />
      <FinalCTA />
      <Footer />
      <StickyMobileBar />
    </div>
  );
}