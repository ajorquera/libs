/**
 *  Set the right property value according to the priority of it's other properties
 */
export declare const setPropValueFromPriority: (key: string, priorityOrder: string[]) => (props: any) => any;
export declare const removeUndefined: (obj: Record<string, string>) => Record<string, string>;
export declare const removeProps: (keys: string[]) => (obj: Record<string, string>) => {
    [x: string]: string;
};
export declare const checkEnvVars: (envVars: string[]) => void;
