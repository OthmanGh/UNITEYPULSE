import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';

interface FormData {
  fullName: string;
  email: string;
  referralSource: string;
  message: string;
}

const Getintouch: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <section className="min-h-[100vh] p-12 bg-gray-200 shadow-2xl">
      <h2 className="text-center text-md xs:text-xl  sm:text-3xl font-extrabold text-gray-700 mb-10">Get in Touch</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-10 max-w-[600px] p-10 rounded-xl mx-auto mt-15 bg-dark shadow-2xl text-white sm:hover:scale-105 transition-all duration-500"
      >
        <Input
          label="Full Name"
          placeholder="Jon Smith"
          type="text"
          nameInput="fullName"
          register={register}
          error={errors.fullName}
          classParent=""
          classLabel="mb-2"
          classInput="w-full px-4 py-2 rounded-md h-[45px] text-dark outline-none"
          required
        />

        <Input
          label="Email"
          placeholder="example@example.com"
          type="text"
          nameInput="email"
          register={register}
          error={errors.email}
          classParent=""
          classLabel="mb-2"
          classInput="w-full px-4 py-2 rounded-md h-[45px] outline-none text-dark"
          required
        />

        <select
          {...register('referralSource', { required: 'Please select an option' })}
          className="w-full px-4 py-2 rounded-md h-[45px] bg-gray-100 placeholder:text-gray-300 text-dark outline-none"
        >
          <option value="">Select an option</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend">Friend</option>
          <option value="Internet Search">Internet Search</option>
        </select>

        <textarea
          {...register('message', { required: 'Please enter a message' })}
          className="w-full rounded-md p-2 outline-none text-dark"
          rows={4}
          placeholder="Message...."
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm mt-[-30px]">{errors.message.message}</span>}

        <Button
          text="Submit"
          classes="bg-transparent text-primary-light border-[2px] border-primary-light h-[45px] hover:cursor-pointer hover:bg-primary hover:border-primary hover:text-dark transition-all duration-500 self-center mt-8 rounded font-semibold"
          type="submit"
        />
      </form>
    </section>
  );
};

export default Getintouch;
