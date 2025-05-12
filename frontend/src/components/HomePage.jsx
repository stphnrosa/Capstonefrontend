import { useState, useEffect } from 'react'
import CreateAssessmentForm from './CreateAssessmentForm';
import AssessmentList from './AssessmentList';

export default function HomePage() {
    const [ assessments, setAssessments] = useState(null);

    useEffect(() => {
        async function getAssessments() {
    try {
        const response = await fetch ('http://localhost:3000/assessment');
        const data = await response.json();
        setAssessments(data);
        } catch (error) {
          console.error(error);
        }
      }
      getAssessments() //invoking this function
    }, []) // placed empty dependency array  as a second argument because we only want this useEffect code to happen once.

  return (
    <div> 
        <CreateAssessmentForm />
        <AssessmentList />
    </div>
  )
}
