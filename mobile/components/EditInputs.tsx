import React from 'react';
import { Formik } from 'formik';
import { ITodo, QUERY_KEYS, todoValidationScheme } from '../types/types';
import todoApi from '../service/todo.service';
import { useQuery } from 'react-query';
import SharedInputs from './SharedInputs';

interface IEditInputs {
  todo: ITodo;
}

const EditInputs: React.FC<IEditInputs> = ({ todo }) => {
  const { data } = useQuery(QUERY_KEYS.specificTodo, () =>
    todoApi.getSpecificTodo(todo._id),
  );
  return (
    <Formik
      initialValues={{
        title: data?.title,
        description: data?.description,
        year: data?.year,
        isPublic: data?.isPublic,
        isCompleted: data?.isCompleted,
      }}
      validationSchema={todoValidationScheme}
      onSubmit={(values) => todoApi.editTodo(values, todo._id)}
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

export default EditInputs;
