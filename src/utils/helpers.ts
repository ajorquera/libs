import { Dict } from "@/types";

/**
 *  Set the right property value according to the priority of it's other properties
 */
export const setPropValueFromPriority = (key: string, priorityOrder: string[]) => (props: any) => {
    priorityOrder.forEach(prop => {
        const value = props[key] ?? props[prop];
        if (value !== undefined) {
            props[key] = props[key] ?? props[prop];
        }
    });

    return props;
}


export const removeUndefined = (obj: Record<string, string>) => {
    const newObj: Record<string, string> = {};
    for (const key in obj) {
        if (obj[key] !== undefined) {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}

export const removeProps = (keys: string[]) => (obj: Record<string, string>) => {
    const copy = { ...obj };
    keys.forEach(key => delete copy[key]);
    return copy;
}

export const checkEnvVars = (envVars: string[], objToCheck: Dict<string>=process.env) => {
    const missingEnvVars = envVars.filter((envVar) => !objToCheck[envVar]);
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
    }
}

export const getStrTemplate = (templateStr: string, data: Dict<any>) => {
  return templateStr.replace(/\$\{([^}]+)\}/g, (_, key: string) => {
    const value = data[key.trim()];
    return value !== undefined ? value : '';
  });
}