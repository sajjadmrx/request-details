interface I_iplocate {
  ip: string;
  country: string;
  country_code: string;
  city: string | null;
  continent: string;
  latitude: number;
  longitude: number;
  time_zone: string;
  postal_code: string | null;
  org: string;
  asn: string;
  subdivision: string | null;
  subdivision_code: string | null;
}

export default I_iplocate;

/**
 * Represents the data structure for IP location information.
 *
 * @interface
 * @name I_iplocate
 * @property {string} ip - The IP address.
 * @property {string} country - The country name.
 * @property {string} country_code - The country code.
 * @property {string | null} city - The city name, or `null` if not available.
 * @property {string} continent - The continent name.
 * @property {number} latitude - The latitude coordinate.
 * @property {number} longitude - The longitude coordinate.
 * @property {string} time_zone - The time zone.
 * @property {string | null} postal_code - The postal code, or `null` if not available.
 * @property {string} org - The organization name.
 * @property {string} asn - The Autonomous System Number (ASN).
 * @property {string | null} subdivision - The subdivision name, or `null` if not available.
 * @property {string | null} subdivision_code - The subdivision code, or `null` if not available.
 */
