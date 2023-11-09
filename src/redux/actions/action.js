// action là 1 object, có 2 trường là type và payload
// export const addAction = {
//   type: "ABC",
//   payload: { id: 1 },
// };

// action creators => function
// để thay thế cho action phía trên, viết gọn hơn, dùng cho được nhiều hơn, vì có dữ liệu truyền vào, có thể dùng nhiều chỗ

export const actionIncre = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

export const actionDec = (data) => {
  return {
    type: "DEC",
    payload: data,
  };
};
