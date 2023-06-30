import { InjectionKey, PropType, inject, provide } from "vue";
import { Data, DataInstance, DataProps } from "./types/data";

export const DataSymbol: InjectionKey<DataInstance> = Symbol.for("ceve:data");

export const createData = (props: DataProps): DataInstance => {
  const instance = { data: props.data };
  provide(DataSymbol, instance);
  return instance;
};

export const makeDataProps = () => {
  return {
    data: {
      type: Object as PropType<Data>,
      required: true as const
    },
  };
};

export const useData: () => DataInstance = () => {
  const data = inject(DataSymbol, null);
  if (!data) throw "Error, Data not injected";
  return data;
};
