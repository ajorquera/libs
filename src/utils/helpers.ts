
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

const isObject = (item?: unknown) => {
    return item && typeof item === 'object' && !Array.isArray(item);
}

type unknowObj = Record<string, unknown>

export const mergeDeep = (target: unknowObj, ...sources: unknowObj[]): unknowObj => {
    if (!sources.length) return target as unknowObj;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (isObject(source[key])) {
                if (!target[key]) Object.assign(target, { [key]: {} });
                mergeDeep(target[key] as unknowObj, source[key] as unknowObj);
            } else {
                Object.assign(target, { [key]: source[key] });
            }
        }
    }

    return mergeDeep(target, ...sources) as unknowObj;
}

export const checkEnvVars = (envVars: string[]) => {
    const missingEnvVars = envVars.filter((envVar) => !process.env[envVar]);
    if (missingEnvVars.length > 0) {
        throw new Error(`Missing environment variables: ${missingEnvVars.join(', ')}`);
    }
}