export interface Icountry{
    Country: string;
    Currency: string;
    "ISO-4217 Codes": string;
}

export interface Istate{
    name: string;
    code: string;
}
export interface City {
    name: string;       // Name of the city
    state?: string;     // Optional: Name of the state/UT the city belongs to
    code?: string;      // Optional: City code, if applicable
  }
  