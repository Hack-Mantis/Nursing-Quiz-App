import React, { useState } from 'react';
import "./App.css";

export default function App() {
    const questions = [
        {
            questionText: 'Which is the normal range for an adult resting heart rate?',
            answerOptions: [
                { answerText: '60-100 beats per minute', isCorrect: true },
                { answerText: '100-120 beats per minute', isCorrect: false },
                { answerText: '40-60 beats per minute', isCorrect: false },
                { answerText: '120-140 beats per minute', isCorrect: false },
            ],
        },

        {  questionText: 'Which of the following is a sign of dehydration?',

		answerOptions: [
	
			{ answerText: 'Dry skin', isCorrect: true },
	
			{ answerText: 'Excessive sweating', isCorrect: false },
	
			{ answerText: 'Increased urination', isCorrect: false },
	
			{ answerText: 'Clear urine', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the primary purpose of administering insulin?',
	
		answerOptions: [
	
			{ answerText: 'Lower blood sugar levels', isCorrect: true },
	
			{ answerText: 'Increase blood pressure', isCorrect: false },
	
			{ answerText: 'Treat infections', isCorrect: false },
	
			{ answerText: 'Relieve pain', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the normal range for an adult respiratory rate?',
	
		answerOptions: [
	
			{ answerText: '12-20 breaths per minute', isCorrect: true },
	
			{ answerText: '20-30 breaths per minute', isCorrect: false },
	
			{ answerText: '5-10 breaths per minute', isCorrect: false },
	
			{ answerText: '25-35 breaths per minute', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which electrolyte imbalance is associated with muscle cramps?',
	
		answerOptions: [
	
			{ answerText: 'Hypokalemia', isCorrect: true },
	
			{ answerText: 'Hypernatremia', isCorrect: false },
	
			{ answerText: 'Hypercalcemia', isCorrect: false },
	
			{ answerText: 'Hyponatremia', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which site is most commonly used for intramuscular injections?',
	
		answerOptions: [
	
			{ answerText: 'Deltoid muscle', isCorrect: true },
	
			{ answerText: 'Biceps muscle', isCorrect: false },
	
			{ answerText: 'Triceps muscle', isCorrect: false },
	
			{ answerText: 'Quadriceps muscle', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the first step in the nursing process?',
	
		answerOptions: [
	
			{ answerText: 'Assessment', isCorrect: true },
	
			{ answerText: 'Planning', isCorrect: false },
	
			{ answerText: 'Implementation', isCorrect: false },
	
			{ answerText: 'Evaluation', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is a symptom of hypoxia?',
	
		answerOptions: [
	
			{ answerText: 'Cyanosis', isCorrect: true },
	
			{ answerText: 'Bradycardia', isCorrect: false },
	
			{ answerText: 'Hypertension', isCorrect: false },
	
			{ answerText: 'Hyperglycemia', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the recommended needle length for an adult intramuscular injection?',
	
		answerOptions: [
	
			{ answerText: '1 to 1.5 inches', isCorrect: true },
	
			{ answerText: '0.5 to 1 inch', isCorrect: false },
	
			{ answerText: '2 to 2.5 inches', isCorrect: false },
	
			{ answerText: '3 to 3.5 inches', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which type of wound healing involves delayed closure?',
	
		answerOptions: [
	
			{ answerText: 'Tertiary intention', isCorrect: true },
	
			{ answerText: 'Primary intention', isCorrect: false },
	
			{ answerText: 'Secondary intention', isCorrect: false },
	
			{ answerText: 'Quaternary intention', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is a potential complication of immobility?',
	
		answerOptions: [
	
			{ answerText: 'Pressure ulcers', isCorrect: true },
	
			{ answerText: 'Increased bone density', isCorrect: false },
	
			{ answerText: 'Improved circulation', isCorrect: false },
	
			{ answerText: 'Enhanced muscle tone', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the normal range for fasting blood glucose in adults?',
	
		answerOptions: [
	
			{ answerText: '70-100 mg/dL', isCorrect: true },
	
			{ answerText: '100-140 mg/dL', isCorrect: false },
	
			{ answerText: '50-70 mg/dL', isCorrect: false },
	
			{ answerText: '140-180 mg/dL', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is a symptom of a urinary tract infection (UTI)?',
	
		answerOptions: [
	
			{ answerText: 'Burning sensation during urination', isCorrect: true },
	
			{ answerText: 'Increased thirst', isCorrect: false },
	
			{ answerText: 'Decreased urine output', isCorrect: false },
	
			{ answerText: 'Clear urine', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the purpose of auscultation in physical assessment?',
	
		answerOptions: [
	
			{ answerText: 'Listening to internal body sounds', isCorrect: true },
	
			{ answerText: 'Inspecting for abnormalities', isCorrect: false },
	
			{ answerText: 'Palpating for tenderness', isCorrect: false },
	
			{ answerText: 'Measuring vital signs', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is a normal finding in a cardiovascular assessment?',
	
		answerOptions: [
	
			{ answerText: 'Regular heart rate and rhythm', isCorrect: true },
	
			{ answerText: 'Murmurs and irregular rhythms', isCorrect: false },
	
			{ answerText: 'Peripheral edema', isCorrect: false },
	
			{ answerText: 'Cyanosis and pallor', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is an early sign of shock?',
	
		answerOptions: [
	
			{ answerText: 'Tachycardia', isCorrect: true },
	
			{ answerText: 'Hypertension', isCorrect: false },
	
			{ answerText: 'Bradycardia', isCorrect: false },
	
			{ answerText: 'Hyperthermia', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the most common cause of acute kidney injury (AKI)?',
	
		answerOptions: [
	
			{ answerText: 'Dehydration', isCorrect: true },
	
			{ answerText: 'Heart failure', isCorrect: false },
	
			{ answerText: 'Liver failure', isCorrect: false },
	
			{ answerText: 'Chronic hypertension', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the primary use of a nasogastric (NG) tube?',
	
		answerOptions: [
	
			{ answerText: 'To remove stomach contents', isCorrect: true },
	
			{ answerText: 'To administer oxygen', isCorrect: false },
	
			{ answerText: 'To measure blood pressure', isCorrect: false },
	
			{ answerText: 'To inject medication into veins', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is a common side effect of opioid analgesics?',
	
		answerOptions: [
	
			{ answerText: 'Constipation', isCorrect: true },
	
			{ answerText: 'Diarrhea', isCorrect: false },
	
			{ answerText: 'Hypertension', isCorrect: false },
	
			{ answerText: 'Insomnia', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which part of the stethoscope is used to listen to high-frequency sounds?',
	
		answerOptions: [
	
			{ answerText: 'Diaphragm', isCorrect: true },
	
			{ answerText: 'Bell', isCorrect: false },
	
			{ answerText: 'Chest piece', isCorrect: false },
	
			{ answerText: 'Ear tips', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'Which of the following is an appropriate action for treating hyperthermia?',
	
		answerOptions: [
	
			{ answerText: 'Administering antipyretics', isCorrect: true },
	
			{ answerText: 'Applying a warming blanket', isCorrect: false },
	
			{ answerText: 'Restricting fluid intake', isCorrect: false },
	
			{ answerText: 'Encouraging bed rest', isCorrect: false },
	
		],
	
	},
	
	{
	
		questionText: 'What is the recommended angle for inserting an intradermal injection?',
	
		answerOptions: [
	
			{ answerText: '10-15 degrees', isCorrect: true },
	
			{ answerText: '45 degrees', isCorrect: false },
	
			{ answerText: '90 degrees', isCorrect: false },
	
			{ answerText: '30 degrees', isCorrect: false },
	
		], },




        {
            questionText: 'What is the most effective way to prevent the spread of infections in hospitals?',
            answerOptions: [
                { answerText: 'Wearing gloves', isCorrect: false },
                { answerText: 'Washing hands', isCorrect: true },
                { answerText: 'Using hand sanitizer', isCorrect: false },
                { answerText: 'Wearing a mask', isCorrect: false },
            ],
        },
        {
            questionText: 'What is the normal range for an adult blood pressure?',
            answerOptions: [
                { answerText: '120/80 mmHg', isCorrect: true },
                { answerText: '140/90 mmHg', isCorrect: false },
                { answerText: '90/60 mmHg', isCorrect: false },
                { answerText: '160/100 mmHg', isCorrect: false },
            ],
        },
        {
            questionText: 'Which of the following is a sign of hypoglycemia?',
            answerOptions: [
                { answerText: 'Increased thirst', isCorrect: false },
                { answerText: 'Shakiness and sweating', isCorrect: true },
                { answerText: 'Dry mouth', isCorrect: false },
                { answerText: 'Frequent urination', isCorrect: false },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    const handlePreviousQuestion = () => {
        const prevQuestion = currentQuestion - 1;
        if (prevQuestion >= 0) {
            setCurrentQuestion(prevQuestion);
        }
    };

    return (
        <div className='app'>
            {showScore ? (
                <div className='score-section'>
                    You scored {score} out of {questions.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count'>
                            <span>Question {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption, index) => (
                            <button key={index} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
                                {answerOption.answerText}
                            </button>
                        ))}
                    </div>
                    <div className='navigation-buttons'>
                        <button onClick={handlePreviousQuestion} disabled={currentQuestion === 0}>
                            Previous
                        </button>
                        <button onClick={handleNextQuestion} disabled={currentQuestion === questions.length - 1}>
                            Next
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}