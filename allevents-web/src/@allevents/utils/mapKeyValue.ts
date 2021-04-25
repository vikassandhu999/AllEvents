export const mapKeyValue = (mappable: object, mapperFn: Function) => {
  if (typeof mappable !== 'object')
    throw new Error("Invalid type of 'mappable'");
  Object.entries(mappable).forEach(([key, value]) => mapperFn(key, value));
};
