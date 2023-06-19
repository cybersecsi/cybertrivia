export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

export const saveObjectToStorage = (key: string, data: any) => {
  const strData = JSON.stringify(data);
  const base64Data = btoa(strData);
  sessionStorage.setItem(key, base64Data);
};

export const getObjectFromStorage = (key: string): any => {
  const obj = sessionStorage.getItem(key);
  console.log(obj);
  if (obj) {
    return JSON.parse(atob(obj));
  } else {
    return undefined;
  }
};

export const keyInStorage = (key: string): boolean => {
  return sessionStorage.getItem(key) !== null;
};
