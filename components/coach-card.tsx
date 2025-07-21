import { Award, Calendar, Trophy, Users } from "lucide-react";

interface Achievement {
  year: string;
  title: string;
  event: string;
}

interface CoachCardProps {
  name: string;
  title: string;
  image: string;
  specialties: string[];
  experience: string;
  certifications: string[];
  achievements: Achievement[];
  rating?: string;
  description: string;
}

export default function CoachCard({
  name,
  title,
  specialties,
  experience,
  certifications,
  achievements,
  rating,
  description,
}: CoachCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Header with Photo */}
      <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 p-8 text-center">
        <div className="w-32 h-32 bg-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
          <span className="text-white text-3xl font-bold">
            {name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">{name}</h3>
        <p className="text-blue-600 font-medium mb-2">{title}</p>
        {rating && (
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
            <Trophy className="h-4 w-4" />
            <span>Rating: {rating}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Description */}
        <p className="text-gray-600 leading-relaxed">{description}</p>

        {/* Experience */}
        <div className="flex items-center gap-2 text-gray-700">
          <Calendar className="h-5 w-5 text-blue-600" />
          <span className="font-medium">{experience}</span>
        </div>

        {/* Specialties */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Users className="h-4 w-4 text-blue-600" />
            Specialties
          </h4>
          <div className="flex flex-wrap gap-2">
            {specialties.map((specialty, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full font-medium"
              >
                {specialty}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
            <Award className="h-4 w-4 text-blue-600" />
            Certifications
          </h4>
          <ul className="space-y-1">
            {certifications.map((cert, index) => (
              <li
                key={index}
                className="text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-blue-600 mt-1">•</span>
                {cert}
              </li>
            ))}
          </ul>
        </div>

        {/* Key Achievements */}
        {achievements.length > 0 && (
          <div>
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <Trophy className="h-4 w-4 text-blue-600" />
              Key Achievements
            </h4>
            <div className="space-y-2 max-h-32 overflow-y-auto">
              {achievements.slice(0, 3).map((achievement, index) => (
                <div key={index} className="text-sm">
                  <span className="font-medium text-gray-900">
                    {achievement.year}
                  </span>
                  <span className="text-gray-600"> - {achievement.title}</span>
                  {achievement.event && (
                    <div className="text-xs text-gray-500 ml-4">
                      {achievement.event}
                    </div>
                  )}
                </div>
              ))}
              {achievements.length > 3 && (
                <p className="text-xs text-blue-600 font-medium">
                  +{achievements.length - 3} more achievements
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
