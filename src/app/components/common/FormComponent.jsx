"use client";

import React from "react";
import PropTypes from "prop-types";

export const FormComponent = (props) => {
  const { field } = props;

  /**
   *
   * On key down: when users presses a key,
   * if there is a RegExp, we use it to validate it
   *
   */
  const handleKeyDown = (e) => {
    if (field.onKeyDownRegex) {
      const regex = new RegExp(field.onKeyDownRegex);
      if (regex.test(e.key)) {
        e.preventDefault();
      }
    }
  };

  const createFormComponent = () => {
    if (field.type === "select") {
      return (
        <>
          <label
            htmlFor={field.id}
            className="block text-xs text-gray-600 uppercase"
          >
            {field.label ?? field.name}
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id={field.id}
            name={field.name}
          >
            <option value={field.initialOption.value}>
              {field.initialOption.label}
            </option>
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </>
      );
    }
    if (field.type === "checkbox") {
      return (
        <label
          htmlFor={field.id}
          className="md:w-2/3 block text-gray-500 font-bold"
        >
          <input
            id={field.id}
            name={field.name}
            className="mr-2 leading-tight"
            type="checkbox"
          />
          <span className="text-sm">{field.label ?? field.name}</span>
        </label>
      );
    }
    if (field.type === "password") {
      return (
        <>
          <label
            htmlFor={field.id}
            className="block text-xs text-gray-600 uppercase"
          >
            {field.name}
          </label>
          <input
            id={field.id}
            type="password"
            name={field.name}
            className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          />
        </>
      );
    }
    return (
      <>
        <label
          htmlFor={field.id}
          className="block text-xs text-gray-600 uppercase"
        >
          {field.name}
        </label>
        <input
          id={field.id}
          type="text"
          name={field.name}
          className="mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
          onKeyDown={handleKeyDown}
        />
      </>
    );
  };

  return createFormComponent();
};

FormComponent.propTypes = {
  field: PropTypes.object.isRequired
};

export default FormComponent;
