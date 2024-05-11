import LinearStepper from './components/LinearStepper';
import Header from '../Dashboard/components/Header';

const Informations = () => {
  return (
    <div className="p-10">
      <Header category="Infos" title="Fill Necessary Informations" />

      <div className="bg-dark p-20 max-w-[900px] text-white rounded-xl">
        <LinearStepper />
      </div>
    </div>
  );
};

export default Informations;
