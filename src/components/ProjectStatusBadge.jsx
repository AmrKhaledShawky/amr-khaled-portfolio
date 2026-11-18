function ProjectStatusBadge({ status }) {
  const normalizedStatus = (status || "Ongoing").trim().toLowerCase();
  let statusClass = "project-status-planned";

  if (
    normalizedStatus.startsWith("complete") ||
    normalizedStatus.includes("demonstrated")
  ) {
    statusClass = "project-status-completed";
  } else if (normalizedStatus.startsWith("deploy")) {
    statusClass = "project-status-deployed";
  } else if (
    normalizedStatus.startsWith("ongoing") ||
    normalizedStatus.includes("in progress")
  ) {
    statusClass = "project-status-ongoing";
  }

  return (
    <span className={`project-status-badge ${statusClass}`}>
      {status}
    </span>
  );
}

export default ProjectStatusBadge;
