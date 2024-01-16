const PersonalDetailsForm = ({ updatePersonalData, personalData }) => {
  const handleInputChange = (setter) => (e) => {
    console.log(`Setting ${setter} to ${e.target.value}`);
    setter(e.target.value);
  };

  const forms = [
    {
      label: "Full Name",
      value: personalData.name,
      setter: (value) => updatePersonalData("name", value),
    },
    {
      label: "Career",
      value: personalData.career,
      setter: (value) => updatePersonalData("career", value),
    },
    {
      label: "Email",
      value: personalData.email,
      setter: (value) => updatePersonalData("email", value),
    },
    {
      label: "Phone Number",
      value: personalData.phone,
      setter: (value) => updatePersonalData("phone", value),
    },
    {
      label: "Address",
      value: personalData.address,
      setter: (value) => updatePersonalData("address", value),
    },
  ];

  return (
    <div className="p-8 text-[#2a2929] space-y-4">
      <h1 className="text-xl font-bold">Personal Details</h1>
      {forms.map(({ label, value, setter }) => (
        <div key={label} className="flex flex-col gap-1">
          <label htmlFor={label} className="font-semibold">
            {label}
          </label>
          <input
            type="text"
            value={value}
            onChange={handleInputChange(setter)}
            name={label.toLowerCase()}
            placeholder={`Enter your ${label.toLowerCase()}`}
            className="input max-w-md border border-[#ccc] input-bordered bg-[#f3f4f6]"
          />
        </div>
      ))}
    </div>
  );
};

export default PersonalDetailsForm;