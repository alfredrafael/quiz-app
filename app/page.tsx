import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container">
        <h1>Quiz App</h1>
        <Link href="/quiz-1">
          <button>Start Quiz</button>
        </Link>
        <Link href="/quiz-2">
          <button>Start Quiz 2</button>
        </Link>
      </div>
    </main>
  );
}
