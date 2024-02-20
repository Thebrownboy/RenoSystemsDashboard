import React from "react";
import ErrorMsg from "../ErrorMsg/ErrorMsg";
function InputField({
  label,
  placeholder,
  errorMsg,
  reference,
  showError,
  updateError,
}) {
  // regex will be the regex that you will validate with
  // check , will be the flag to start checking
  // regexResult , will be the result of the validating
  // if the check == true and regexResult ==false // the error msg  should appear
  // if the user that typing the check will be false , and the error msg should disappear

  return (
    <div className="full-name flex flex-col mt-5 gap-3">
      <label htmlFor="" className="text-[16px] font-bold text-[#0C1533]">
        {label}
      </label>
      <div>
        <input
          ref={reference}
          type="text"
          placeholder={placeholder}
          className="px-2 py-3 rounded-md w-full outline-none border border-1"
          onFocus={() => updateError(false)}
        />
      </div>
      {showError && <ErrorMsg errorMsg={errorMsg} />}
    </div>
  );
}

export default InputField;
