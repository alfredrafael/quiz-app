export const quiz = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "What is the capital of France?",
      answers: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter",
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Maldives", "Vatican City", "San Marino"],
      correctAnswer: "Vatican City",
    },
    {
      id: 4,
      question: "What is the most widely spoken language in the world?",
      answers: ["English", "Mandarin", "Spanish", "Hindi"],
      correctAnswer: "Mandarin",
    },
    {
      id: 5,
      question: "Who is the founder of Microsoft?",
      answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Bill Gates",
    },
  ],
};

export const quiz2 = {
  totalQuestions: 5,
  questions: [
    {
      id: 1,
      question: "Cual es la capital de Francia?",
      answers: ["Madrid", "Paris", "Rome", "Berlin"],
      correctAnswer: "Paris",
      incorrectAnswers: ["Madrid", "Rome", "Berlin"],
      replyToIncorrectAnswers: [
        "Madrid is in Spain",
        "Rome is in Italy",
        "Berlin is in Germany",
      ],
      replyToCorrectAnswer: ["Paris is the correct answer"],
    },
    {
      id: 2,
      question: "What is the largest planet in our solar system?",
      answers: ["Mars", "Jupiter", "Venus", "Saturn"],
      correctAnswer: "Jupiter",
      incorrectAnswers: ["Mars", "Venus", "Saturn"],
      replyToIncorrectAnswers: ["Is not Mars", "Is not Venus", "is not Saturn"],
      replyToCorrectAnswer: ["Jupiter is the correct answer"],
    },
    {
      id: 3,
      question: "What is the smallest country in the world?",
      answers: ["Monaco", "Maldives", "Vatican City", "San Marino"],
      correctAnswer: "Vatican City",
      incorrectAnswers: ["Monaco", "Maldives", "San Marino"],
      replyToIncorrectAnswers: [
        "Is not Monaco",
        "Is not Maldives",
        "is not San Marino",
      ],
      replyToCorrectAnswer: ["Vatican City is the correct answer"],
    },
    {
      id: 4,
      question: "What is the most widely spoken language in the world?",
      answers: ["English", "Mandarin", "Spanish", "Hindi"],
      correctAnswer: "Mandarin",
      incorrectAnswers: ["English", "Spanish", "Hindi"],
      replyToIncorrectAnswers: [
        "Is not English",
        "Is not Spanish",
        "is not Hindi",
      ],
      replyToCorrectAnswer: ["Mandarin is the correct answer"],
    },
    {
      id: 5,
      question: "Who is the founder of Microsoft?",
      answers: ["Steve Jobs", "Bill Gates", "Elon Musk", "Mark Zuckerberg"],
      correctAnswer: "Bill Gates",
      incorrectAnswers: ["Steve Jobs", "Elon Musk", "Mark Zuckerberg"],
      replyToIncorrectAnswers: [
        "Is not Steve Jobs",
        "Is not Elon Musk",
        "is not Mark Zuckerberg",
      ],
      replyToCorrectAnswer: ["Bill Gates is the correct answer"],
    },
  ],
};
