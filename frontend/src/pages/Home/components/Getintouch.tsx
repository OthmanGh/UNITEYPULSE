import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import Select from '../../../components/Select';

interface FormData {
  fullName: string;
  email: string;
  referralSource: string;
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
    <section className="min-h-[100vh] p-10 bg-gray-200">
      <h2 className="text-center text-md xs:text-xl  sm:text-3xl font-extrabold text-gray-700 mb-10">Get in Touch</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid  gap-10 max-w-[800px] mx-auto mt-20 bg-dark shadow-2xl p-40 rounded-3xl text-white justify-between items-center "
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
          classInput="w-full px-4 py-2 rounded-lg h-[45px]"
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
          classInput="w-full px-4 py-2 rounded-lg h-[45px]"
        />

        <Select
          label="Where did you hear from us?"
          name="referralSource"
          register={register}
          error={errors.referralSource}
          classParent="w-full"
          classLabel="mb-2"
          classSelect="w-full px-4 py-2 rounded-lg h-[45px] bg-gray-100"
        >
          <option value="">Select an option</option>
          <option value="Social Media">Social Media</option>
          <option value="Friend">Friend</option>
          <option value="Internet Search">Internet Search</option>
          <option value="Other">Other</option>
        </Select>

        <textarea className="w-full" rows={4} placeholder="Message...."></textarea>

        <Button text="Submit" classes="bg-primary h-[45px] hover:cursor-pointer hover:bg-red-400 self-center mt-8 rounded" onClick={handleSubmit(onSubmit)} />
      </form>
    </section>
  );
};

export default Getintouch;
