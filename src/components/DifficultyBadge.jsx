const difficultyClassNames = {
  Easy: "difficulty-easy",
  Medium: "difficulty-medium",
  Hard: "difficulty-hard",
};

function DifficultyBadge({ difficulty }) {
  const className = difficultyClassNames[difficulty] || "difficulty-default";

  return <span className={`difficulty-badge ${className}`}>{difficulty}</span>;
}

export default DifficultyBadge;
