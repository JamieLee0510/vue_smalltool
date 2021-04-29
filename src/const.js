//DarkModeSwitchToggle needed const
export const isString = value => {
    return typeof value === 'string';
};

export const isBoolean = value => {
    return typeof value === 'boolean';
};

export const isObject = value => {
    return typeof value === 'object';
};

export const has = (object, key) => {
    //ESLint禁用Object.hasOwnProperty,因為
    //1.Javascript沒有保護hasOwnProperty這個屬性名
    //2.當 let data = Object.create(null)，雖然有Object，但hasOwnProperty會undefined
    let hasOwnProperty = Object.prototype.hasOwnProperty;
    return isObject(object) && hasOwnProperty.call(object, key);
};

export const get = (object, key, defaultValue) => {
    return has(object, key) ? object[key] : defaultValue;
};

export const px = value => {
    return `${value}px`;
};

export const translate = (x, y) => {
    return `translate(${x}, ${y})`;
};
