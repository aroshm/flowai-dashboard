import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import useUsers from "../../hooks/useUsers";

const GenericMap = () => {
  const { users, loading, error } = useUsers();

  const customIcon = L.divIcon({
    className: "custom-icon",
    html: `<div style="
    background-color: #BE0AFF; 
    width: 10px; 
    height: 10px; 
    border-radius: 50%; 
    border: 2px solid white;">
  </div>`,
    iconSize: [30, 30],
    iconAnchor: [15, 15],
  });

  return (
    <div className="relative h-full w-full overflow-hidden rounded-lg">
      <MapContainer
        center={[20, 0]}
        zoom={1}
        scrollWheelZoom={false}
        className="h-full w-full"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {users.map((user) => (
          <Marker
            key={user.id}
            position={[
              user.address.coordinates.lat,
              user.address.coordinates.lng,
            ]}
            icon={customIcon}
          >
            <Popup>
              <div className="space-y-1">
                <p className="font-semibold">
                  {user.firstName} {user.lastName}
                </p>
                <p>{user.address.city}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {(loading || error) && (
        <div className="absolute inset-x-3 top-3 z-1000 rounded-md bg-white/95 px-3 py-2 text-sm shadow-sm dark:bg-slate-900/95 dark:text-gray-200">
          {loading ? "Loading users..." : error}
        </div>
      )}
    </div>
  );
};

export default GenericMap;
