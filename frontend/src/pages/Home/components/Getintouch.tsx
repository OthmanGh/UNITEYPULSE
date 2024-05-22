import React from 'react';
import { useForm } from 'react-hook-form';
import Input from '../../../components/Input';
import Button from '../../../components/Button';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const notify = () => toast('Email sent successfully.');

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
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);

    const serviceId = 'service_sgglm4x';
    const templateId = 'template_bmrw1sh';
    const publicKey = '4omKBXDrSDIIQEWN7';

    const templateParams = {
      from_name: data.email,
      from_email: data.email,
      to_name: 'Unity Paulse',
      message: data.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey).then((res) => {
      console.log('Email sent successfully');
      reset();
      toast.success('Email sent successfully.');
    });
  };

  return (
    <section id="getintouch" className="min-h-[100vh] p-12 bg-gray-200 shadow-2xl">
      <h2 className="text-center text-md xs:text-xl sm:text-3xl font-extrabold text-gray-700 mb-10">Get in Touch</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-10 max-w-[600px] p-10 rounded-xl mx-auto mt-15 bg-extraDark shadow-2xl text-white sm:hover:scale-105 transition-all duration-500"
      >
        <Input
          label="Full Name"
          placeholder="John Smith"
          type="text"
          nameInput="fullName"
          register={register}
          error={errors.fullName}
          classParent=""
          classLabel="mb-2"
          classInput="w-full px-4 py-2 rounded-md h-[45px] text-dark outline-none bg-half-transparent text-primary"
          required
        />

        <Input
          label="Email"
          placeholder="john.smith@example.com"
          type="text"
          nameInput="email"
          register={register}
          error={errors.email}
          classParent=""
          classLabel="mb-2"
          classInput="w-full px-4 py-2 rounded-md h-[45px] outline-none bg-half-transparent text-primary"
          required
        />

        <select
          {...register('referralSource', { required: 'Please select an option' })}
          className="w-full px-4 py-2 rounded-md h-[45px] bg-gray-100 placeholder:text-gray-300 outline-none bg-half-transparent text-primary"
        >
          <option className="bg-white text-black" value="">
            Select an option
          </option>
          <option className="bg-white text-black" value="Social Media">
            Social Media
          </option>
          <option className="bg-white text-black" value="Friend">
            Friend
          </option>
          <option className="bg-white text-black" value="Internet Search">
            Internet Search
          </option>
        </select>

        <textarea
          {...register('message', { required: 'Please enter a message' })}
          className="w-full rounded-md p-2 outline-none bg-half-transparent text-primary"
          rows={4}
          placeholder="Enter your message here..."
        ></textarea>
        {errors.message && <span className="text-primary-light text-sm mt-[-30px]">{errors.message.message}</span>}

        <Button
          text="Submit"
          classes="hover:bg-transparent hover:text-primary border-[2px] border-primary h-[45px] hover:cursor-pointer bg-primary text-dark transition-all duration-500 self-center mt-8 rounded font-semibold "
          onClick={handleSubmit(onSubmit)}
        />
        <Toaster />
      </form>
    </section>
  );
};

export default Getintouch;
