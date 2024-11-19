import React from "react";
import { useSelector } from "react-redux";
import LevelsContainer from "../../components/LevelsContainer";

export default function LearnPage() {
  const wordsByLevel = useSelector((state) => state.wordsByLevel);

  //console.log(wordsByLevel);

  const uniqueLevels = React.useMemo(() => {
    if (!wordsByLevel || wordsByLevel.length === 0) return [];
    const levels = wordsByLevel.map((word) => word.level); // Map to levels
    return [...new Set(levels)]; // Remove duplicates with Set
  }, [wordsByLevel]);

  //console.log(uniqueLevels);

  return (
    <div>
      <LevelsContainer levels={uniqueLevels} />
    </div>
  );
}
