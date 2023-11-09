const initialState = {
  value: 0,
  user: {
    id: 1,
    name: "Alex",
    avatar: "https://picsum.photos/seed/picsum/200",
    email: "alex@gmail.com",
    password: "alex789",
    address: "Hà Nội",
    role: 0,
    orders: [
      {
        id: 1,
        productName: "Sản phẩm 1",
        image: "https://picsum.photos/200",
        price: 1000,
        quality: 1,
      },
      {
        id: 2,
        productName: "Sản phẩm 2",
        image: "https://picsum.photos/201",
        price: 2000,
        quality: 2,
      },
      {
        id: 3,
        productName: "Sản phẩm 3",
        image: "https://picsum.photos/202",
        price: 3000,
        quality: 3,
      },
    ],
  },
  users: [
    {
      id: 1,
      name: "Alex",
      avatar: "https://picsum.photos/seed/picsum/200",
      email: "alex@gmail.com",
      password: "alex789",
      address: "Hà Nội",
      role: 0,
      orders: [
        {
          name: "#1001",
          lineItems: [
            {
              id: 1,
              productName: "Sản phẩm 1",
              image: "https://picsum.photos/200",
              price: 1000,
              quality: 1,
            },
          ],
        },
        {
          name: "#1002",
          lineItems: [
            {
              id: 2,
              productName: "Sản phẩm 2",
              image: "https://picsum.photos/201",
              price: 2000,
              quality: 2,
            },
          ],
        },
        {
          name: "#1003",
          lineItems: [
            {
              id: 3,
              productName: "Sản phẩm 3",
              image: "https://picsum.photos/202",
              price: 3000,
              quality: 3,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Jack",
      avatar: "https://picsum.photos/202",
      email: "jack@gmail.com",
      password: "jack789",
      address: "Bến Tre",
      role: 1,
      orders: [
        {
          name: "#1005",
          lineItems: [
            {
              id: 1,
              productName: "Sản phẩm 1",
              image: "https://picsum.photos/200",
              price: 1000,
              quality: 1,
            },
          ],
        },
        {
          name: "#1006",
          lineItems: [
            {
              id: 2,
              productName: "Sản phẩm 2",
              image: "https://picsum.photos/201",
              price: 2000,
              quality: 2,
            },
          ],
        },
      ],
    },
  ],
  products: [
    {
      id: 1,
      title: "SP 1",
      image: "https://picsum.photos/201",
      price: 1000,
      description: "Mô tả sản phẩm 1",
      createDate: "01/10/2023",
    },
    {
      id: 2,
      title: "SP 2",
      image: "https://picsum.photos/202",
      price: 2000,
      description: "Mô tả sản phẩm 2",
      createDate: "02/10/2023",
    },
    {
      id: 3,
      title: "SP 3",
      image: "https://picsum.photos/203",
      price: 3000,
      description: "Mô tả sản phẩm 3",
      createDate: "03/10/2023",
    },
  ],
  orders: [
    {
      name: "#1001",
      createDate: "01/01/2023",
      customer: {
        id: 1,
        name: "Alex",
        email: "alex@gmail.com",
        address: "Hà Nội",
      },
      lineItems: [
        {
          id: 1,
          productName: "Sản phẩm 1",
          image: "https://picsum.photos/200",
          price: 1000,
          quality: 1,
        },
      ],
    },
    {
      name: "#1002",
      createDate: "02/01/2023",
      customer: {
        id: 1,
        name: "Alex",
        email: "alex@gmail.com",
        address: "Hà Nội",
      },
      lineItems: [
        {
          id: 2,
          productName: "Sản phẩm 2",
          image: "https://picsum.photos/201",
          price: 2000,
          quality: 2,
        },
      ],
    },
    {
      name: "#1003",
      createDate: "03/01/2023",
      customer: {
        id: 1,
        name: "Alex",
        email: "alex@gmail.com",
        address: "Hà Nội",
      },
      lineItems: [
        {
          id: 3,
          productName: "Sản phẩm 3",
          image: "https://picsum.photos/202",
          price: 3000,
          quality: 3,
        },
      ],
    },
    {
      name: "#1005",
      createDate: "05/01/2023",
      customer: {
        id: 2,
        name: "Jack",
        email: "jack@gmail.com",
        address: "Bến Tre",
      },
      lineItems: [
        {
          id: 1,
          productName: "Sản phẩm 1",
          image: "https://picsum.photos/200",
          price: 1000,
          quality: 1,
        },
      ],
    },
    {
      name: "#1006",
      createDate: "06/01/2023",
      customer: {
        id: 2,
        name: "Jack",
        email: "jack@gmail.com",
        address: "Bến Tre",
      },
      lineItems: [
        {
          id: 2,
          productName: "Sản phẩm 2",
          image: "https://picsum.photos/201",
          price: 2000,
          quality: 2,
        },
      ],
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT": {
      const newValue = state.value + action.payload;
      return { ...state, value: newValue };
    }
    case "DEC": {
      const newValue = state.value - action.payload;
      return { ...state, value: newValue };
    }
    default:
      return state;
  }
};

export default rootReducer;
