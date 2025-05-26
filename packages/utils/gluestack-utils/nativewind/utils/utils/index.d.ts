export declare function parseDataAttribute(inputString: string): {
    state: string;
    value: string;
    className: string;
} | {
    state: null;
    value: null;
    className: null;
};
export declare function stringToBoolean(str: string): boolean;
export declare function extractDataClassName(className: string, states: any): string | undefined;
