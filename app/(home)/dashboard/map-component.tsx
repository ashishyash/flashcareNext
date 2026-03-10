"use client";

import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import L from "leaflet";
import { Nurse } from "@/app/(home)/search/search.constant";
import { useMemo } from "react";

interface MapComponentProps {
  center: [number, number];
  nurses: Nurse[];
}

const hospitalIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const nurseIcon = new L.Icon({
  iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

export default function MapComponent({ center, nurses }: MapComponentProps) {
  const nursePositions = useMemo(() => {
    return nurses.map((nurse, index) => {
      const angle = (index / nurses.length) * 2 * Math.PI;
      const distanceInDegrees = nurse.distance_miles / 69;
      const lat = center[0] + distanceInDegrees * Math.cos(angle);
      const lng = center[1] + distanceInDegrees * Math.sin(angle);
      return { nurse, lat, lng };
    });
  }, [nurses, center]);

  return (
    <MapContainer center={center} zoom={8} className="w-full h-full rounded-lg" style={{ height: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <Marker position={center} icon={hospitalIcon}>
        <Tooltip permanent direction="top" offset={[0, -40]} className="font-semibold">
          <div className="text-center">
            <strong className="text-base">Memorial Hospital</strong>
            <br />
            <span className="text-sm">Powell Ave SW</span>
            <br />
            <span className="text-sm">Renton, WA 98057</span>
          </div>
        </Tooltip>
      </Marker>
      {nursePositions.map(({ nurse, lat, lng }, index) => (
        <Marker key={`${nurse.id}-${index}`} position={[lat, lng]} icon={nurseIcon}>
          <Tooltip direction="top" offset={[0, -40]}>
            <div>
              <strong>{nurse.name}</strong>
              <br />
              <span>Specialty: {nurse.specialty}</span>
              <br />
              <span>Experience: {nurse.experience_years} years</span>
              <br />
              <span>Location: {nurse.location}</span>
              <br />
              <span>Distance: {nurse.distance_miles} miles</span>
              <br />
              <span>Availability: {nurse.availability_status}</span>
              <br />
              <span>Rating: {nurse.previous_rating} ⭐</span>
            </div>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
