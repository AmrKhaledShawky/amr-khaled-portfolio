export function formatDate(dateValue) {
  if (!dateValue) {
    return "Not published yet";
  }

  const date = new Date(`${dateValue}T00:00:00`);

  if (Number.isNaN(date.getTime())) {
    return dateValue;
  }

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  }).format(date);
}

export function formatProjectDate(dateValue) {
  if (!dateValue) {
    return "Not published yet";
  }

  if (/^\d{4}-\d{2}$/.test(dateValue)) {
    const date = new Date(`${dateValue}-01T00:00:00`);

    if (!Number.isNaN(date.getTime())) {
      return new Intl.DateTimeFormat("en-GB", {
        month: "short",
        year: "numeric",
      }).format(date);
    }
  }

  return formatDate(dateValue);
}
