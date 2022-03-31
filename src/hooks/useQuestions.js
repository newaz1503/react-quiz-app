import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

export default function useQuestions(videoId) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestiions] = useState([]);
  useEffect(() => {
    async function fetchQuestions() {
      //database
      const db = getDatabase();
      const quizRef = ref(db, "quiz/" + videoId + "/questions");

      const quizQuery = query(quizRef, orderByKey());

      try {
        setLoading(false);
        setError(false);
        const snapshot = await get(quizQuery);
        setLoading(false);
        if (snapshot.exists()) {
          setQuestiions((prevQuestions) => {
            return [...prevQuestions, ...Object.values(snapshot.val())];
          });
        }
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }

    fetchQuestions();
  }, [videoId]);

  return {
    loading,
    error,
    questions,
  };
}
