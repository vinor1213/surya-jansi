"use client";

import { MapPin, Navigation, Phone, Clock, ExternalLink } from "lucide-react";

const venueDetails = {
  name: "Sri Ranganathan Ranjitham Mahal",
  nameTamil: "ஸ்ரீ ரங்கநாதன் ரஞ்சிதம் மகால்",
  address: "Dharmapuri – Krishnagiri Main Road, Kundalapatti, Dharmapuri",
  addressTamil: "தர்மபுரி – கிருஷ்ணகிரி மெயின் ரோடு, குண்டலப்பட்டி, தர்மபுரி",
  date: "Thursday, 25th June 2026",
  time: "10:30 AM – 11:30 AM",
  // Google Maps embed for Dharmapuri area - Sri Ranganathan Ranjitham Mahal
  mapsEmbedSrc:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.0!2d78.1582!3d12.1277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac4f1f1f1f1f1f%3A0x0!2sSri%20Ranganathan%20Ranjitham%20Mahal%2C%20Dharmapuri!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  mapsUrl:
    "https://maps.google.com/?q=Sri+Ranganathan+Ranjitham+Mahal+Dharmapuri+Kundalapatti",
  contacts: [
    { name: "V.A. Deepit Krishnaa", phone: "90037 18800" },
    { name: "", phone: "99408 58188" },
  ],
};

