const FormField = ({
  as = "input",
  id,
  label,
  options = [],
  register,
  error,
  required = false,
  ...props
}) => {
  const baseClassName = `
    w-full rounded-xl border px-4 py-3
    bg-white text-gray-900
    outline-none
    transition-all duration-200
    placeholder:text-gray-400
    ${
      error
        ? "border-red-500 focus:ring-red-500/20"
        : "border-gray-200 focus:border-gray-900 focus:ring-2 focus:ring-gray-900/10"
    }
  `;

  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-900"
      >
        {label}
        {required && (
          <span className="ml-1 text-red-500">*</span>
        )}
      </label>

      {as === "select" ? (
        <select
          id={id}
          className={baseClassName}
          defaultValue=""
          {...register(id)}
          {...props}
        >
          <option value="" disabled>
            Select an option
          </option>

          {options.map((option) => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      ) : as === "textarea" ? (
        <textarea
          id={id}
          className={`${baseClassName} min-h-32 resize-none`}
          {...register(id)}
          {...props}
        />
      ) : (
        <input
          id={id}
          className={baseClassName}
          {...register(id)}
          {...props}
        />
      )}

      {error && (
        <p className="text-sm text-red-500">
          {error.message}
        </p>
      )}
    </div>
  );
};

export default FormField;