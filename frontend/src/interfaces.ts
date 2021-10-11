export interface Country {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
}

export interface ApiResult {
  results: Country[];
}

export interface ApiResolve {
  (data: Country[]): void;
}

export interface AutocompletePropsOnChange {
  (value: Country | null): void;
}

export interface AutocompleteProps {
  label: string;
  onChange: AutocompletePropsOnChange;
}
