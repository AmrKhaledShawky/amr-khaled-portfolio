function ResearchStatusBadge({ status }) {
  const normalizedStatus = (status || "Ongoing").trim();

  const statusMap = {
    Verified: "status-verified",
    Ongoing: "status-ongoing",
    "Waiting Acceptance": "status-waiting",
    Published: "status-published",
    "Self Research": "status-self-research",
    "Under Review": "status-under-review",
  };

  return (
    <span
      className={`research-status-badge ${statusMap[normalizedStatus] || "status-default"}`}
      aria-label={`Research status: ${normalizedStatus}`}
    >
      {normalizedStatus}
    </span>
  );
}

export default ResearchStatusBadge;
