import React, { useState, useEffect } from "react";

const EditHealthModal = ({ onClose }) => {
  const [inputMode, setInputMode] = useState("precise");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [glucoseLevelPrecise, setGlucoseLevelPrecise] = useState("");
  const [glucoseLevelRange, setGlucoseLevelRange] = useState("< 99 / < 140");
  const [bloodPressurePrecise, setBloodPressurePrecise] = useState("");
  const [bloodPressureRange, setBloodPressureRange] = useState("< 99 / < 80");
  const [heartRatePrecise, setHeartRatePrecise] = useState("");
  const [heartRateRange, setHeartRateRange] = useState("60 - 100");
  const [isSaveDisabled, setIsSaveDisabled] = useState(true);

  const glucoseOptions = [
    { value: "< 99 / < 140", label: "< 99 / < 140" },
    { value: "100 - 125 / 140 - 199", label: "100 - 125 / 140 - 199" },
    { value: "> 126 / > 200", label: "> 126 / > 200" },
  ];

  const bloodPressureOptions = [
    { value: "< 99 / < 80", label: "< 99 / < 80" },
    { value: "120 - 129 / < 80", label: "120 - 129 / < 80" },
    { value: "130 - 139 / 80 - 89", label: "130 - 139 / 80 - 89" },
    { value: "> 140 / > 90", label: "> 140 / > 90" },
    { value: "> 180 / > 120", label: "> 180 / > 120" },
  ];

  const heartRateOptions = [
    { value: "< 60", label: "< 60" },
    { value: "60 - 100", label: "60 - 100" },
    { value: "> 100", label: "> 100" },
  ];

  useEffect(() => {
    const isFormValid = () => {
      if (inputMode === "precise") {
        return (
          height !== "" &&
          weight !== "" &&
          glucoseLevelPrecise !== "" &&
          bloodPressurePrecise !== "" &&
          heartRatePrecise !== ""
        );
      }
      return (
        height !== "" &&
        weight !== "" &&
        glucoseLevelRange !== "" &&
        bloodPressureRange !== "" &&
        heartRateRange !== ""
      );
    };
    setIsSaveDisabled(!isFormValid());
  }, [
    inputMode,
    height,
    weight,
    glucoseLevelPrecise,
    glucoseLevelRange,
    bloodPressurePrecise,
    bloodPressureRange,
    heartRatePrecise,
    heartRateRange,
  ]);

  const handleSave = () => {
    let healthData = {
      height: height,
      weight: weight,
    };
    if (inputMode === "precise") {
      healthData = {
        ...healthData,
        glucoseLevel: glucoseLevelPrecise,
        bloodPressure: bloodPressurePrecise,
        heartRate: heartRatePrecise,
      };
    } else {
      healthData = {
        ...healthData,
        glucoseLevel: glucoseLevelRange,
        bloodPressure: bloodPressureRange,
        heartRate: heartRateRange,
      };
    }
    alert(JSON.stringify(healthData, null, 2));
    console.log(JSON.stringify(healthData, null, 2));
    onClose();
  };

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleRangeChange = (e, setter) => {
    setter(e.target.value);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg w-11/12 max-w-lg p-6 shadow-lg relative">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 text-center mb-4">
            Chỉnh sửa thông tin sức khỏe
          </h2>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex items-center">
              <input
                type="radio"
                id="precise"
                name="inputMode"
                value="precise"
                checked={inputMode === "precise"}
                onChange={() => setInputMode("precise")}
                className="mr-2"
              />
              <label
                htmlFor="precise"
                className="text-sm font-medium text-gray-700"
              >
                Chính xác
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="radio"
                id="range"
                name="inputMode"
                value="range"
                checked={inputMode === "range"}
                onChange={() => setInputMode("range")}
                className="mr-2"
              />
              <label
                htmlFor="range"
                className="text-sm font-medium text-gray-700"
              >
                Khoảng
              </label>
            </div>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Chiều cao (cm)
          </label>
          <input
            type="number"
            value={height}
            onChange={(e) => handleInputChange(e, setHeight)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Cân nặng (kg)
          </label>
          <input
            type="number"
            value={weight}
            onChange={(e) => handleInputChange(e, setWeight)}
            className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Đường huyết (mg/dl)
          </label>
          {inputMode === "precise" ? (
            <input
              type="text"
              value={glucoseLevelPrecise}
              onChange={(e) => handleInputChange(e, setGlucoseLevelPrecise)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            />
          ) : (
            <select
              value={glucoseLevelRange}
              onChange={(e) => handleRangeChange(e, setGlucoseLevelRange)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            >
              {glucoseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Huyết áp (mmHg)
          </label>
          {inputMode === "precise" ? (
            <input
              type="text"
              value={bloodPressurePrecise}
              onChange={(e) => handleInputChange(e, setBloodPressurePrecise)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            />
          ) : (
            <select
              value={bloodPressureRange}
              onChange={(e) => handleRangeChange(e, setBloodPressureRange)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            >
              {bloodPressureOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Nhịp tim (nhịp/phút)
          </label>
          {inputMode === "precise" ? (
            <input
              type="text"
              value={heartRatePrecise}
              onChange={(e) => handleInputChange(e, setHeartRatePrecise)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            />
          ) : (
            <select
              value={heartRateRange}
              onChange={(e) => handleRangeChange(e, setHeartRateRange)}
              className="mt-1 p-2 w-full border rounded-md shadow-sm focus:ring-[#1445FE] focus:border-[#1445FE]"
            >
              {heartRateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          )}
        </div>

        <div className="flex justify-end gap-4">
          <button
            onClick={onClose}
            className="bg-gray-300 hover:bg-gray-400 text-gray-700 font-semibold py-2 px-4 rounded"
          >
            Hủy bỏ
          </button>
          <button
            onClick={handleSave}
            disabled={isSaveDisabled}
            className={`${
              isSaveDisabled
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#1445FE] hover:bg-opacity-80"
            } text-white font-semibold py-2 px-4 rounded`}
          >
            Lưu
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditHealthModal;
