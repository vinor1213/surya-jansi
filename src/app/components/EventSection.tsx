import { Calendar, Clock, Sun, Star, Music, Flower } from "lucide-react";

const events = [
  {
    icon: Sun,
    time: "Morning, 25th June 2026",
    title: "Muhurtham Ceremony",
    titleTamil: "முகூர்த்தம்",
    description:
      "The sacred wedding ceremony (Muhurtham) takes place between 10:30 a.m. and 11:30 a.m. under the auspicious Swathi Natchathiram and Amirtha Yogam.",
    detail: "10:30 a.m. – 11:30 a.m.",
  },
  {
    icon: Music,
    time: "Following the ceremony",
    title: "Reception & Blessings",
    titleTamil: "வரவேற்பு",
    description:
      "Family and friends are invited to shower their blessings upon the newlyweds and celebrate with a sumptuous traditional feast.",
    detail: "Post-Muhurtham",
  },
  {
    icon: Flower,
    time: "Throughout the day",
    title: "Traditional Celebrations",
    titleTamil: "பாரம்பரிய கொண்டாட்டம்",
    description:
      "Enjoy traditional music, South Indian hospitality, and the vibrant atmosphere of a classic Tamil Brahmin wedding celebration.",
    detail: "All Day",
  },
];

const auspiciousDetails = [
  { icon: Calendar, label: "Date", value: "Thursday, 25th June 2026", sub: "ஆனி 11, 2026" },
  { icon: Clock, label: "Muhurtham", value: "10:30 AM – 11:30 AM", sub: "காலை" },
  { icon: Star, label: "Natchathiram", value: "Swathi (சுவாதி)", sub: "நட்சத்திரம்" },
  { icon: Sun, label: "Lagnam", value: "Midhunam (மிதுனம்)", sub: "லக்னம்" },
];

export default function EventSection() {
  return (
    <section
      id="event"
      className="py-10 relative overflow-hidden"
      style={{ backgroundColor: "#7F1D1D" }}
    >
      {/* Background textures */}
      <div className="absolute inset-0 silk-texture" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.6em] uppercase mb-4"
            style={{ color: "rgba(212,175,55,0.7)" }}
          >
            Join Us In Celebration
          </p>
          <h2
            className="font-cormorant italic text-4xl md:text-6xl mb-4"
            style={{ color: "#F5E6A3" }}
          >
            The Ceremony
          </h2>
          <p
            className="font-tamil text-base mb-6"
            style={{ color: "rgba(245,230,163,0.6)" }}
          >
            திருமண நிகழ்வு
          </p>
          <div
            className="h-px w-48 mx-auto"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
            }}
          />
        </div>

        {/* Auspicious details grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {auspiciousDetails.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="text-center p-6 rounded-sm"
                style={{
                  background: "rgba(212,175,55,0.07)",
                  border: "1px solid rgba(212,175,55,0.25)",
                }}
              >
                <Icon
                  size={20}
                  className="mx-auto mb-3"
                  style={{ color: "#D4AF37" }}
                />
                <p
                  className="font-cinzel text-xs tracking-widest uppercase mb-2"
                  style={{ color: "rgba(212,175,55,0.6)" }}
                >
                  {item.label}
                </p>
                <p
                  className="font-cormorant font-semibold text-base md:text-lg"
                  style={{ color: "#F5E6A3" }}
                >
                  {item.value}
                </p>
                <p
                  className="font-tamil text-xs mt-1"
                  style={{ color: "rgba(245,230,163,0.5)" }}
                >
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>

        {/* Event timeline */}
        <div className="space-y-6">
          {events.map((event, i) => {
            const Icon = event.icon;
            return (
              <div
                key={i}
                className="flex gap-6 p-6 md:p-8 rounded-sm card-hover"
                style={{
                  background: "rgba(245,230,163,0.04)",
                  border: "1px solid rgba(212,175,55,0.2)",
                }}
              >
                {/* Icon column */}
                <div className="flex-shrink-0">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center"
                    style={{
                      background: "rgba(212,175,55,0.12)",
                      border: "1px solid rgba(212,175,55,0.4)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#D4AF37" }} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <p
                    className="font-cinzel text-xs tracking-widest uppercase mb-1"
                    style={{ color: "rgba(212,175,55,0.6)" }}
                  >
                    {event.time}
                  </p>
                  <h3
                    className="font-cormorant italic font-bold text-xl md:text-2xl mb-1"
                    style={{ color: "#F5E6A3" }}
                  >
                    {event.title}
                  </h3>
                  <p
                    className="font-tamil text-sm mb-3"
                    style={{ color: "rgba(212,175,55,0.5)" }}
                  >
                    {event.titleTamil}
                  </p>
                  <p
                    className="font-garamond text-base"
                    style={{ color: "rgba(245,230,163,0.7)" }}
                  >
                    {event.description}
                  </p>
                </div>

                {/* Time badge */}
                <div className="flex-shrink-0 hidden md:block">
                  <span
                    className="font-cinzel text-xs tracking-wider px-3 py-1.5 rounded-sm"
                    style={{
                      background: "rgba(212,175,55,0.1)",
                      border: "1px solid rgba(212,175,55,0.3)",
                      color: "#D4AF37",
                    }}
                  >
                    {event.detail}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Invitation quote */}
        <div
          className="mt-16 text-center p-8 md:p-12 rounded-sm"
          style={{
            background: "rgba(212,175,55,0.06)",
            border: "1px solid rgba(212,175,55,0.25)",
          }}
        >
          <p
            className="font-cormorant italic text-xl md:text-2xl leading-relaxed"
            style={{ color: "#F5E6A3" }}
          >
            &ldquo;Cordially invite you with your Family &amp; Friends on the auspicious
            occasion of this Sacred Wedding&rdquo;
          </p>
          <div
            className="mt-4 h-px w-24 mx-auto"
            style={{ background: "rgba(212,175,55,0.4)" }}
          />
        </div>
      </div>
    </section>
  );
}
