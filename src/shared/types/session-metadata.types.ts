export interface LocationInfo {
  country: string;
  city: string;
  latitude: number;
  longitude: number;
}

export interface DeviceInfo {
  browser: string;
  os: string;
  type: string;
}

export interface SessionPublicKey {
  ikPub: string;
  spkPub: string;
  splSig: string;
  opkPub: string[];
}

export interface SessionMetadata {
  location: LocationInfo;
  device: DeviceInfo;
  ip: string;
  publicKey?: SessionPublicKey;
}
