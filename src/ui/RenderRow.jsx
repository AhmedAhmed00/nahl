export const renderRow = (RowComponent) => (data, index) => (
  <RowComponent key={index} data={data} />
);
