/* ===================================
   ASSESSMENT QUESTIONS DATA
   Responsibility: Question content and scoring logic
   =================================== */

const assessmentQuestions = [
    // DECISION VELOCITY (7 questions × 5 points = 35 points × 0.30 = 10.5)
    {
        id: 'decision_speed',
        category: 'decision',
        text: 'How long do decisions requiring 3+ people typically take in your organization?',
        helper: 'Think about operational decisions, not strategic planning',
        options: [
            { text: 'Less than 24 hours', score: 5 },
            { text: '2-3 days', score: 4 },
            { text: '1 week', score: 3 },
            { text: '2-3 weeks', score: 2 },
            { text: 'More than 3 weeks', score: 1 }
        ]
    },
    {
        id: 'approval_process',
        category: 'decision',
        text: 'How many approval levels exist for routine operational decisions?',
        helper: 'For example: budget approvals, vendor selection, protocol changes',
        options: [
            { text: 'None - automated or pre-approved', score: 5 },
            { text: '1-2 levels', score: 4 },
            { text: '3-4 levels', score: 3 },
            { text: '5-6 levels', score: 2 },
            { text: '7+ levels or unclear', score: 1 }
        ]
    },
    {
        id: 'decision_authority',
        category: 'decision',
        text: 'Can the person closest to the problem make decisions without escalation?',
        helper: 'Think about your team members and their autonomy',
        options: [
            { text: 'Yes, with clear criteria and authority', score: 5 },
            { text: 'Usually, for smaller decisions', score: 4 },
            { text: 'Sometimes, depends on the situation', score: 3 },
            { text: 'Rarely, most need approval', score: 2 },
            { text: 'No, everything escalates', score: 1 }
        ]
    },
    {
        id: 'criteria_clarity',
        category: 'decision',
        text: 'Are decision criteria pre-defined and transparent?',
        helper: 'Can people know in advance what approvals they need?',
        options: [
            { text: 'Yes, documented and clear', score: 5 },
            { text: 'Mostly, with some exceptions', score: 4 },
            { text: 'Somewhat, but often unclear', score: 3 },
            { text: 'Not really, case-by-case', score: 2 },
            { text: 'No, opaque process', score: 1 }
        ]
    },
    {
        id: 'decision_tracking',
        category: 'decision',
        text: 'Does your organization track decision cycle times?',
        helper: 'Do you measure how long decisions take from start to finish?',
        options: [
            { text: 'Yes, tracked and optimized regularly', score: 5 },
            { text: 'Yes, tracked occasionally', score: 4 },
            { text: 'Sometimes informally', score: 3 },
            { text: 'Rarely', score: 2 },
            { text: 'No, never measured', score: 1 }
        ]
    },
    {
        id: 'escalation_rate',
        category: 'decision',
        text: 'What percentage of decisions require upward escalation?',
        helper: 'Estimate how often decisions need senior leadership involvement',
        options: [
            { text: 'Less than 10%', score: 5 },
            { text: '10-25%', score: 4 },
            { text: '25-50%', score: 3 },
            { text: '50-75%', score: 2 },
            { text: 'More than 75%', score: 1 }
        ]
    },
    {
        id: 'decision_reversibility',
        category: 'decision',
        text: 'How easy is it to reverse a bad decision?',
        helper: 'Can you quickly undo or adjust decisions that don\'t work out?',
        options: [
            { text: 'Very easy, happens quickly', score: 5 },
            { text: 'Fairly easy, takes some time', score: 4 },
            { text: 'Moderately difficult', score: 3 },
            { text: 'Very difficult, lengthy process', score: 2 },
            { text: 'Nearly impossible', score: 1 }
        ]
    },

    // INFORMATION FLOW (6 questions × 5 points = 30 points × 0.25 = 7.5)
    {
        id: 'data_access',
        category: 'information',
        text: 'Can team members access operational data in real-time?',
        helper: 'Without asking someone or waiting for reports',
        options: [
            { text: 'Yes, all relevant data instantly accessible', score: 5 },
            { text: 'Most data, some delays', score: 4 },
            { text: 'Some data, significant delays', score: 3 },
            { text: 'Limited data, must request access', score: 2 },
            { text: 'No, data is heavily siloed', score: 1 }
        ]
    },
    {
        id: 'information_flow',
        category: 'information',
        text: 'Does information flow openly by default?',
        helper: 'Or is it restricted and requires permission to access?',
        options: [
            { text: 'Yes, transparent by default', score: 5 },
            { text: 'Mostly open, some restrictions', score: 4 },
            { text: 'Mixed, depends on department', score: 3 },
            { text: 'Mostly restricted', score: 2 },
            { text: 'Heavily siloed and restricted', score: 1 }
        ]
    },
    {
        id: 'bottleneck_people',
        category: 'information',
        text: 'Are there people who are information bottlenecks?',
        helper: 'People you have to go through to get information or answers',
        options: [
            { text: 'No, information flows freely', score: 5 },
            { text: 'A few, but not critical', score: 4 },
            { text: 'Several people are gatekeepers', score: 3 },
            { text: 'Many bottlenecks', score: 2 },
            { text: 'Yes, severe bottlenecks', score: 1 }
        ]
    },
    {
        id: 'system_integration',
        category: 'information',
        text: 'Do your systems share data automatically?',
        helper: 'Or do people manually transfer data between systems?',
        options: [
            { text: 'Yes, fully integrated', score: 5 },
            { text: 'Mostly integrated', score: 4 },
            { text: 'Some integration, some manual', score: 3 },
            { text: 'Mostly manual transfers', score: 2 },
            { text: 'No integration, all manual', score: 1 }
        ]
    },
    {
        id: 'metrics_visibility',
        category: 'information',
        text: 'Can everyone see metrics relevant to their role?',
        helper: 'Real-time dashboards, not monthly reports',
        options: [
            { text: 'Yes, clear dashboards for everyone', score: 5 },
            { text: 'Most people have access', score: 4 },
            { text: 'Some visibility', score: 3 },
            { text: 'Limited to managers', score: 2 },
            { text: 'No, data is hidden', score: 1 }
        ]
    },
    {
        id: 'context_richness',
        category: 'information',
        text: 'Does information include context needed for immediate action?',
        helper: 'Or do people need to hunt for background and next steps?',
        options: [
            { text: 'Yes, rich context always included', score: 5 },
            { text: 'Usually has context', score: 4 },
            { text: 'Sometimes', score: 3 },
            { text: 'Rarely, must hunt for context', score: 2 },
            { text: 'No, data only without context', score: 1 }
        ]
    },

    // PROBLEM RESOLUTION (6 questions × 5 points = 30 points × 0.25 = 7.5)
    {
        id: 'problem_detection',
        category: 'problem',
        text: 'How do problems typically surface in your organization?',
        helper: 'Through data/systems or through meetings and escalations?',
        options: [
            { text: 'Automatically through data and alerts', score: 5 },
            { text: 'Mix of systems and people', score: 4 },
            { text: 'Mostly through people noticing', score: 3 },
            { text: 'Only when escalated in meetings', score: 2 },
            { text: 'When they become crises', score: 1 }
        ]
    },
    {
        id: 'root_cause',
        category: 'problem',
        text: 'When problems occur, do you solve root causes or symptoms?',
        helper: 'Be honest - what actually happens most of the time?',
        options: [
            { text: 'Always root cause analysis and fix', score: 5 },
            { text: 'Usually root cause', score: 4 },
            { text: 'Mix of both', score: 3 },
            { text: 'Usually just symptoms', score: 2 },
            { text: 'Only firefighting symptoms', score: 1 }
        ]
    },
    {
        id: 'problem_recurrence',
        category: 'problem',
        text: 'Do the same problems appear repeatedly?',
        helper: 'Think about your last few quarterly reviews',
        options: [
            { text: 'No, solved once permanently', score: 5 },
            { text: 'Rarely recur', score: 4 },
            { text: 'Some recurrence', score: 3 },
            { text: 'Many problems recur', score: 2 },
            { text: 'Same problems every quarter', score: 1 }
        ]
    },
    {
        id: 'solution_systematization',
        category: 'problem',
        text: 'When you solve problems, are solutions systematized?',
        helper: 'Built into processes/systems or just documented?',
        options: [
            { text: 'Yes, encoded in systems', score: 5 },
            { text: 'Usually systematized', score: 4 },
            { text: 'Sometimes documented', score: 3 },
            { text: 'Rarely documented', score: 2 },
            { text: 'No, tribal knowledge only', score: 1 }
        ]
    },
    {
        id: 'resolution_time',
        category: 'problem',
        text: 'Do you measure time-to-permanent-resolution for problems?',
        helper: 'Not just time to workaround, but permanent fix',
        options: [
            { text: 'Yes, tracked and optimized', score: 5 },
            { text: 'Sometimes tracked', score: 4 },
            { text: 'Informally noted', score: 3 },
            { text: 'Rarely measured', score: 2 },
            { text: 'No, never measured', score: 1 }
        ]
    },
    {
        id: 'prevention',
        category: 'problem',
        text: 'Do your systems prevent problems or just detect them?',
        helper: 'Prevention > Detection > Reaction',
        options: [
            { text: 'Strong prevention systems', score: 5 },
            { text: 'Some prevention, mostly detection', score: 4 },
            { text: 'Mainly detection', score: 3 },
            { text: 'Mostly reactive', score: 2 },
            { text: 'Purely reactive firefighting', score: 1 }
        ]
    },

    // ORGANIZATIONAL EFFICIENCY (5 questions × 5 points = 25 points × 0.20 = 5.0)
    {
        id: 'parking_lot',
        category: 'efficiency',
        text: 'What time did you leave the office yesterday?',
        helper: 'Or when do most people typically leave?',
        options: [
            { text: 'Before 5:30 PM', score: 5 },
            { text: '5:30 - 6:30 PM', score: 4 },
            { text: '6:30 - 7:30 PM', score: 3 },
            { text: '7:30 - 9:00 PM', score: 2 },
            { text: 'After 9:00 PM', score: 1 }
        ]
    },
    {
        id: 'meeting_time',
        category: 'efficiency',
        text: 'What percentage of your time is spent in meetings?',
        helper: 'Include preparation and follow-up time',
        options: [
            { text: 'Less than 20%', score: 5 },
            { text: '20-35%', score: 4 },
            { text: '35-50%', score: 3 },
            { text: '50-70%', score: 2 },
            { text: 'More than 70%', score: 1 }
        ]
    },
    {
        id: 'work_flow',
        category: 'efficiency',
        text: 'Does work flow continuously or pool behind bottlenecks?',
        helper: 'Think about how work moves through your organization',
        options: [
            { text: 'Flows smoothly and continuously', score: 5 },
            { text: 'Mostly flows, minor pooling', score: 4 },
            { text: 'Some pooling at bottlenecks', score: 3 },
            { text: 'Significant pooling', score: 2 },
            { text: 'Severe bottlenecks everywhere', score: 1 }
        ]
    },
    {
        id: 'time_tracking',
        category: 'efficiency',
        text: 'Can you map where every hour of work time goes?',
        helper: 'Do you know what activities consume the most time?',
        options: [
            { text: 'Yes, detailed time tracking', score: 5 },
            { text: 'Good general understanding', score: 4 },
            { text: 'Some idea, not detailed', score: 3 },
            { text: 'Vague understanding', score: 2 },
            { text: 'No idea where time goes', score: 1 }
        ]
    },
    {
        id: 'value_vs_coordination',
        category: 'efficiency',
        text: 'What takes more time: value work or coordination work?',
        helper: 'Value = your actual job. Coordination = meetings, emails, status updates',
        options: [
            { text: 'Mostly value work (>70%)', score: 5 },
            { text: 'More value than coordination (60%)', score: 4 },
            { text: 'About equal (50/50)', score: 3 },
            { text: 'More coordination (60%)', score: 2 },
            { text: 'Mostly coordination (>70%)', score: 1 }
        ]
    }
];