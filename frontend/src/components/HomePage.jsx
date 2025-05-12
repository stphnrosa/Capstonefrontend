import { useState, useEffect } from "react";
import CreateAssessmentForm from "./CreateAssessmentForm";
import AssessmentList from "./AssessmentList";
import { getAssessments } from "../utilities/assessment-api.js";

export default function HomePage() {
  const [assessments, setAssessments] = useState(null);

  useEffect(() => {
    getAssessments().then((data) => setAssessments(data)); //invoking this function
  }, []); 
  // placed empty dependency array  as a second argument because we only want this useEffect code to happen once.

  return (
    <div>
      <CreateAssessmentForm />
      <AssessmentList />
    </div>
  );
}
