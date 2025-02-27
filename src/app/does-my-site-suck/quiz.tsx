"use client";

import {
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Progress } from "@/components/ui/progress";
import { QUIZ } from "@/data/quiz";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const Quiz = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [answers, setAnswers] = useState<
    { question: string; answer: string; weight: number }[]
  >([]);
  const [submitted, setSubmitted] = useState(false);

  // Calculate total score
  const totalScore = answers.reduce((sum, ans) => sum + ans.weight, 0);

  // Normalize the score out of 100
  const maxPossibleScore = QUIZ.length * 5; // Assuming 5 is the max weight per question
  const normalizedScore = Math.round((totalScore / maxPossibleScore) * 100);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handlePrevious = () => {
    setActiveStep(activeStep - 1);
  };

  const selectAnswer = (question: string, answer: string, weight: number) => {
    const updatedAnswers = answers.some((a) => a.question === question)
      ? answers.map((a) =>
          a.question === question ? { question, answer, weight } : a
        )
      : [...answers, { question, answer, weight }];

    setAnswers(updatedAnswers);
  };

  const allQuestionsAnswered = answers.length === QUIZ.length;

  const handleSubmit = () => {
    if (allQuestionsAnswered) {
      setSubmitted(true);
    }
  };

  const getFeedbackMessage = () => {
    if (normalizedScore <= 30) {
      return {
        message:
          "Your website is in great shape! Keep up with regular updates and optimization.",
        color: "green-500",
        icon: <CheckCircle size={64} className="text-green-500 mx-auto" />,
      };
    } else if (normalizedScore <= 60) {
      return {
        message:
          "Your website is doing okay but could use some improvements. Check your mobile performance, SEO, and update your site regularly.",
        color: "yellow-500",
        icon: <AlertTriangle size={64} className="text-yellow-500 mx-auto" />,
      };
    } else {
      return {
        message:
          "Your website might need serious attention. Slow speeds, poor mobile support, and outdated content could be costing you business.",
        color: "red-500",
        icon: <AlertTriangle size={64} className="text-red-500 mx-auto" />,
      };
    }
  };

  if (submitted) {
    const feedback = getFeedbackMessage();

    return (
      <div
        className={cn(
          "max-w-3xl mx-auto mt-16 text-center p-6 border rounded-lg ",
          `bg-${feedback.color}/20`,
          `border-${feedback.color}`
        )}
      >
        {feedback.icon}
        <h2 className="text-2xl font-bold mt-4">Your Website Health Score</h2>
        <p className={`text-lg mt-2 font-semibold text-${feedback.color}`}>
          Score: {normalizedScore} / 100
        </p>
        <p className="text-lg mt-2">{feedback.message}</p>
        <Button
          asChild
          className="mt-6 bg-primary text-lg text-white px-6 py-5 rounded-none"
        >
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="mb-32">
      <Progress
        className="max-w-3xl mx-auto mt-4 md:mt-8"
        value={(activeStep / (QUIZ.length - 1)) * 100}
        max={QUIZ.length - 1}
      />

      <div className="max-w-3xl mx-auto mt-8 md:mt-16">
        <h2 className="text-2xl font-bold">{QUIZ[activeStep].question}</h2>
        <p className="text-lg mt-4">{QUIZ[activeStep].blurb}</p>

        {QUIZ[activeStep].answers.map((answer, index) => (
          <button
            onClick={() =>
              selectAnswer(
                QUIZ[activeStep].question,
                answer.text,
                answer.weight
              )
            }
            key={index}
            className={cn(
              "w-full text-lg bg-white border border-gray-300 rounded-lg p-4 mt-4",
              answers.find((a) => a.question === QUIZ[activeStep].question)
                ?.answer === answer.text && "bg-primary text-white"
            )}
          >
            {answer.text}
          </button>
        ))}

        <div className="flex justify-between mt-8">
          {activeStep > 0 && (
            <button
              className="flex justify-start items-center text-lg gap-2"
              onClick={handlePrevious}
            >
              <ArrowLeft /> Previous
            </button>
          )}
          {activeStep < QUIZ.length - 1 && (
            <button
              className="flex justify-start items-center text-lg gap-2 ml-auto"
              onClick={handleNext}
            >
              Next
              <ArrowRight />
            </button>
          )}
          {activeStep === QUIZ.length - 1 && (
            <Button
              className="flex items-center text-lg gap-2 bg-primary px-7 py-5 rounded-none text-white disabled:opacity-50"
              disabled={!allQuestionsAnswered}
              onClick={handleSubmit}
            >
              Submit <ArrowRight />
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
