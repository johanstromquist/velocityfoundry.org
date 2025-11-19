/* ===================================
   ASSESSMENT LOGIC
   Responsibility: Quiz flow, scoring, and results display
   =================================== */

(function() {
    'use strict';

    // State
    let currentQuestion = 0;
    let answers = {};

    // Constants
    const WEIGHTS = {
        decision: 0.30,
        information: 0.25,
        problem: 0.25,
        efficiency: 0.20
    };

    const MAX_SCORES = {
        decision: 10.5,
        information: 7.5,
        problem: 7.5,
        efficiency: 5.0
    };

    // Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const questionScreen = document.getElementById('question-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startBtn = document.getElementById('start-btn');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const retakeBtn = document.getElementById('retake-btn');
    const savePdfBtn = document.getElementById('save-pdf-btn');

    // Initialize
    function init() {
        // Check for saved progress
        const savedAnswers = localStorage.getItem('velocity_assessment_answers');
        const savedProgress = localStorage.getItem('velocity_assessment_progress');
        const savedResults = localStorage.getItem('velocity_assessment_results');

        // If there are complete results, show option to view them
        if (savedResults) {
            const results = JSON.parse(savedResults);
            answers = JSON.parse(savedAnswers);

            // Add resume button to welcome screen
            const resumeDiv = document.createElement('div');
            resumeDiv.style.marginTop = '1rem';
            resumeDiv.innerHTML = `
                <p style="color: var(--gray-600); margin-bottom: 0.5rem;">You completed this assessment previously.</p>
                <button class="btn-outline" id="view-results-btn">View Previous Results →</button>
            `;
            startBtn.parentElement.appendChild(resumeDiv);

            document.getElementById('view-results-btn').addEventListener('click', () => {
                showResults();
            });
        } else if (savedProgress && savedAnswers) {
            // If there's incomplete progress, offer to resume
            answers = JSON.parse(savedAnswers);
            currentQuestion = parseInt(savedProgress);

            const resumeDiv = document.createElement('div');
            resumeDiv.style.marginTop = '1rem';
            resumeDiv.innerHTML = `
                <p style="color: var(--gray-600); margin-bottom: 0.5rem;">You have an assessment in progress (Question ${currentQuestion + 1} of ${assessmentQuestions.length}).</p>
                <button class="btn-outline" id="resume-btn" style="margin-right: 0.5rem;">Resume Assessment →</button>
            `;
            startBtn.parentElement.appendChild(resumeDiv);

            document.getElementById('resume-btn').addEventListener('click', () => {
                showScreen(questionScreen);
                renderQuestion();
            });
        }

        // Event listeners
        startBtn.addEventListener('click', startAssessment);
        prevBtn.addEventListener('click', previousQuestion);
        nextBtn.addEventListener('click', nextQuestion);
        retakeBtn.addEventListener('click', retakeAssessment);
        savePdfBtn.addEventListener('click', savePDF);
    }

    // Start assessment
    function startAssessment() {
        currentQuestion = 0;
        answers = {};
        localStorage.removeItem('velocity_assessment_answers');
        localStorage.removeItem('velocity_assessment_progress');
        localStorage.removeItem('velocity_assessment_results');
        showScreen(questionScreen);
        renderQuestion();
    }

    // Show specific screen
    function showScreen(screen) {
        welcomeScreen.style.display = 'none';
        questionScreen.style.display = 'none';
        resultsScreen.style.display = 'none';
        screen.style.display = 'block';
        window.scrollTo(0, 0);
    }

    // Render current question
    function renderQuestion() {
        const question = assessmentQuestions[currentQuestion];
        const progress = ((currentQuestion + 1) / assessmentQuestions.length) * 100;

        // Update progress
        document.getElementById('progress-bar').style.width = progress + '%';
        document.getElementById('progress-text').textContent =
            `Question ${currentQuestion + 1} of ${assessmentQuestions.length}`;

        // Update question content
        document.getElementById('question-number').textContent =
            `Question ${currentQuestion + 1}`;
        document.getElementById('question-text').textContent = question.text;
        document.getElementById('question-helper').textContent = question.helper;

        // Render options
        const optionsContainer = document.getElementById('answer-options');
        optionsContainer.innerHTML = '';

        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'answer-option';
            button.textContent = option.text;
            button.dataset.score = option.score;

            // Check if already answered
            if (answers[question.id] === option.score) {
                button.classList.add('selected');
            }

            button.addEventListener('click', () => selectOption(question.id, option.score, button));
            optionsContainer.appendChild(button);
        });

        // Update navigation
        prevBtn.style.visibility = currentQuestion > 0 ? 'visible' : 'hidden';
        nextBtn.textContent = currentQuestion === assessmentQuestions.length - 1 ?
            'See Results →' : 'Next →';
    }

    // Select an option
    function selectOption(questionId, score, button) {
        // Save answer
        answers[questionId] = score;
        localStorage.setItem('velocity_assessment_answers', JSON.stringify(answers));
        localStorage.setItem('velocity_assessment_progress', currentQuestion.toString());

        // Update UI
        const options = button.parentElement.querySelectorAll('.answer-option');
        options.forEach(opt => opt.classList.remove('selected'));
        button.classList.add('selected');

        // Auto-advance after short delay (feels snappy)
        setTimeout(() => {
            if (currentQuestion < assessmentQuestions.length - 1) {
                nextQuestion();
            }
        }, 300);
    }

    // Previous question
    function previousQuestion() {
        if (currentQuestion > 0) {
            currentQuestion--;
            renderQuestion();
        }
    }

    // Next question
    function nextQuestion() {
        // Check if answered
        const question = assessmentQuestions[currentQuestion];
        if (answers[question.id] === undefined) {
            alert('Please select an answer before continuing.');
            return;
        }

        // Move to next or show results
        if (currentQuestion < assessmentQuestions.length - 1) {
            currentQuestion++;
            renderQuestion();
        } else {
            showResults();
        }
    }

    // Calculate scores
    function calculateScores() {
        const categoryScores = {
            decision: 0,
            information: 0,
            problem: 0,
            efficiency: 0
        };

        const categoryCounts = {
            decision: 0,
            information: 0,
            problem: 0,
            efficiency: 0
        };

        // Sum up scores by category
        assessmentQuestions.forEach(question => {
            const score = answers[question.id] || 0;
            categoryScores[question.category] += score;
            categoryCounts[question.category]++;
        });

        // Apply weights
        const weightedScores = {};
        let totalScore = 0;

        for (const category in categoryScores) {
            const rawScore = categoryScores[category];
            const maxPossible = categoryCounts[category] * 5; // 5 points per question
            const weighted = (rawScore / maxPossible) * MAX_SCORES[category];
            weightedScores[category] = weighted;
            totalScore += weighted;
        }

        // Calculate maxTotal dynamically from MAX_SCORES
        const maxTotal = Object.values(MAX_SCORES).reduce((sum, val) => sum + val, 0);

        return {
            total: totalScore,
            categories: weightedScores,
            maxTotal: maxTotal
        };
    }

    // Determine velocity level
    function getVelocityLevel(score) {
        if (score < 8) return { level: 'Paralysis', color: '#FF5252', capacity: '<5%' };
        if (score < 16) return { level: 'Significant Friction', color: '#FFA500', capacity: '5-15%' };
        if (score < 24) return { level: 'Moderate Friction', color: '#FFD700', capacity: '15-30%' };
        if (score < 32) return { level: 'Low Friction', color: '#00E676', capacity: '30-50%' };
        return { level: 'Velocity Achieved', color: '#00D9FF', capacity: '>50%' };
    }

    // Get biggest constraint
    function getBiggestConstraint(scores) {
        const categories = {
            decision: {
                title: 'Decision Velocity',
                description: 'Decisions are pooling behind approval chains and committees. Authority is concentrated at the top instead of flowing to information sources.',
                rock: 'Eliminate approval chains for operational decisions',
                impact: '3-5x faster decision cycles'
            },
            information: {
                title: 'Information Flow',
                description: 'Data is siloed and requires human gatekeepers. Information doesn\'t flow freely to where it\'s needed.',
                rock: 'Build real-time dashboards with open data access',
                impact: '10-20 hours saved per person per week'
            },
            problem: {
                title: 'Problem Resolution',
                description: 'The same problems appear repeatedly because you\'re treating symptoms instead of root causes.',
                rock: 'Implement Solve Forever Protocol for top 3 recurring issues',
                impact: '40-60% reduction in problem recurrence'
            },
            efficiency: {
                title: 'Organizational Efficiency',
                description: 'Time is consumed by coordination and meetings instead of value work. The parking lot test reveals organizational friction.',
                rock: 'Replace committee meetings with 45-minute Alignment Pulse',
                impact: '20-30 hours saved per person per month'
            }
        };

        // Find lowest scoring category (relative to max)
        let lowestCategory = 'decision';
        let lowestPercentage = 1;

        for (const category in scores) {
            const percentage = scores[category] / MAX_SCORES[category];
            if (percentage < lowestPercentage) {
                lowestPercentage = percentage;
                lowestCategory = category;
            }
        }

        return {
            ...categories[lowestCategory],
            category: lowestCategory
        };
    }

    // Show results
    function showResults() {
        const scores = calculateScores();
        const level = getVelocityLevel(scores.total);
        const constraint = getBiggestConstraint(scores.categories);

        // Total score
        document.getElementById('total-score').textContent = scores.total.toFixed(1);
        document.getElementById('score-max').textContent = `/ ${scores.maxTotal.toFixed(1)}`;
        document.getElementById('score-level').textContent =
            `${level.level} (${level.capacity} capacity)`;
        document.getElementById('score-level').style.color = level.color;

        // Industry average (46% of max score)
        const industryAverage = scores.maxTotal * 0.46;
        document.getElementById('industry-score-text').textContent =
            `${industryAverage.toFixed(1)} / ${scores.maxTotal.toFixed(1)}`;
        document.getElementById('industry-bar').style.width = '46%';

        // Score bar
        const percentage = (scores.total / scores.maxTotal) * 100;
        document.getElementById('your-score-bar').style.width = percentage + '%';
        document.getElementById('your-score-text').textContent =
            `${scores.total.toFixed(1)} / ${scores.maxTotal.toFixed(1)}`;

        // Category breakdown
        document.getElementById('decision-score').textContent =
            `${scores.categories.decision.toFixed(1)} / ${MAX_SCORES.decision}`;
        document.getElementById('information-score').textContent =
            `${scores.categories.information.toFixed(1)} / ${MAX_SCORES.information}`;
        document.getElementById('problem-score').textContent =
            `${scores.categories.problem.toFixed(1)} / ${MAX_SCORES.problem}`;
        document.getElementById('efficiency-score').textContent =
            `${scores.categories.efficiency.toFixed(1)} / ${MAX_SCORES.efficiency}`;

        // Constraint
        document.getElementById('constraint-title').textContent = constraint.title;
        document.getElementById('constraint-description').textContent = constraint.description;

        // Rock recommendation
        document.getElementById('rock-title').textContent = 'Your First Rock:';
        document.getElementById('rock-description').textContent = constraint.rock;
        document.getElementById('rock-impact').textContent =
            `Expected Impact: ${constraint.impact}`;

        // Save results to localStorage
        const results = {
            scores,
            level,
            constraint,
            timestamp: new Date().toISOString()
        };
        localStorage.setItem('velocity_assessment_results', JSON.stringify(results));
        localStorage.removeItem('velocity_assessment_progress'); // Clear progress since complete

        // Show results screen
        showScreen(resultsScreen);
    }

    // Retake assessment
    function retakeAssessment() {
        if (confirm('This will clear your current results. Are you sure?')) {
            localStorage.removeItem('velocity_assessment_answers');
            localStorage.removeItem('velocity_assessment_progress');
            localStorage.removeItem('velocity_assessment_results');
            startAssessment();
        }
    }

    // Save as PDF
    function savePDF() {
        window.print();
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();