export const getLocalData = <T>(key: string): T | undefined => {
  try {
    const data = localStorage.getItem(key);
    if (data) {
      return JSON.parse(data) as T;
    }
  } catch (e) {
    console.error("Error while parsing localStorage data:", e);
  }
  return undefined;
};

export const setLocalData = <T>(key: string, data: T): void => {
  return localStorage.setItem(
    key,
    typeof data === "string" ? data : JSON.stringify(data)
  );
};
