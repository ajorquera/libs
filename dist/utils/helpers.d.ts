/**
 *  Set the right property value according to the priority of it's other properties
 */
export declare const setPropValueFromPriority: (key: string, priorityOrder: string[]) => (props: any) => any;
export declare const removeUndefined: (obj: Record<string, string>) => Record<string, string>;
export declare const removeProps: (keys: string[]) => (obj: Record<string, string>) => {
    [x: string]: string;
};
type unknowObj = Record<string, unknown>;
export declare const mergeDeep: (target: unknowObj, ...sources: unknowObj[]) => unknowObj;
export declare const checkEnvVars: (envVars: string[]) => void;
export {};
