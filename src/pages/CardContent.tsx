// CardContent.tsx
interface CardContentProps {
  card: any;
}

const CardContent = ({ card }: CardContentProps) => {
  return (
    <div className="p-8 md:p-6">
      <div
        className={`inline-flex items-center gap-2 bg-${card.theme}-100 rounded-full px-4 py-2 mb-4`}
      >
        <card.badge.icon className={`text-${card.theme}-600`} size={20} />
        <span className={`text-sm font-bold text-${card.theme}-900 uppercase`}>
          {card.badge.text}
        </span>
      </div>

      <h3 className="text-3xl md:text-2xl font-bold text-gray-900 mb-4">
        {card.titles.primary}
      </h3>

      <p className={`text-xl font-bold text-${card.theme}-700 mb-6`}>
        {card.titles.secondary}
      </p>

      <p className="text-gray-700 leading-relaxed mb-6">{card.description}</p>

      <ul className="space-y-4 md:space-y-2">
        {card.points.map((point: any, index: number) => (
          <li key={index} className="flex items-start gap-3">
            <point.icon
              className={`text-${card.theme}-600 shrink-0 mt-1`}
              size={20}
            />
            <div>
              <span className="font-bold text-gray-900">{point.title}:</span>{" "}
              <span className="text-gray-700">{point.description}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CardContent;
