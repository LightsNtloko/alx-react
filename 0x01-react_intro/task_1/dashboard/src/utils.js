// utils.js

export function getFullYear() {
  return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
  return isIndex ? "Holberton Schoo;" : "Holberton school main dashboard";
}
