export interface BlueFlagPlateSearchResponse {
    vin?: string | null;
    chassis?: string | null;
};

export const plate_search = async (): Promise<BlueFlagPlateSearchResponse> => {
    return {
        vin: 'VVVVVVVVVVVVVVVVV',
        chassis: null
    };
};