const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <article className="group rounded-2xl border border-gray-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl hover:shadow-gray-200/70">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
        <Icon aria-hidden="true" size={23} />
      </div>
      <h3 className="mt-6 text-xl font-semibold tracking-tight text-gray-900">
        {feature.title}
      </h3>
      <p className="mt-3 leading-7 text-gray-600">{feature.description}</p>
    </article>
  );
};

export default FeatureCard;
