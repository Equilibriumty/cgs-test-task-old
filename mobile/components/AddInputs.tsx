import React from 'react';
import { Formik } from 'formik';
import { todoValidationScheme } from '../types/types';
import todoApi from '../service/todo.service';
import SharedInputs from './SharedInputs';

const AddInputs = () => {
  return (
    <Formik
      initialValues={{
        title: '',
        description: '',
        year: 0,
        isPublic: false,
        isCompleted: false,
      }}
      validationSchema={todoValidationScheme}
      onSubmit={(values) => todoApi.createTodo(values)}
    >
      {({ values, handleChange, handleSubmit, setFieldValue, errors }) =>
        <SharedInputs
          values={values}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setFieldValue={setFieldValue}
          errors={errors}
        />
      }
    </Formik>
  );
};

export default AddInputs;
