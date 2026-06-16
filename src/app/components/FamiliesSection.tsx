import { Users, MapPin, Star } from "lucide-react";

interface FamilyMember {
  name: string;
  title?: string;
  detail?: string;
}

interface FamilyGroup {
  side: string;
  father: FamilyMember;
  mother: FamilyMember;
  location: string;
  members: FamilyMember[];
}

const groomFamily: FamilyGroup = {
  side: "Groom's Family",
  father: {
    name: "M.R. அன்பழகன்",
    detail: "காவல் உதவி ஆய்வாளர் (ஓய்வு)",
  },
  mother: {
    name: "S. கல்பனா அன்பழகன், M.A.",
    detail: "காவல் உதவி ஆய்வாளர்",
  },
  location: "மதிகோன்பாளையம், தருமபுரி",
  members: [
    {
      name: "A. தென்மொழி அன்பழகன்",
    },
    {
      name: "P. வெங்கடேஷ் B.E., CADD - A. அஸ்வினி, M.C.A.,",
      title: "",
      detail:
        " Manager, Supply Chain, Michelin India Pvt. Ltd., Chennai",
    },
    {
      name: "M. பாரி M.Sc., MBA - A. அனிதா, M.Sc.,",
      title: "",
      detail:
        " Scientific Business Manager, Hedge & Hedge Pharmaceutical LLP",
    },
    {
      name: "V.A. தீக்ஷித் கிருஷ்ணா",
      detail: "மதிகோன்பாளையம், தருமபுரி நகரம்",
    },
  ],
};

const brideFamily: FamilyGroup = {
  side: "Bride's Family",
  father: {
    name: "K. ரவி",
    detail: "விவசாயி",
  },
  mother: {
    name: "R. பச்சையம்மாள் ரவி",
    detail: "PRV மளிகைக் கடை",
  },
  location: "",
  members: [
    {
      name: "R. வினோத்",
      title: "B.E.",
      detail: "Vee Technologies",
    },
  ],
};

const chiefGuest = {
  name: "Thiru. K.P. Anbalagan, MLA",
  detail:
    "முன்னாள் அமைச்சர் · மு.கலக அமைப்பு செயலாளர் · முன்னாள் மாவட்ட கழக செயலாளர்",
};

const distinguishedGuests = [
  {
    name: "திரு. S.R. வெற்றிவேல்",
    detail:
      "மு.மாவட்ட செயலாளர், புரட்சி தலைவர் அம்மா பேரவை, மு.தலைவர், தருமபுரி மாவட்ட மத்திய கூட்டுறவு வங்கி, மு.நகர் மன்ற தலைவர், தருமபுரி",
  },
  {
    name: "திருமதி. V. மரகதம் வெற்றிவேல், MLA",
    detail:
      "பாப்பிரெட்டிப்பட்டி சட்டமன்ற உறுப்பினர்",
  },
  {
    name: "திரு. A. கோவிந்தசாமி, Ex-MLA",
    detail:
      "மு.பாப்பிரெட்டிப்பட்டி சட்டமன்ற உறுப்பினர்",
  },
  {
    name: "திரு. A. பாஸ்கர், Ex-MLA",
    detail:
      "மு.தருமபுரி சட்டமன்ற உறுப்பினர்",
  },
  {
    name: "திரு. P. பாஸ்கர், B.A., - சசிகலா",
    detail:
      "பச்சமுத்து கல்வி நிறுவனங்கள், தருமபுரி",
  },
  {
    name: "திரு. P. அண்ணாதுரை - கல்பனா",
    detail:
      "நெசவியலர், மதிகோன்பாளையம், தருமபுரி",
  },



   {
    name: "Dr. J.T. ஆனந்த் திலக்",
    detail: "MBBS., M.S.(Ortho)"
  },
  {
    name: "Dr. ஜெகன்கார்த்தினி",
    detail: "MBBS., M.S.(Obg)"
  },
  {
    name: "Dr. M. மணி",
    detail: "MBBS., M.D.(Pead)"
  },
  {
    name: "திருமதி. A. பாலசரி மணி",
    detail: "B.Sc., M.Sc."
  }
  
];

