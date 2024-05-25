import React, { useState } from "react";

function Card() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [bmiCategory, setBMICategory] = useState("");

  const calculateBmi = () => {
    if (weight && height) {
      const bmiValue = (weight * 703) / (height * height);
      setBmi(bmiValue.toFixed(2));
      setBMICategory(getBMICategory(bmiValue));
    }
  };

  const resetInputs = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
    setBMICategory("");
  };

  const getBMICategory = (bmi) => {
    if (bmi <= 18.4) {
      return "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Normal";
    } else if (bmi >= 25 && bmi <= 39) {
      return "Overweight";
    } else if (bmi >= 40) {
      return "Obese";
    } else {
      return "";
    }
  };

  return (
    <div className="mt-32 w-4/12 border border-gray-200 mx-auto rounded-md p-4 shadow-lg bg-white transition-all duration-500 ease-in-out">
      <div className="text-4xl text-center text-blue-500 font-bold mb-4">
        {/* heading  */}
        <h1>BMI Calculator</h1>
      </div>

      <div className="mt-12 text-2xl">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Weight (lbs):
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <div className="mt-4 text-2xl">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Height (incs):
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </label>
      </div>

      <div className="mt-8">
        {/* Submit */}
        <button
          onClick={calculateBmi}
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >
          Submit
        </button>
      </div>

      <div className="mt-8">
        {/* button2 */}
        <button onClick={resetInputs}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
        >Reload</button>
      </div>

      <div className="mt-6 text-xl">
        <h3 className="ml-6 font-bold">Your BMI is : {bmi}</h3>
      </div>

      <div className="mt-6 text-xl">
        {/* judgment */}
        <h1 className="font-bold ml-6">Category : {bmiCategory}</h1>
      </div>
    </div>
  );
}

export default Card;