
export enum ACSProduct {
    ACS1Year = 'acs1',
    ACS3Year = 'acs3',
    ACS5Year = 'acs5'
}

export enum ACS1YearVintage {
    ACS_2015 = 2015
}

export enum ACS3YearVintage {
    ACS_2015 = 2015
}

export enum ACS5YearVintage {
    ACS_2015 = 2015
}

export enum State {
    Connecticut = 9,
    Maine = 23,
    Massachusetts = 25,
    NewHampshire = 33,
    RhodeIsland = 44,
    Vermont = 50,
    NewJersey = 34,
    NewYork = 36,
    Pennsylvania = 42,
    Illinois = 17,
    Indiana = 18,
    Michigan = 26,
    Ohio = 39,
    Wisconsin = 55,
    Iowa = 19,
    Kansas = 20,
    Minnesota = 27,
    Missouri = 29,
    Nebraska = 31,
    NorthDakota = 38,
    SouthDakota = 46,
    Delaware = 10,
    DistrictOfColumbia = 11,
    Florida = 12,
    Georgia = 13,
    Maryland = 24,
    NorthCarolina = 37,
    SouthCarolina = 45,
    Virginia = 51,
    WestVirginia = 54,
    Alabama = 1,
    Kentucky = 21,
    Mississippi = 28,
    Tennessee = 47,
    Arkansas = 5,
    Louisiana = 22,
    Oklahoma = 40,
    Texas = 48,
    Arizona = 4,
    Colorado = 8,
    Idaho = 16,
    Montana = 30,
    Nevada = 32,
    NewMexico = 35,
    Utah = 49,
    Wyoming = 56,
    Alaska = 2,
    California = 6,
    Hawaii = 15,
    Oregon = 41,
    Washington = 53
}

export type GeoAll = "*";

export type LatLng = {
    lat: number,
    lng: number
}

enum GeoResolution {
    r500k = '500k',
    r5m = '5m',
    r20m = '20m'
}
export type GeoHierarchy = {
    state?: State | string | number | GeoAll | LatLng,
    county?: string | number | GeoAll | LatLng,
    tract?: string | number | GeoAll | LatLng,
    geoResolution?: GeoResolution
}



export type Vintage = ACS1YearVintage | ACS3YearVintage | ACS5YearVintage;


// From vega, not sure how to import these properly 

export const ARC: 'arc' = 'arc';
export const AREA: 'area' = 'area';
export const BAR: 'bar' = 'bar';
export const IMAGE: 'image' = 'image';
export const LINE: 'line' = 'line';
export const POINT: 'point' = 'point';
export const RECT: 'rect' = 'rect';
export const RULE: 'rule' = 'rule';
export const TEXT: 'text' = 'text';
export const TICK: 'tick' = 'tick';
export const TRAIL: 'trail' = 'trail';
export const CIRCLE: 'circle' = 'circle';
export const SQUARE: 'square' = 'square';
export const GEOSHAPE: 'geoshape' = 'geoshape';

export type Mark =
    | typeof ARC
    | typeof AREA
    | typeof BAR
    | typeof LINE
    | typeof IMAGE
    | typeof TRAIL
    | typeof POINT
    | typeof TEXT
    | typeof TICK
    | typeof RECT
    | typeof RULE
    | typeof CIRCLE
    | typeof SQUARE
    | typeof GEOSHAPE;


export const QUANTITATIVE: 'quantitative' = 'quantitative';
export const ORDINAL: 'ordinal' = 'ordinal';
export const TEMPORAL: 'temporal' = 'temporal';
export const NOMINAL: 'nominal' = 'nominal';

export const GEOJSON: 'geojson' = 'geojson';

export type StandardType = typeof QUANTITATIVE | typeof ORDINAL | typeof TEMPORAL | typeof NOMINAL;