function FamilyCard({ family }: { family: FamilyGroup }) {
  const isGroom = family.side.includes("Groom");

  return (
    <div
      className="rounded-sm overflow-hidden transition-transform duration-300 hover:scale-[1.01]"
      style={{
        border: "1px solid rgba(212, 175, 55, 0.3)",
        boxShadow: "0 16px 48px rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Header */}
      <div
        className="px-8 py-6 text-center"
        style={{
          background: isGroom
            ? "linear-gradient(135deg, #7F1D1D 0%, #9B2335 100%)"
            : "linear-gradient(135deg, #5C1515 0%, #7F1D1D 100%)",
        }}
      >
        <div className="flex items-center justify-center gap-2 mb-2">
          <Users size={14} style={{ color: "rgba(212, 175, 55, 0.8)" }} />
          <p
            className="font-cinzel text-xs tracking-[0.5em] uppercase"
            style={{ color: "rgba(212, 175, 55, 0.8)" }}
          >
            {family.side}
          </p>
        </div>
        <div className="flex items-center justify-center gap-2 mt-3">
          <MapPin size={12} style={{ color: "rgba(245, 230, 163, 0.6)" }} />
          <p
            className="font-garamond text-sm italic"
            style={{ color: "rgba(245, 230, 163, 0.7)" }}
          >
            {family.location}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8" style={{ background: "#FFF8E7" }}>
        {/* Parents */}
        <div className="mb-6">
          <div
            className="flex items-start gap-3 mb-4 pb-4"
            style={{ borderBottom: "1px solid rgba(212, 175, 55, 0.2)" }}
          >
            <Star
              size={14}
              className="mt-1 flex-shrink-0"
              style={{ color: "#D4AF37" }}
            />
            <div>
              <p
                className="font-cormorant font-semibold text-lg"
                style={{ color: "#7F1D1D" }}
              >
                {family.father.name}
              </p>
              {family.father.detail && (
                <p
                  className="font-garamond text-sm mt-0.5"
                  style={{ color: "rgba(43, 43, 43, 0.6)" }}
                >
                  {family.father.detail}
                </p>
              )}
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Star
              size={14}
              className="mt-1 flex-shrink-0"
              style={{ color: "#D4AF37" }}
            />
            <div>
              <p
                className="font-cormorant font-semibold text-lg"
                style={{ color: "#7F1D1D" }}
              >
                {family.mother.name}
              </p>
              {family.mother.detail && (
                <p
                  className="font-garamond text-sm mt-0.5"
                  style={{ color: "rgba(43, 43, 43, 0.6)" }}
                >
                  {family.mother.detail}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Other Members */}
        {family.members.length > 0 && (
          <div>
            <p
              className="font-cinzel text-xs tracking-widest uppercase mb-4"
              style={{ color: "rgba(127, 29, 29, 0.5)" }}
            >
              Family Members
            </p>
            <div className="space-y-4">
              {family.members.map((member, index) => (
                <div
                  key={index}
                  className="pl-4"
                  style={{ borderLeft: "2px solid rgba(212, 175, 55, 0.3)" }}
                >
                  <p
                    className="font-cormorant font-semibold text-base"
                    style={{ color: "#2B2B2B" }}
                  >
                    {member.name}
                    {member.title && (
                      <span
                        className="font-cinzel text-xs tracking-wide ml-2"
                        style={{ color: "rgba(127, 29, 29, 0.7)" }}
                      >
                        {member.title}
                      </span>
                    )}
                  </p>
                  {member.detail && (
                    <p
                      className="font-garamond text-sm mt-0.5"
                      style={{ color: "rgba(43, 43, 43, 0.6)" }}
                    >
                      {member.detail}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function FamiliesSection() {
  return (
    <section
      id="families"
      className="py-10 relative overflow-hidden"
      style={{ backgroundColor: "#F8F5F0" }}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 kolam-bg opacity-20" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.6em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
          >
            With Blessings From
          </p>
          <h2
            className="font-cormorant italic text-4xl sm:text-5xl md:text-6xl mb-4"
            style={{ color: "#7F1D1D" }}
          >
            Our Families
          </h2>
          <p
            className="font-garamond italic text-base sm:text-lg max-w-xl mx-auto"
            style={{ color: "rgba(43, 43, 43, 0.65)" }}
          >
            Two families united by love, tradition, and the blessings of Sri
            Pachaiyamman
          </p>
          <div
            className="mt-6 h-px w-48 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, #D4AF37, transparent)",
            }}
          />
        </div>

        {/* Chief Guest */}
        <div
          className="mb-10 p-6 md:p-8 text-center rounded-sm"
          style={{
            background:
              "linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(212, 175, 55, 0.05) 100%)",
            border: "1px solid rgba(212, 175, 55, 0.4)",
          }}
        >
          <p
            className="font-cinzel text-xs tracking-[0.5em] uppercase mb-3"
            style={{ color: "rgba(127, 29, 29, 0.6)" }}
          >
            Presided by
          </p>
          <p
            className="font-cormorant italic font-bold text-2xl sm:text-3xl"
            style={{ color: "#7F1D1D" }}
          >
            {chiefGuest.name}
          </p>
          <p
            className="font-garamond text-sm sm:text-base mt-2"
            style={{ color: "rgba(43, 43, 43, 0.6)" }}
          >
            {chiefGuest.detail}
          </p>
        </div>

        {/* Distinguished Guests */}
        <div
          className="mb-12 p-6 rounded-sm"
          style={{
            background: "rgba(127, 29, 29, 0.04)",
            border: "1px solid rgba(127, 29, 29, 0.12)",
          }}
        >
          <p
            className="font-cinzel text-xs tracking-[0.5em] uppercase mb-6 text-center"
            style={{ color: "rgba(127, 29, 29, 0.5)" }}
          >
            Distinguished Guests of Honour
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center">
            {distinguishedGuests.map((guest, index) => (
              <div key={index} className="py-3">
                <p
                  className="font-cormorant font-semibold text-base"
                  style={{ color: "#7F1D1D" }}
                >
                  {guest.name}
                </p>
                <p
                  className="font-garamond text-xs mt-0.5"
                  style={{ color: "rgba(43, 43, 43, 0.55)" }}
                >
                  {guest.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Family Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <FamilyCard family={groomFamily} />
          <FamilyCard family={brideFamily} />
        </div>
      </div>
    </section>
  );
}