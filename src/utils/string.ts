export const dasherize = (str: string): string =>  {
  return decamelize(str).replace((/[ _]/g), '-');
}

export const decamelize = (str: string): string => {
  return str.replace((/([a-z\d])([A-Z])/g), '$1_$2').toLowerCase();
}

export const camelize = (str: string):string => {
  return str
    .replace(/(-|_|\.|\s)+(.)?/g, (_match: string, _separator: string, chr: string) => {
      return chr ? chr.toUpperCase() : '';
    })
    .replace(/^([A-Z])/, (match: string) => match.toLowerCase());
};
