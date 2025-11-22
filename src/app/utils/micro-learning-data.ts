type CardData = {
  day: string;
  topic: string;
  id: number;
};
type Campaign = {
  day: number;
  theme: string;
  notification: string;
  microLearning: string;
  tryThis: string;
  grounding: string;
  reflectionPrompt: string;
  socialHook: string;
};

export const cards: CardData[] = [
  { day: 'Day 1', topic: 'Introduction to Micro Lessons', id: 1 },
  { day: 'Day 2', topic: 'Understanding Mindfulness', id: 2 },
  { day: 'Day 3', topic: 'Basics of Emotional Intelligence', id: 3 },
  { day: 'Day 4', topic: 'Stress Management Techniques', id: 4 },
  { day: 'Day 5', topic: 'Building Resilience', id: 5 },
  { day: 'Day 6', topic: 'Effective Communication Skills', id: 6 },
  { day: 'Day 7', topic: 'Time Management Strategies', id: 7 },
  { day: 'Day 8', topic: 'Building Healthy Relationships', id: 8 },
  { day: 'Day 9', topic: 'Self-Care Practices', id: 9 },
  { day: 'Day 10', topic: 'Overcoming Negative Thinking', id: 10 },
  { day: 'Day 11', topic: 'Goal Setting and Motivation', id: 11 },
  { day: 'Day 12', topic: 'Conflict Resolution Skills', id: 12 },
  { day: 'Day 13', topic: 'Building Self-Confidence', id: 13 },
  { day: 'Day 14', topic: 'Understanding Anxiety', id: 14 },
  { day: 'Day 15', topic: 'Introduction to Meditation', id: 15 },
  { day: 'Day 16', topic: 'Advanced Mindfulness Techniques', id: 16 },
];
export const modalData: Campaign[] = [
  {
    day: 1,
    theme: 'Seeing the Unseen',
    notification: 'Your 16-day journey starts today. Learn. Heal. Act.',
    microLearning:
      'GBV is often invisible. It hides in silence, fear, and social norms. Most people only recognise violence when it becomes physical, but the roots begin long before that—through attitudes, control, pressure, and emotional harm. Awareness is the first form of prevention.',
    tryThis:
      'Name one moment where you sensed something was wrong but stayed silent. What stopped you?',
    grounding: 'Hand on chest, breathe in slowly, exhale longer than you inhale.',
    reflectionPrompt: 'What kind of GBV feels most hidden in your community?',
    socialHook: '#IAmSafe #MTNForChange',
  },
  {
    day: 2,
    theme: 'Small Harm, Big Impact',

    notification: "GBV is not always visible. Let's learn the signs.",

    microLearning:
      "Subtle harm is often ignored because it does not 'look violent.' Yet emotional manipulation, digital control, guilt-tripping, and isolation can destroy confidence and safety over time. GBV starts with small patterns that grow if left unchallenged.",

    tryThis: 'Identify one behaviour you now realise was harmful, even if it was small.',

    grounding: 'Place feet flat on the floor. Feel support under you.',

    reflectionPrompt: 'Which subtle behaviour is most normalised around you?',

    socialHook: '#LearnHealAct',
  },

  {
    day: 3,

    theme: 'Your Body Knows',

    notification: 'You are not alone. This is a safe space.',

    microLearning:
      "Your body reacts to danger before your mind admits it. Short breath, tight shoulders, sinking stomach, shaky hands — these signals protect you. Emotional safety begins with recognising your body's alarm system.",

    tryThis: 'Scan your body from head to toe. Where do you feel tension? Where do you feel calm?',

    grounding: 'Slow breathing: in 4 seconds, out 6 seconds.',

    reflectionPrompt: 'Which body signal alerts you first when something feels wrong?',

    socialHook: '#IamSeen #IamEnough',
  },

  {
    day: 4,

    theme: 'The Power of No',

    notification: 'Boundaries are a form of self-respect.',

    microLearning:
      'A boundary is a kindness to yourself. It protects your peace, time, and dignity. Boundaries are not selfish; they are essential for healthy relationships.',

    tryThis: "Complete this sentence: 'I need to say no to __________________.'",

    grounding: 'Clasp your hands gently. Release slowly.',

    reflectionPrompt: 'Where is it hardest for you to set boundaries?',

    socialHook: '#BoundariesAreLove',
  },

  {
    day: 5,

    theme: 'Consent Breathes',

    notification: 'Consent is clarity. Consent is freedom.',

    microLearning:
      "Consent is not a one-off event — it's an ongoing conversation. Enthusiastic, informed, reversible, and freely given. Anything less is not consent. It protects everyone's autonomy.",

    tryThis: "Practise saying a calm, firm 'No' out loud.",

    grounding: 'Relax your jaw and drop your shoulders.',

    reflectionPrompt: 'Where is consent most misunderstood?',

    socialHook: '#ConsentEveryday',
  },

  {
    day: 6,

    theme: 'Your Digital Shadow',

    notification: "Digital control is a form of harm. Let's learn to stay safe.",

    microLearning:
      "Technology can be used to track, monitor, shame, or control. Having access to your passwords, messages, or location is not a sign of love — it's a violation of privacy. Digital safety is part of GBV prevention.",

    tryThis: 'Update one privacy setting today.',

    grounding: 'Look around and name 3 things you can see.',

    reflectionPrompt: 'Which digital safety habit do you feel least confident about?',

    socialHook: '#DigitalSafety',
  },

  {
    day: 7,

    theme: 'The Language of Feelings',

    notification: "Your feelings are information. Let's name them.",

    microLearning:
      'Emotional literacy gives you the vocabulary to understand your experiences. Naming feelings reduces confusion and helps you communicate better. When you can name it, you can manage it.',

    tryThis: "Choose today's dominant feeling. Give it a colour or shape.",

    grounding: 'Place a hand on your stomach and breathe slowly.',

    reflectionPrompt: 'Which feeling has been your companion lately?',

    socialHook: '💛 Drop an emoji for your mood',
  },

  {
    day: 8,

    theme: 'Power With, Not Over',

    notification: 'Power can heal or harm. Today we learn the difference.',

    microLearning:
      'Power exists in all relationships. Healthy power is shared; harmful power is imposed. Recognising power dynamics teaches you when to step back, speak up, or protect yourself.',

    tryThis: 'Think of one relationship where you feel unequal. What would help restore balance?',

    grounding: 'Tap lightly on your collarbones for 10 seconds.',

    reflectionPrompt: 'Where do you feel least powerful in your life?',

    socialHook: '#Empowerment',
  },

  {
    day: 9,

    theme: 'Your Story Has Layers',

    notification: 'Your identity shapes how you experience the world.',

    microLearning:
      'Your identity shapes how you experience the world. Age, gender, race, culture, language, ability, sexuality — these layers can increase or reduce vulnerability. Intersectionality helps us understand the full picture.',

    tryThis: 'Name one identity you hold that gives you strength.',

    grounding: 'Touch something with texture and describe it silently.',

    reflectionPrompt: 'Which part of your identity is most misunderstood by others?',

    socialHook: '#Intersectionality',
  },

  {
    day: 10,

    theme: 'Love Should Not Hurt',

    notification: 'Love rooted in fear is not love.',

    microLearning:
      'Love rooted in fear is not love. Healthy love feels safe, calm, supportive, and respectful. Red flags are not signs of passion — they are warnings.',

    tryThis: 'List 3 green flags you want in every relationship.',

    grounding: 'Place your right hand over your heart, breathe slowly.',

    reflectionPrompt: 'What makes you feel safest in a relationship?',

    socialHook: '#HealthyLove',
  },

  {
    day: 11,

    theme: 'The Ripple Effect',

    notification: 'GBV harms individuals, families, workplaces, and entire economies.',

    microLearning:
      'GBV harms individuals, families, workplaces, and entire economies. It reduces productivity, increases healthcare costs, and destabilises communities. Preventing GBV is not only personal — it is national.',

    tryThis: 'Think of one way GBV affects your workplace or neighbourhood.',

    grounding: 'Close your eyes and think of one person you want safe.',

    reflectionPrompt: 'Where do you see GBV having the biggest impact?',

    socialHook: '#RippleEffect',
  },

  {
    day: 12,

    theme: 'Healing Masculinity',

    notification: 'Masculinity is not harmful — rigid expectations are.',

    microLearning:
      'Masculinity is not harmful — rigid expectations are. Men can be protectors through empathy, gentleness, and accountability. Healthy masculinity heals communities.',

    tryThis: 'Recall one man who made you feel safe. What quality did he show?',

    grounding: 'Inhale deeply while lifting your shoulders; exhale while lowering them.',

    reflectionPrompt: 'Which masculinity value is most needed in South Africa today?',

    socialHook: '#HealthyMasculinity',
  },

  {
    day: 13,

    theme: 'Everyday Heroism',

    notification: 'You can prevent harm without confrontation.',

    microLearning:
      'You can prevent harm without confrontation: Distract. Delegate. Document. Delay. Direct safely. Small acts protect lives.',

    tryThis: 'Choose one bystander action you would feel comfortable using.',

    grounding: 'Place your feet flat and press gently into the ground.',

    reflectionPrompt: 'Which bystander action feels easiest for you to try?',

    socialHook: '#BystanderAction',
  },

  {
    day: 14,

    theme: 'Your Voice Has Weight',

    notification: 'Your story is yours alone.',

    microLearning:
      'Your story is yours alone. Sharing can transform hurt into healing, silence into courage, and shame into connection. You choose when, how, and if you share.',

    tryThis: 'If you could share one sentence of your story, what would it be?',

    grounding: 'Hold your hands together and squeeze gently for 5 seconds.',

    reflectionPrompt: 'If you shared your story, what would your intention be?',

    socialHook: '#YourStoryMatters',
  },

  {
    day: 15,

    theme: 'The Courage to Listen',

    notification: 'Listening is active care.',

    microLearning:
      'Listening is active care. It reduces shame and increases connection. Listening without judgment creates safer communities.',

    tryThis: 'Think of someone who might need to be heard today — silently send them compassion.',

    grounding: 'Slow, soft breathing. Imagine breathing warmth into your chest.',

    reflectionPrompt: 'What did this 15-day journey open in you?',

    socialHook: '#ListenWithCare',
  },

  {
    day: 16,

    theme: 'Your Commitment Matters',

    notification: 'No one heals alone.',

    microLearning:
      'No one heals alone. Your commitment becomes part of a collective shift toward safety, dignity, and justice. Small commitments create big change.',

    tryThis: "Complete the sentence: 'Going forward, I commit to…'",

    grounding: 'Place your hand over your heart. Feel it beat. You are here.',

    reflectionPrompt: 'What commitment will you carry beyond these 16 days?',

    socialHook: '#CommitToChange',
  },
];