export default function VenueSection() {
  return (
    <section
      id="venue"
      className="py-10 relative overflow-hidden"
      style={{ backgroundColor: "#FFF8E7" }}
    >
      {/* Background kolam pattern */}
      <div className="absolute inset-0 kolam-bg opacity-40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="font-cinzel text-xs tracking-[0.6em] uppercase mb-4"
            style={{ color: "#D4AF37" }}
          >
            You Are Invited
          </p>
          <h2
            className="font-cormorant italic text-4xl md:text-6xl mb-4"
            style={{ color: "#7F1D1D" }}
          >
            The Venue
          </h2>
          <p
            className="font-tamil text-base mb-6"
            style={{ color: "rgba(43,43,43,0.6)" }}
          >
            திருமண மண்டபம்
          </p>
          <div
            className="h-px w-48 mx-auto"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.6), transparent)",
            }}
          />
        </div>

        {/* Venue info + map grid */}
        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* Left: Venue Details */}
          <div className="flex flex-col gap-6">
            {/* Venue name card */}
            <div
              className="p-8 rounded-sm"
              style={{
                background:
                  "linear-gradient(135deg, #7F1D1D 0%, #5C1515 100%)",
                border: "1px solid rgba(212,175,55,0.4)",
                boxShadow: "0 16px 48px rgba(127,29,29,0.25)",
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  style={{
                    background: "rgba(212,175,55,0.15)",
                    border: "1px solid rgba(212,175,55,0.4)",
                  }}
                >
                  <MapPin size={16} style={{ color: "#D4AF37" }} />
                </div>
                <div>
                  <p
                    className="font-cinzel text-xs tracking-widest uppercase mb-2"
                    style={{ color: "rgba(212,175,55,0.7)" }}
                  >
                    Marriage Hall
                  </p>
                  <h3
                    className="font-cormorant italic font-bold text-2xl md:text-3xl mb-2 leading-tight"
                    style={{ color: "#F5E6A3" }}
                  >
                    {venueDetails.name}
                  </h3>
                  <p
                    className="font-tamil text-sm mb-4"
                    style={{ color: "rgba(245,230,163,0.6)" }}
                  >
                    {venueDetails.nameTamil}
                  </p>
                  <p
                    className="font-garamond text-base leading-relaxed"
                    style={{ color: "rgba(245,230,163,0.8)" }}
                  >
                    {venueDetails.address}
                  </p>
                  <p
                    className="font-tamil text-sm mt-1"
                    style={{ color: "rgba(245,230,163,0.5)" }}
                  >
                    {venueDetails.addressTamil}
                  </p>
                </div>
              </div>
            </div>

            {/* Date & Time */}
            <div
              className="grid grid-cols-2 gap-4"
            >
              <div
                className="p-5 rounded-sm text-center"
                style={{
                  background: "rgba(127,29,29,0.05)",
                  border: "1px solid rgba(212,175,55,0.25)",
                }}
              >
                <Clock size={16} className="mx-auto mb-2" style={{ color: "#D4AF37" }} />
                <p
                  className="font-cinzel text-xs tracking-widest uppercase mb-1"
                  style={{ color: "rgba(127,29,29,0.55)" }}
                >
                  Muhurtham
                </p>
                <p
                  className="font-cormorant font-semibold text-lg"
                  style={{ color: "#7F1D1D" }}
                >
                  10:30 – 11:30
                </p>
                <p
                  className="font-garamond text-sm"
                  style={{ color: "rgba(43,43,43,0.55)" }}
                >
                  Morning
                </p>
              </div>
              <div
                className="p-5 rounded-sm text-center"
                style={{
                  background: "rgba(127,29,29,0.05)",
                  border: "1px solid rgba(212,175,55,0.25)",
                }}
              >
                <MapPin size={16} className="mx-auto mb-2" style={{ color: "#D4AF37" }} />
                <p
                  className="font-cinzel text-xs tracking-widest uppercase mb-1"
                  style={{ color: "rgba(127,29,29,0.55)" }}
                >
                  Date
                </p>
                <p
                  className="font-cormorant font-semibold text-base"
                  style={{ color: "#7F1D1D" }}
                >
                  25th June 2026
                </p>
                <p
                  className="font-garamond text-sm"
                  style={{ color: "rgba(43,43,43,0.55)" }}
                >
                  Thursday
                </p>
              </div>
            </div>

            {/* Contact */}
            <div
              className="p-6 rounded-sm"
              style={{
                background: "rgba(127,29,29,0.04)",
                border: "1px solid rgba(212,175,55,0.2)",
              }}
            >
              <p
                className="font-cinzel text-xs tracking-widest uppercase mb-4"
                style={{ color: "rgba(127,29,29,0.5)" }}
              >
                For Enquiries
              </p>
              <div className="flex flex-col gap-3">
                {venueDetails.contacts.map((c, i) => (
                  <a
                    key={i}
                    href={`tel:+91${c.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{
                        background: "rgba(212,175,55,0.1)",
                        border: "1px solid rgba(212,175,55,0.3)",
                      }}
                    >
                      <Phone size={13} style={{ color: "#D4AF37" }} />
                    </div>
                    <div>
                      {c.name && (
                        <p
                          className="font-cormorant font-semibold text-sm"
                          style={{ color: "#7F1D1D" }}
                        >
                          {c.name}
                        </p>
                      )}
                      <p
                        className="font-cinzel text-sm tracking-wider group-hover:underline"
                        style={{ color: "#2B2B2B" }}
                      >
                        {c.phone}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Get Directions Button */}
            <a
              href={venueDetails.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 py-4 px-6 rounded-sm card-hover group"
              style={{
                background: "linear-gradient(135deg, #D4AF37 0%, #B8961F 100%)",
                boxShadow: "0 8px 24px rgba(212,175,55,0.35)",
              }}
            >
              <Navigation size={16} style={{ color: "#7F1D1D" }} />
              <span
                className="font-cinzel text-sm tracking-widest uppercase font-semibold"
                style={{ color: "#7F1D1D" }}
              >
                Get Directions
              </span>
              <ExternalLink size={13} style={{ color: "#7F1D1D" }} />
            </a>
          </div>

          {/* Right: Map */}
          <div
            className="rounded-sm overflow-hidden"
            style={{
              border: "1px solid rgba(212,175,55,0.35)",
              boxShadow: "0 16px 48px rgba(0,0,0,0.1)",
              minHeight: "420px",
            }}
          >
            {/* Map header */}
            <div
              className="px-5 py-3 flex items-center gap-2"
              style={{
                background: "#7F1D1D",
                borderBottom: "1px solid rgba(212,175,55,0.3)",
              }}
            >
              <MapPin size={14} style={{ color: "#D4AF37" }} />
              <p
                className="font-cinzel text-xs tracking-widest uppercase"
                style={{ color: "rgba(245,230,163,0.9)" }}
              >
                Sri Ranganathan Ranjitham Mahal · Dharmapuri
              </p>
            </div>

            {/* Embedded Google Map */}
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3905.902898734699!2d78.15574157503567!3d12.127748688099226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bac0f9b8e1d6f57%3A0x4b16b1f82e19cd51!2sDharmapuri%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "380px", display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        {/* Bottom invitation note */}
        <div
          className="mt-16 text-center p-8 md:p-12 rounded-sm"
          style={{
            background: "rgba(127,29,29,0.04)",
            border: "1px solid rgba(212,175,55,0.2)",
          }}
        >
          <p
            className="font-cormorant italic text-lg md:text-xl leading-relaxed max-w-3xl mx-auto"
            style={{ color: "#7F1D1D" }}
          >
            &ldquo;நிச்சயிக்கப்பட்ட மேற்படி திருமணம் தர்மபுரி – கிருஷ்ணகிரி மெயின் ரோடு,
            குண்டலப்பட்டி, ஸ்ரீ ரங்கநாதன் ரஞ்சிதம் மகாலில் நடைபெற உள்ளதால்
            தாங்கள் தங்கள் சுற்றமும் நட்பும் கூட வருக தந்து மணமக்களை
            வாழ்த்தியருள அன்புடன் அழைக்கின்றோம்.&rdquo;
          </p>
          <div
            className="mt-6 h-px w-24 mx-auto"
            style={{ background: "rgba(212,175,55,0.4)" }}
          />
        </div>
      </div>
    </section>
  );
}
