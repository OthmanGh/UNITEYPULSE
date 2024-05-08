import { useForm } from 'react-hook-form';
import Header from '../Dashboard/components/Header';
import Input from './components/Input';
import { RequestMethod } from '../../services/requestMethods';
import { useNavigate } from 'react-router-dom';

const Infos = () => {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm();

  const navigator = useNavigate();

  const onSubmit = async (data) => {
    try {
      const url = 'http://127.0.0.1:8000/api/company';

      const req = await fetch(url, {
        method: RequestMethod.post,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const res = await req.json();

      console.log(res);

      if (res.status === 'success') {
        navigator('/dashboard');
      } else {
        throw new Error(res.error);
      }
    } catch (error) {
      setError('form', {
        type: 'manual',
        message: error.message,
      });
    }
  };

  return (
    <section className="p-10 bg-white h-screen">
      <Header title="Fill Necessary Information" category="infos" />

      <form className="grid xs:grid-cols-2 sm:grid-cols-3 gap-10" onSubmit={handleSubmit(onSubmit)}>
        <Input name="companyName" placeholder="Company Name" type="text" register={register} error={errors.companyName} />

        <Input name="totalIncomes" placeholder="Total Incomes" type="number" register={register} error={errors.totalIncomes} />

        <Input name="totalExpenses" placeholder="Total Expenses" type="number" register={register} error={errors.totalExpenses} />

        <Input name="profit" placeholder="Profit" type="number" register={register} error={errors.profit} />

        <Input name="budget" placeholder="Budget" type="number" register={register} error={errors.budget} />

        <fieldset className="relative">
          <select
            className="bg-transparent border-b-[1px] px-1 py-3 border-b-secondary text-center outline-none text-secondary placeholder:text-gray-400 h-[50px]  bg-red-500 w-[80%] relative"
            {...register('currency', {
              required: 'Selecting currency is required',
            })}
          >
            <option value="">Currency</option>
            <option value="USD">USD - Dollar</option>
            <option value="EUR">EUR - Euro</option>
            <option value="GBP">GBP - Pound</option>
          </select>
          {errors.currency && <span className="text-red-500 text-sm absolute top-14 left-0 w-full">{errors.currency.message}</span>}
        </fieldset>

        <Input name="products" placeholder="Products" type="number" register={register} error={errors.products} />

        <Input name="sales" placeholder="Sales" type="number" register={register} error={errors.sales} />

        <Input name="customers" placeholder="Customers" type="number" register={register} error={errors.customers} />

        <Input name="refunds" placeholder="Refunds" type="number" register={register} error={errors.refunds} />

        <Input name="taxId" placeholder="Tax ID" type="text" register={register} error={errors.taxId} />

        {errors.form && <span className="text-red-500 text-sm absolute top-14 left-0 w-full">{errors.form.message}</span>}

        <button type="submit" disabled={isSubmitting} className="bg-secondary w-[80%] text-white rounded-md hover:bg-dark transition-all duration-500 h-[50px]">
          {isSubmitting ? 'Loading....' : 'Submit'}
        </button>
      </form>
    </section>
  );
};

export default Infos;
