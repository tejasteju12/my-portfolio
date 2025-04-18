// pages/contact.tsx or app/contact/page.tsx (Next.js 13+)
import { useLoadScript } from "@react-google-maps/api";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

export default function Contact() {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!, // Add this to your .env file
  });

  const center = useMemo(() => ({ lat: 13.3409, lng: 77.1010 }), []);

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-6">
      <h1 className="text-4xl font-bold mb-6"></h1>

      <div className="mb-8 rounded-lg overflow-hidden shadow-lg">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={{ width: "100%", height: "400px" }}
            center={center}
            zoom={13}
            options={{
              styles: darkMapStyle, // custom dark theme
              disableDefaultUI: true,
            }}
          >
            <Marker position={center} />
          </GoogleMap>
        ) : (
          <p>Loading map...</p>
        )}
      </div>

      <h2 className="text-2xl font-semibold mb-4">Contact Form</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Full name"
          className="p-3 rounded bg-[#2a2a2a] text-white outline-none"
        />
        <input
          type="email"
          placeholder="Email address"
          className="p-3 rounded bg-[#2a2a2a] text-white outline-none"
        />
        <input
          type="text"
          placeholder="Subject"
          className="md:col-span-2 p-3 rounded bg-[#2a2a2a] text-white outline-none"
        />
        <textarea
          placeholder="Message"
          className="md:col-span-2 p-3 rounded bg-[#2a2a2a] text-white outline-none"
          rows={5}
        />
        <button
          type="submit"
          className="md:col-span-2 p-3 rounded bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

// Dark map style (Google Maps JSON)
const darkMapStyle = [
  {
    elementType: "geometry",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }],
  },
  {
    elementType: "labels.text.fill",
    stylers: [{ color: "#746855" }],
  },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }],
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }],
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }],
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }],
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }],
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }],
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }],
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }],
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }],
  },
];

