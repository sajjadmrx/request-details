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