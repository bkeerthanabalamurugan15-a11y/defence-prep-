import { Dumbbell, Timer, Activity, Target, TrendingUp, Award } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PhysicalTraining() {
  const exercises = [
    {
      name: "Running",
      target: "1.6 km in 6 minutes",
      description: "Essential for cardiovascular endurance",
      tips: ["Start with 400m sprints", "Gradually increase distance", "Focus on breathing rhythm"],
    },
    {
      name: "Pull-ups",
      target: "Minimum 10 reps",
      description: "Upper body strength test",
      tips: ["Use proper grip width", "Full range of motion", "Avoid swinging"],
    },
    {
      name: "Push-ups",
      target: "Minimum 40 reps",
      description: "Chest and arm strength",
      tips: ["Keep body straight", "Elbows at 45 degrees", "Controlled movement"],
    },
    {
      name: "Sit-ups",
      target: "Minimum 80 reps in 2 minutes",
      description: "Core strength test",
      tips: ["Hands behind head", "Full sit-up position", "Consistent pace"],
    },
  ];

  const weeklyPlan = [
    {
      day: "Monday",
      focus: "Upper Body",
      exercises: ["Push-ups: 4 sets x 20 reps", "Pull-ups: 5 sets x max", "Dips: 3 sets x 15"],
    },
    {
      day: "Tuesday",
      focus: "Running & Cardio",
      exercises: ["3 km run", "400m sprints x 4", "Cool down jog"],
    },
    {
      day: "Wednesday",
      focus: "Core",
      exercises: ["Sit-ups: 5 sets x 50", "Planks: 4 sets x 60 sec", "Leg raises: 4 sets x 20"],
    },
    {
      day: "Thursday",
      focus: "Lower Body",
      exercises: ["Squats: 5 sets x 30", "Lunges: 4 sets x 20 each", "Calf raises: 4 sets x 30"],
    },
    {
      day: "Friday",
      focus: "Full Body",
      exercises: ["Circuit training", "Burpees: 4 sets x 15", "Mountain climbers: 4 sets x 30"],
    },
    {
      day: "Saturday",
      focus: "Endurance",
      exercises: ["5 km run", "Swimming (if available)", "Cycling"],
    },
    {
      day: "Sunday",
      focus: "Active Recovery",
      exercises: ["Light jogging", "Stretching", "Yoga"],
    },
  ];

  const medicalStandards = [
    { parameter: "Height", male: "157.5 cm min", female: "152 cm min" },
    { parameter: "Weight", male: "As per height/age", female: "As per height/age" },
    { parameter: "Chest", male: "77-82 cm (expanded)", female: "N/A" },
    { parameter: "Vision", male: "6/6, 6/9", female: "6/6, 6/9" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="relative bg-gradient-to-r from-orange-900 to-orange-700 text-white py-12 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1634788699201-77bbb9428ab6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaHlzaWNhbCUyMGZpdG5lc3MlMjBleGVyY2lzZXxlbnwxfHx8fDE3NzUzNjQ5NTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Physical fitness"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl font-bold mb-4">Physical Training</h1>
          <p className="text-lg text-orange-100">
            Complete fitness guide for SSB and medical standards
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Key Exercises */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Dumbbell className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-slate-900">Key Physical Tests</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {exercises.map((exercise) => (
              <div key={exercise.name} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-slate-900">{exercise.name}</h3>
                  <Target className="w-6 h-6 text-orange-600" />
                </div>
                <div className="bg-orange-50 rounded-lg p-3 mb-4">
                  <p className="text-sm text-orange-700 font-medium">Target: {exercise.target}</p>
                </div>
                <p className="text-slate-600 mb-4">{exercise.description}</p>
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-slate-700">Tips:</h4>
                  <ul className="space-y-1">
                    {exercise.tips.map((tip, index) => (
                      <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                        <span className="text-orange-600 mt-1">•</span>
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Training Plan */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Activity className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-slate-900">Weekly Training Plan</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {weeklyPlan.map((day) => (
              <div key={day.day} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-bold text-slate-900">{day.day}</h3>
                  <Timer className="w-5 h-5 text-orange-600" />
                </div>
                <div className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                  {day.focus}
                </div>
                <ul className="space-y-2">
                  {day.exercises.map((exercise, index) => (
                    <li key={index} className="text-sm text-slate-600 flex items-start gap-2">
                      <span className="text-orange-600 mt-1">→</span>
                      {exercise}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Medical Standards */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-slate-900">Medical Standards</h2>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-orange-50">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Parameter</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Male</th>
                  <th className="px-6 py-4 text-left font-bold text-slate-900">Female</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {medicalStandards.map((standard) => (
                  <tr key={standard.parameter}>
                    <td className="px-6 py-4 font-medium text-slate-900">{standard.parameter}</td>
                    <td className="px-6 py-4 text-slate-600">{standard.male}</td>
                    <td className="px-6 py-4 text-slate-600">{standard.female}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Tips Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-orange-600" />
            <h2 className="text-3xl font-bold text-slate-900">General Training Tips</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-orange-50 to-white rounded-lg shadow-sm p-6 border border-orange-100">
              <h3 className="font-bold text-slate-900 mb-4">Do's</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  Maintain a consistent training schedule
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  Focus on proper form and technique
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  Stay hydrated and eat a balanced diet
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  Get adequate rest and recovery
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-green-600 mt-1">✓</span>
                  Track your progress regularly
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-white rounded-lg shadow-sm p-6 border border-red-100">
              <h3 className="font-bold text-slate-900 mb-4">Don'ts</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-600 mt-1">✗</span>
                  Don't skip warm-up and cool-down
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-600 mt-1">✗</span>
                  Avoid overtraining and injuries
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-600 mt-1">✗</span>
                  Don't ignore pain or discomfort
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-600 mt-1">✗</span>
                  Avoid junk food and irregular sleep
                </li>
                <li className="flex items-start gap-2 text-slate-600">
                  <span className="text-red-600 mt-1">✗</span>
                  Don't compare with others, focus on improvement
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
