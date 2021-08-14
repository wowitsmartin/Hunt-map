import { MapContainer, LayerGroup } from 'react-leaflet';
import { useAppSelector } from '../../hooks/redux-toolkit';

import { TileLayerMap } from './tileLayer';
import { MarkerLabel } from './markerLabel';
import { MarkerSpawnPlayer } from './markerSpawnPlayer';

import {
  selectViewMap,
  selectOptionsViewMap,
  selectIdMaps,
  selectMaps,
} from '../../store/map/selectors';
import { selectViewMarkerFilters } from '../../store/filter/selectors';

import { createCRS } from './crs';

import { markers } from '../../data';

import type { TypeFeatureMarker } from './markerBase/types';

import './style.css';
import './markerBase/style.css';

export const Map = () => {
  const idMaps = useAppSelector(selectIdMaps);
  const maps = useAppSelector(selectMaps);
  const filters = useAppSelector(selectViewMarkerFilters);
  const { center, zoom } = useAppSelector(selectViewMap);
  const { width, height } = useAppSelector(selectOptionsViewMap).image;
  const { id: idMap } = useAppSelector(selectViewMap);

  // console.log(optionsMap);
  // console.log(filters.includes('label'));

  const switchTypeMarkers = (v: TypeFeatureMarker, i: number) => {
    console.log(v.properties.title);

    switch (v.properties.title) {
      case 'label':
        return <MarkerLabel feature={v} key={i} />;
      case 'spawn-player':
        return <MarkerSpawnPlayer feature={v} key={i} />;
      default:
        return null;
    }
  };

  return (
    <MapContainer
      zoom={zoom}
      zoomSnap={0.1}
      center={center}
      zoomControl={false}
      maxBoundsViscosity={0.6}
      crs={createCRS(width, height)}
    >
      {idMaps.map((id) => idMap === id && <TileLayerMap optionsMap={maps[id]} key={id} />)}

      {filters.map((filter) => (
        <LayerGroup key={filter}>
          {markers[idMap].features
            .filter((v) => v.properties.title === filter)
            .map((v, i) => switchTypeMarkers(v, i))}
        </LayerGroup>
      ))}

      <LayerGroup></LayerGroup>
    </MapContainer>
  );
};
