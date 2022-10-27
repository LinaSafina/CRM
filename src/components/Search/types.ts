export type RequestStateType = {
  error: null | string;
  isLoading: Boolean;
  data: null | {
    suggestions: DataType[];
  };
};

export type DataType = {
  value: string;
  data: {
    city_type_full: string;
    city: string;
    street_type_full: string;
    street: string;
  };
};
