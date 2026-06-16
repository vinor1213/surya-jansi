import { Phone, Heart, MapPin } from "lucide-react";

function FloralDivider() {
  return (
    <div className="flex items-center justify-center gap-3 my-8">
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
        }}
      />
      <svg
        viewBox="0 0 40 40"
        className="w-5 h-5 flex-shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="4" fill="#D4AF37" opacity="0.7" />
        <circle cx="20" cy="8" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="20" cy="32" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="8" cy="20" r="2" fill="#D4AF37" opacity="0.4" />
        <circle cx="32" cy="20" r="2" fill="#D4AF37" opacity="0.4" />
      </svg>
      <div
        className="h-px flex-1"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(212,175,55,0.4), transparent)",
        }}
      />
    </div>
  );
}

const groomSideContacts = [
  {
    name: "M.R. அன்பழகன்",
    detail: "காவல் உதவி ஆய்வாளர் (ஓய்வு)",
  },
  {
    name: "S. கல்பனா அன்பழகன்",
    detail: "காவல் உதவி ஆய்வாளர் (ஓய்வு)",
  },
  {
    name: "A. தேன்மொழி அன்பழகன்",
    detail: "",
  },
  {
    name: "P. வேங்கடேஷ், B.E., CADD",
    detail: "A. அஸ்வினி, M.C.A. — Manager, Supply Chain Michelin India Pvt. Ltd., Chennai",
  },
  {
    name: "M. பாரி, M.Sc., M.B.A.",
    detail: "A. அனிரிதா, M.Sc. — Scientific Business Manager, Hedge & Hedge Pharmaceutical LLP",
  },
  {
    name: "V.A. தீபித் கிருஷ்ணா",
    detail: "மதிகோபாலமாயம், தர்மபுரி நகரம்",
  },
];

const brideSideContacts = [
  { name: "K. ரவி", detail: "விசாசா." },
  { name: "R. பச்சியம்மாள் ரவி", detail: "PRV Department Store" },
  { name: "R. வினோத், B.E.", detail: "" },
];

const phones = [
  { label: "வேங்கடேஷ்", number: "90037 18800" },
  { label: "தீபித் கிருஷ்ணா", number: "99408 58188" },
];

export default function Footer() {
  return (
    <footer
      id="contact"
      style={{ backgroundColor: "#7F1D1D" }}
      className="relative overflow-hidden"
    >
      {/* Silk texture */}
      <div className="absolute inset-0 silk-texture opacity-40" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Top band */}
        <div
          className="text-center py-16 px-6"
          style={{ borderBottom: "1px solid rgba(212,175,55,0.2)" }}
        >
          {/* Auspicious invocation */}
          <p
            className="font-tamil text-sm mb-1"
            style={{ color: "rgba(212,175,55,0.7)" }}
          >
            ஸ்ரீ பச்சையம்மன் துணை
          </p>
          <div className="mt-6 mb-4">
            <div
              className="inline-flex items-center gap-3 px-6 py-2 rounded-sm"
              style={{
                background: "rgba(212,175,55,0.08)",
                border: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <div
                className="w-8 h-8 rounded-full border flex items-center justify-center"
                style={{ borderColor: "rgba(212,175,55,0.5)" }}
              >
                <span
                  className="font-cinzel text-xs font-bold"
                  style={{ color: "#D4AF37" }}
                >
                  S&amp;J
                </span>
              </div>
              <span
                className="font-cinzel text-sm tracking-widest"
                style={{ color: "#D4AF37" }}
              >
                SURYA · JANSI
              </span>
            </div>
          </div>
          <h2
            className="font-cormorant italic text-3xl md:text-5xl mb-2"
            style={{ color: "#F5E6A3" }}
          >
            A. Surya &amp; Dr. R. Jansi
          </h2>
          <p
            className="font-cinzel text-xs tracking-[0.5em] uppercase"
            style={{ color: "rgba(212,175,55,0.6)" }}
          >
            Thursday, 25th June 2026 · 10:30 AM
          </p>

          {/* Venue quick info */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <MapPin size={13} style={{ color: "rgba(212,175,55,0.6)" }} />
            <p
              className="font-garamond text-sm"
              style={{ color: "rgba(245,230,163,0.65)" }}
            >
              Sri Ranganathan Ranjitham Mahal, Kundalapatti, Dharmapuri
            </p>
          </div>
        </div>

        {/* Family columns */}
      
      </div>
    </footer>
  );
}
