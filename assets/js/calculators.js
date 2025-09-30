/* ===================================
   INTERACTIVE CALCULATORS
   Responsibility: Modal management and calculator logic
   =================================== */

(function() {
    'use strict';

    const modal = document.getElementById('calculator-modal');
    const container = document.getElementById('calculator-container');

    // Show calculator
    window.showCalculator = function(type) {
        switch(type) {
            case 'compound':
                renderCompoundCalculator();
                break;
            case 'committee':
                renderCommitteeCalculator();
                break;
            case 'number':
                renderNumberGenerator();
                break;
        }
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    // Close calculator
    window.closeCalculator = function() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    // Close on outside click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeCalculator();
        }
    });

    // === COMPOUND ADVANTAGE CALCULATOR ===
    function renderCompoundCalculator() {
        container.innerHTML = `
            <div class="calculator">
                <h3>Compound Advantage Calculator</h3>
                <p>See how small velocity differences compound into unbridgeable gaps.</p>

                <div class="calculator-input">
                    <label for="your-improvement">Your Annual Velocity Improvement: <span id="improvement-display">12%</span></label>
                    <input type="range" id="your-improvement" min="0" max="50" value="12" step="1">
                </div>

                <div class="calculator-input">
                    <label for="timeframe">Timeframe (Years):</label>
                    <select id="timeframe">
                        <option value="1">1 Year</option>
                        <option value="3" selected>3 Years</option>
                        <option value="5">5 Years</option>
                        <option value="10">10 Years</option>
                    </select>
                </div>

                <div class="calculator-results">
                    <h4>Results</h4>
                    <div class="result-item">
                        <span class="result-label">Your Organization (with <span id="your-rate">12%</span> improvement):</span>
                        <span class="result-value" id="your-result">1.0x</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Competitor (0% improvement):</span>
                        <span class="result-value">1.0x</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Your Advantage:</span>
                        <span class="result-value highlight" id="gap-result">0%</span>
                    </div>
                </div>

                <p style="margin-top: 1rem; color: var(--gray-600); font-size: 0.9375rem;">
                    <strong>Insight:</strong> Small improvements compound exponentially.
                    A 12% annual improvement means you're <strong>40% faster</strong> after 3 years.
                </p>
            </div>
        `;

        const improvementSlider = document.getElementById('your-improvement');
        const timeframeSelect = document.getElementById('timeframe');

        function calculate() {
            const improvement = parseInt(improvementSlider.value);
            const years = parseInt(timeframeSelect.value);

            const yourMultiplier = Math.pow(1 + (improvement / 100), years);
            const competitorMultiplier = 1.0;
            const gap = ((yourMultiplier - competitorMultiplier) / competitorMultiplier * 100).toFixed(0);

            document.getElementById('improvement-display').textContent = improvement + '%';
            document.getElementById('your-rate').textContent = improvement + '%';
            document.getElementById('your-result').textContent = yourMultiplier.toFixed(2) + 'x';
            document.getElementById('gap-result').textContent = gap + '% ahead';
        }

        improvementSlider.addEventListener('input', calculate);
        timeframeSelect.addEventListener('change', calculate);

        calculate();
    }

    // === COMMITTEE COST CALCULATOR ===
    function renderCommitteeCalculator() {
        container.innerHTML = `
            <div class="calculator">
                <h3>Committee Cost Calculator</h3>
                <p>Quantify the true cost of meeting overhead.</p>

                <div class="calculator-input">
                    <label for="meeting-duration">Meeting Duration (hours):</label>
                    <input type="number" id="meeting-duration" value="2" min="0.25" step="0.25">
                </div>

                <div class="calculator-input">
                    <label for="num-people">Number of People:</label>
                    <input type="number" id="num-people" value="8" min="1">
                </div>

                <div class="calculator-input">
                    <label for="avg-rate">Average Hourly Rate ($):</label>
                    <input type="number" id="avg-rate" value="75" min="10" step="5">
                </div>

                <div class="calculator-input">
                    <label for="frequency">Frequency:</label>
                    <select id="frequency">
                        <option value="1">One-time</option>
                        <option value="52" selected>Weekly</option>
                        <option value="24">Bi-weekly</option>
                        <option value="12">Monthly</option>
                        <option value="4">Quarterly</option>
                    </select>
                </div>

                <div class="calculator-results">
                    <h4>Annual Cost</h4>
                    <div class="result-item">
                        <span class="result-label">Direct Meeting Time:</span>
                        <span class="result-value" id="direct-cost">$0</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Prep + Follow-up (estimated 50%):</span>
                        <span class="result-value" id="overhead-cost">$0</span>
                    </div>
                    <div class="result-item">
                        <span class="result-label">Total Annual Cost:</span>
                        <span class="result-value highlight" id="total-cost">$0</span>
                    </div>
                </div>

                <p style="margin-top: 1rem; color: var(--gray-600); font-size: 0.9375rem;">
                    <strong>Question:</strong> What could you deliver with this budget instead?
                </p>
            </div>
        `;

        const inputs = {
            duration: document.getElementById('meeting-duration'),
            people: document.getElementById('num-people'),
            rate: document.getElementById('avg-rate'),
            frequency: document.getElementById('frequency')
        };

        function calculate() {
            const duration = parseFloat(inputs.duration.value);
            const people = parseInt(inputs.people.value);
            const rate = parseInt(inputs.rate.value);
            const frequency = parseInt(inputs.frequency.value);

            const directCost = duration * people * rate * frequency;
            const overheadCost = directCost * 0.5; // 50% for prep and follow-up
            const totalCost = directCost + overheadCost;

            document.getElementById('direct-cost').textContent = '$' + directCost.toLocaleString();
            document.getElementById('overhead-cost').textContent = '$' + overheadCost.toLocaleString();
            document.getElementById('total-cost').textContent = '$' + totalCost.toLocaleString();
        }

        Object.values(inputs).forEach(input => {
            input.addEventListener('input', calculate);
        });

        calculate();
    }

    // === THE NUMBER GENERATOR ===
    function renderNumberGenerator() {
        const state = {
            step: 1,
            answers: {},
            totalSteps: 5
        };

        function render() {
            if (state.step <= state.totalSteps) {
                renderQuestion();
            } else {
                renderResults();
            }
        }

        function renderQuestion() {
            const questions = {
                1: {
                    title: 'Question 1: What is your primary value delivery?',
                    subtitle: 'What is the main outcome your role exists to create?',
                    type: 'textarea',
                    placeholder: 'Example: "Ensure clinical trial data is accurate and ready for analysis" or "Get clinical sites activated and enrolling patients"',
                    key: 'value_delivery'
                },
                2: {
                    title: 'Question 2: What is your end-to-end process?',
                    subtitle: 'Describe the flow from when work enters your domain to when value is delivered.',
                    type: 'textarea',
                    placeholder: 'Example: "Protocol finalized → Site selection → Contracts → IRB approval → Site activation → First patient enrolled"',
                    key: 'process_flow'
                },
                3: {
                    title: 'Question 3: What creates delays?',
                    subtitle: 'What typically slows down your process? Be specific about bottlenecks.',
                    type: 'textarea',
                    placeholder: 'Example: "Waiting for legal review of contracts (avg 3 weeks), IRB turnaround (avg 6 weeks), vendor setup delays"',
                    key: 'bottlenecks'
                },
                4: {
                    title: 'Question 4: What measurement captures flow speed?',
                    subtitle: 'How would you measure the time from start to finish of your core process?',
                    type: 'radio',
                    options: [
                        { value: 'time', label: 'Time from start to completion (days/hours/weeks)' },
                        { value: 'throughput', label: 'Items completed per time period (per week/month)' },
                        { value: 'cycle', label: 'Average cycle time per item (hours/days per unit)' },
                        { value: 'lag', label: 'Time lag from trigger to response (hours/days)' }
                    ],
                    key: 'measurement_type'
                },
                5: {
                    title: 'Question 5: What can you directly influence?',
                    subtitle: 'Which parts of the process can you meaningfully improve through your daily decisions?',
                    type: 'textarea',
                    placeholder: 'Example: "I can improve site selection criteria, streamline our internal approval process, and automate status communications. I cannot control IRB timelines or legal department workload."',
                    key: 'control_factors'
                }
            };

            const q = questions[state.step];
            let inputHTML = '';

            if (q.type === 'textarea') {
                inputHTML = `
                    <textarea
                        id="answer-input"
                        rows="4"
                        placeholder="${q.placeholder}"
                        style="width: 100%; padding: 0.75rem; border: 1px solid var(--gray-300); border-radius: 8px; font-family: inherit; font-size: 0.9375rem; resize: vertical;"
                    >${state.answers[q.key] || ''}</textarea>
                `;
            } else if (q.type === 'radio') {
                inputHTML = '<div style="display: flex; flex-direction: column; gap: 0.75rem;">';
                q.options.forEach(opt => {
                    const checked = state.answers[q.key] === opt.value ? 'checked' : '';
                    inputHTML += `
                        <label style="display: flex; align-items: flex-start; cursor: pointer; padding: 0.75rem; border: 1px solid var(--gray-300); border-radius: 8px; transition: all 0.2s;">
                            <input type="radio" name="answer" value="${opt.value}" ${checked} style="margin-top: 0.25rem; margin-right: 0.75rem;">
                            <span style="flex: 1;">${opt.label}</span>
                        </label>
                    `;
                });
                inputHTML += '</div>';
            }

            container.innerHTML = `
                <div class="calculator">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1.5rem;">
                        <h3 style="margin: 0;">The Number Generator</h3>
                        <span style="color: var(--gray-600); font-size: 0.875rem;">Step ${state.step} of ${state.totalSteps}</span>
                    </div>

                    <div style="height: 4px; background: var(--gray-200); border-radius: 2px; margin-bottom: 2rem;">
                        <div style="height: 100%; background: var(--blue); border-radius: 2px; width: ${(state.step / state.totalSteps) * 100}%; transition: width 0.3s;"></div>
                    </div>

                    <div style="margin-bottom: 2rem;">
                        <h4 style="color: var(--gray-900); margin-bottom: 0.5rem;">${q.title}</h4>
                        <p style="color: var(--gray-600); font-size: 0.9375rem; margin-bottom: 1.5rem;">${q.subtitle}</p>
                        ${inputHTML}
                    </div>

                    <div style="display: flex; justify-content: space-between; gap: 1rem; margin-top: 2rem;">
                        ${state.step > 1 ?
                            '<button id="back-btn" class="btn-outline" style="flex: 1;">← Back</button>' :
                            '<div></div>'
                        }
                        <button id="next-btn" class="cta-primary" style="flex: 2;">${state.step === state.totalSteps ? 'Generate My Number →' : 'Next →'}</button>
                    </div>
                </div>
            `;

            // Event listeners
            const nextBtn = document.getElementById('next-btn');
            const backBtn = document.getElementById('back-btn');

            nextBtn.addEventListener('click', () => {
                let answer = '';

                if (q.type === 'textarea') {
                    answer = document.getElementById('answer-input').value.trim();
                } else if (q.type === 'radio') {
                    const selected = document.querySelector('input[name="answer"]:checked');
                    answer = selected ? selected.value : '';
                }

                if (!answer) {
                    alert('Please provide an answer before continuing.');
                    return;
                }

                state.answers[q.key] = answer;
                state.step++;
                render();
            });

            if (backBtn) {
                backBtn.addEventListener('click', () => {
                    state.step--;
                    render();
                });
            }
        }

        function renderResults() {
            // Analyze answers and generate personalized metric
            const analysis = analyzeAnswers(state.answers);

            container.innerHTML = `
                <div class="calculator">
                    <h3>Your Personalized Number</h3>
                    <p class="calc-intro">Based on your responses, here's your recommended velocity metric:</p>

                    <div class="calculator-results">
                        <div class="result-highlight">
                            <h4>Your Number:</h4>
                            <p class="metric-value">${analysis.metric}</p>
                        </div>

                        <div class="result-context">
                            <div class="context-item">
                                <span class="icon icon-user small blue"></span>
                                <div class="context-content">
                                    <p class="context-label">Your Value Delivery:</p>
                                    <p class="context-value">"${state.answers.value_delivery}"</p>
                                </div>
                            </div>
                            <div class="context-item">
                                <span class="icon icon-activity small blue"></span>
                                <div class="context-content">
                                    <p class="context-label">Your Process Flow:</p>
                                    <p class="context-value">"${state.answers.process_flow}"</p>
                                </div>
                            </div>
                            <div class="context-item">
                                <span class="icon icon-alert small red"></span>
                                <div class="context-content">
                                    <p class="context-label">Your Bottlenecks:</p>
                                    <p class="context-value">"${state.answers.bottlenecks}"</p>
                                </div>
                            </div>
                        </div>

                        <div class="result-section">
                            <div class="section-header">
                                <span class="icon icon-trend small blue"></span>
                                <p class="section-title">How to Measure:</p>
                            </div>
                            <p class="section-content">${analysis.measurement}</p>
                            ${analysis.examples ? `
                                <div class="examples-section">
                                    <p class="examples-header">Real-world examples:</p>
                                    ${analysis.examples.map(ex => `
                                        <div class="example-item">
                                            <p class="example-role">${ex.role}</p>
                                            <p class="example-metric"><strong>Metric:</strong> ${ex.metric}</p>
                                            <p class="example-result"><strong>Result:</strong> ${ex.result}</p>
                                        </div>
                                    `).join('')}
                                </div>
                            ` : ''}
                        </div>

                        <div class="result-section">
                            <div class="section-header">
                                <span class="icon icon-lightbulb small amber"></span>
                                <p class="section-title">Why This Metric:</p>
                            </div>
                            <p class="section-content">${analysis.why}</p>
                        </div>

                        <div class="result-section">
                            <div class="section-header">
                                <span class="icon icon-checklist small green"></span>
                                <p class="section-title">Validation Check:</p>
                            </div>
                            <ul class="validation-list">
                                <li><strong>Velocity-focused:</strong> ${analysis.validation.velocity ? '✓' : '⚠️'} ${analysis.validation.velocityNote}</li>
                                <li><strong>Direct control:</strong> ${analysis.validation.control ? '✓' : '⚠️'} ${analysis.validation.controlNote}</li>
                                <li><strong>Measurable:</strong> ${analysis.validation.measurable ? '✓' : '⚠️'} ${analysis.validation.measurableNote}</li>
                                <li><strong>Hard to game:</strong> ${analysis.validation.gaming ? '✓' : '⚠️'} ${analysis.validation.gamingNote}</li>
                            </ul>
                        </div>

                        <div class="result-section getting-started">
                            <div class="section-header">
                                <span class="icon icon-target small amber"></span>
                                <p class="section-title">Getting Started:</p>
                            </div>
                            <p class="section-content">${analysis.gettingStarted}</p>
                        </div>

                        ${analysis.warnings.length > 0 ? `
                        <div class="result-section warnings">
                            <div class="section-header">
                                <span class="icon icon-alert small red"></span>
                                <p class="section-title">Watch Out For:</p>
                            </div>
                            <ul class="warnings-list">
                                ${analysis.warnings.map(w => `<li>${w}</li>`).join('')}
                            </ul>
                        </div>
                        ` : ''}
                    </div>

                    <div class="result-actions">
                        <button id="restart-btn" class="btn-outline">← Start Over</button>
                        <a href="assets/downloads/the-number.xlsx" download class="cta-primary">Download Worksheet →</a>
                    </div>
                </div>
            `;

            document.getElementById('restart-btn').addEventListener('click', () => {
                state.step = 1;
                state.answers = {};
                render();
            });
        }

        function analyzeAnswers(answers) {
            // Use ONLY the reliable multiple choice answer (Question 4)
            const measurementType = answers.measurement_type;

            let metric = '';
            let measurement = '';
            let why = '';
            let gettingStarted = '';
            let warnings = [];
            let examples = [];
            let validation = {
                velocity: true,
                velocityNote: 'Measures speed of value delivery',
                control: true,
                controlNote: 'Within your direct influence',
                measurable: true,
                measurableNote: 'Can be tracked continuously',
                gaming: true,
                gamingNote: 'Only improves with real improvement'
            };

            // Generate metric and examples based ONLY on measurement type
            if (measurementType === 'time') {
                metric = 'Time from start to completion (days/hours/weeks)';
                measurement = 'Track calendar time from when work enters your process to when it exits complete. Measure in the unit that makes sense for your timeline (hours for fast processes, days for standard workflows, weeks for complex initiatives). This is your end-to-end cycle time.';
                why = 'Time-based metrics reveal where delays hide in your process. They capture both working time and waiting time, making organizational friction visible.';
                gettingStarted = 'Track your next 10 items manually. Note start time and completion time. Calculate average cycle time and identify the longest cases to understand your variation.';
                examples = [
                    {
                        role: 'Clinical Data Manager - Phase III Immunotherapy Trial (Melanoma)',
                        metric: 'Hours from query generation to site response',
                        result: 'Reduced from 96 hours to 24 hours by implementing EDC query auto-routing to CRAs and creating pre-written response templates for 12 most common query types (dosing discrepancies, AE coding, lab value clarifications)'
                    },
                    {
                        role: 'Data Management Lead - Phase III Cardiovascular Outcomes Trial',
                        metric: 'Days from last patient last visit (LPLV) to database lock',
                        result: 'Dropped from 89 days to 14 days by implementing: automated data cleaning rules in EDC, real-time query resolution during study conduct (not post-LPLV), and parallel medical coding/SAE reconciliation processes'
                    },
                    {
                        role: 'Senior Director, Regulatory Affairs - Orphan Drug NDA',
                        metric: 'Days from CMC/clinical content lock to eCTD submission to FDA',
                        result: 'Compressed from 87 days to 19 days by: creating NDA submission template with pre-approved module 1 content, implementing continuous eCTD build (not end-of-process compilation), using regulatory publishing platform integrated with document management system'
                    }
                ];
            } else if (measurementType === 'throughput') {
                metric = 'Items completed per time period (per week/month)';
                measurement = 'Track how many complete work items you deliver per week or month. Focus on completed items that provide value, not items started or in progress. This measures your system\'s capacity and reveals bottlenecks limiting throughput.';
                why = 'Throughput metrics show whether your system is getting faster or slower over time. Increasing throughput without increasing headcount means you\'re removing constraints and improving flow.';
                gettingStarted = 'Count completed items from last 4 weeks. Calculate items per week. Track this weekly to identify trends and capacity limits.';
                examples = [
                    {
                        role: 'Clinical Operations Director - Multi-center Autoimmune Disease Trial',
                        metric: 'Sites activated per month',
                        result: 'Increased from 2.3 sites/month to 8.1 sites/month by implementing: central IRB for 82% of US sites, master clinical trial agreements with academic medical centers, and parallel contract/budget/regulatory document processing instead of sequential review'
                    },
                    {
                        role: 'Quality Assurance Manager - Document Review Operations',
                        metric: 'Documents reviewed and approved per week',
                        result: 'Improved from 12 documents/week to 34 documents/week by: implementing risk-based review (critical documents get priority), creating document review checklists specific to document type, and tracking reviewer workload enabling dynamic work redistribution'
                    },
                    {
                        role: 'Biostatistics Director - Phase III Program',
                        metric: 'Analysis outputs delivered per sprint (2 weeks)',
                        result: 'Increased from 6 outputs per sprint to 18 outputs per sprint by: creating reusable SAS/R macros for standard analyses, implementing automated QC programs reducing manual checking by 80%, and using parallel processing for independent analyses'
                    }
                ];
            } else if (measurementType === 'cycle') {
                metric = 'Average cycle time per item (hours/days per unit)';
                measurement = 'Track the average time it takes to complete one unit of work from start to finish. Calculate this as total time divided by number of items. This reveals your process efficiency and helps identify which items take longest.';
                why = 'Average cycle time shows your typical performance and variation. High variation means your process is unpredictable. Reducing both average and variation makes delivery reliable.';
                gettingStarted = 'Track the last 20 items you completed. Calculate average cycle time and standard deviation. Items taking 2x the average are candidates for root cause analysis.';
                examples = [
                    {
                        role: 'Medical Writing Manager - Phase III Program (5 trials)',
                        metric: 'Average days from protocol synopsis to final approved protocol',
                        result: 'Cut from 126 days average to 32 days average by: implementing protocol authoring workshops with investigators before drafting, using track changes for all reviews simultaneously (eliminated sequential review adding 14 days per reviewer), and creating protocol amendment assessment tool'
                    },
                    {
                        role: 'Clinical Monitoring Manager - Site Monitoring Visit Cycle',
                        metric: 'Average days from monitoring visit to finalized trip report in eTMF',
                        result: 'Reduced from 28 days average to 7 days average by: implementing tablet-based monitoring with real-time data entry during visits, using automated trip report generation from monitoring findings database, and establishing 72-hour report finalization SLA'
                    },
                    {
                        role: 'Senior Manager, Clinical Supply - IMP Distribution',
                        metric: 'Average days from depot release to site receipt (global distribution)',
                        result: 'Decreased from 34 days average to 9 days average by: implementing pre-shipment customs clearance using IOR agreements, building site-specific import requirement database eliminating case-by-case research, and using temperature-controlled direct shipping'
                    }
                ];
            } else if (measurementType === 'lag') {
                metric = 'Time lag from trigger to response (hours/days)';
                measurement = 'Track how quickly you respond when work arrives or a trigger occurs. Measure from the moment a request/event happens to when you begin or complete your response. This reveals how quickly your system reacts to demand.';
                why = 'Response time metrics show organizational agility. Long lag times mean work sits in queues waiting. Reducing lag time eliminates wait time and speeds up everything downstream.';
                gettingStarted = 'Log the next 15 requests/triggers. Note arrival time and response time. Calculate average lag. Identify which requests have longest lag to find your constraints.';
                examples = [
                    {
                        role: 'Chief Medical Officer - Oncology Portfolio',
                        metric: 'Hours from safety signal identification to dosing decision',
                        result: 'Reduced from 96 hours to 8 hours by: implementing automated safety signal detection algorithms, creating predefined dose modification criteria approved by safety review committee, and establishing 4-hour response SLA for Grade 3/4 AE decisions with medical monitor authority'
                    },
                    {
                        role: 'VP Clinical Operations - Protocol Deviation Decisions',
                        metric: 'Hours from protocol deviation report to resolution decision',
                        result: 'Improved from 72 hours to 6 hours by: creating protocol deviation decision tree with 17 common scenarios and pre-approved resolutions, delegating deviation authority to clinical trial managers (previously all escalated to VP), and implementing daily deviation review window'
                    },
                    {
                        role: 'Director, Medical Information - Safety Report Distribution',
                        metric: 'Hours from SAE report receipt to investigator notification',
                        result: 'Cut from 96 hours to 12 hours by: implementing automated SAE intake from EDC (eliminated manual data entry), creating investigator notification templates for 8 common SAE types, and establishing safety distribution authority with medical monitors'
                    }
                ];
            } else {
                // Fallback (should not hit this)
                metric = 'Process velocity metric';
                measurement = 'Based on your answers, track the speed at which work flows through your process.';
                why = 'Velocity metrics reveal organizational friction and improvement opportunities.';
                gettingStarted = 'Start tracking your process times this week.';
                examples = [];
            }

            return {
                metric,
                measurement,
                why,
                gettingStarted,
                warnings,
                examples,
                validation
            };
        }

        render();
    }
})();
