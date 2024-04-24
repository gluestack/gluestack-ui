export function deepMergeObjects(...objects) {
    const isObject = (obj) => obj && typeof obj === 'object' && !Array.isArray(obj);
    return objects.reduce((prev, obj) => {
        if (isObject(prev) && isObject(obj)) {
            Object.keys(obj).forEach((key) => {
                if (isObject(obj[key])) {
                    if (!prev[key] || !isObject(prev[key])) {
                        prev[key] = {};
                    }
                    prev[key] = deepMergeObjects(prev[key], obj[key]);
                }
                else {
                    if (Array.isArray(obj[key]) && Array.isArray(prev[key])) {
                        prev[key] = prev[key].concat(obj[key]); // Merge arrays without converting to an object
                    }
                    else {
                        if (obj[key] !== undefined)
                            prev[key] = obj[key];
                    }
                }
            });
        }
        return prev;
    }, {});
}
