const spectrumToPhosphor = {
  ChevronDown: "caret-down",
  ChevronDown75: "caret-down",
  ChevronDown100: "caret-down",
  CaretDown: "caret-down",
  Search: "magnifying-glass",
  Magnify: "magnifying-glass",
  MagnifyGlass: "magnifying-glass",
  Cross: "x",
  Cross75: "x",
  Cross100: "x",
  Close: "x",
  Checkmark: "check",
  Checkmark75: "check",
  Checkmark100: "check",
  Check: "check",
};

const camelToKebab = value =>
  value
    .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
    .replace(/_/g, "-")
    .toLowerCase();

export const getPhosphorIcon = name => {
  if (!name) {
    return "plus";
  }

  if (spectrumToPhosphor[name]) {
    return spectrumToPhosphor[name];
  }

  return camelToKebab(name);
};
