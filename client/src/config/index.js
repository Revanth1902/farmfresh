export const registerFormControls = [
  {
    name: "userName",
    label: "User Name",
    placeholder: "Enter your user name",
    componentType: "input",
    type: "text",
  },
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const loginFormControls = [
  {
    name: "email",
    label: "Email",
    placeholder: "Enter your email",
    componentType: "input",
    type: "email",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your password",
    componentType: "input",
    type: "password",
  },
];

export const addProductFormElements = [
  {
    label: "Product Name",
    name: "productName",
    componentType: "input",
    type: "text",
    placeholder: "Enter product name (e.g., Rice, Honey)",
  },
  {
    label: "Description",
    name: "description",
    componentType: "textarea",
    placeholder: "Enter product description",
  },
  {
    label: "Category",
    name: "category",
    componentType: "select",
    options: [
      { id: "rice", label: "Rice" },
      { id: "dairy", label: "Dairy" },
      { id: "vegetables", label: "Vegetables" },
      { id: "fruits", label: "Fruits" },
      { id: "honey", label: "Honey" },
      { id: "spices", label: "Spices" },
      { id: "grains", label: "Grains" },
      { id: "oils", label: "Oils" },
    ],
  },
  {
    label: "Brand",
    name: "brand",
    componentType: "select",
    options: [
      { id: "organicFarm", label: "Organic Farm" },
      { id: "greenValley", label: "Green Valley" },
      { id: "freshHarvest", label: "Fresh Harvest" },
      { id: "earthEssence", label: "Earth Essence" },
    ],
  },
  {
    label: "Price",
    name: "price",
    componentType: "input",
    type: "number",
    placeholder: "Enter product price",
  },
  {
    label: "Discounted Price",
    name: "discountedPrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter discounted price (optional)",
  },

  {
    label: "Sale Price",
    name: "salePrice",
    componentType: "input",
    type: "number",
    placeholder: "Enter sale price (optional)",
  },
  {
    label: "Total Stock",
    name: "totalStock",
    componentType: "input",
    type: "number",
    placeholder: "Enter total stock available",
  },
  {
    label: "Average Review",
    name: "averageReview",
    componentType: "input",
    type: "number",
    placeholder: "Enter average review score",
  },
];

export const shoppingViewHeaderMenuItems = [
  {
    id: "home",
    label: "Home",
    path: "/shop/home",
  },
  {
    id: "products",
    label: "Products",
    path: "/shop/listing",
  },
  {
    id: "rice",
    label: "Rice",
    path: "/shop/listing",
  },
  {
    id: "dairy",
    label: "Dairy",
    path: "/shop/listing",
  },
  {
    id: "vegetables",
    label: "Vegetables",
    path: "/shop/listing",
  },
  {
    id: "fruits",
    label: "Fruits",
    path: "/shop/listing",
  },
  {
    id: "honey",
    label: "Honey",
    path: "/shop/listing",
  },
  {
    id: "spices",
    label: "Spices",
    path: "/shop/listing",
  },
  {
    id: "grains",
    label: "Grains",
    path: "/shop/listing",
  },
  {
    id: "oils",
    label: "Oils",
    path: "/shop/listing",
  },
  {
    id: "search",
    label: "Search",
    path: "/shop/search",
  },
];

export const categoryOptionsMap = {
  rice: "Rice",
  dairy: "Dairy",
  vegetables: "Vegetables",
  fruits: "Fruits",
  honey: "Honey",
  spices: "Spices",
  grains: "Grains",
  oils: "Oils",
};

export const brandOptionsMap = {
  organicFarm: "Organic Farm",
  greenValley: "Green Valley",
  freshHarvest: "Fresh Harvest",
  earthEssence: "Earth Essence",
};

export const filterOptions = {
  category: [
    { id: "rice", label: "Rice" },
    { id: "dairy", label: "Dairy" },
    { id: "vegetables", label: "Vegetables" },
    { id: "fruits", label: "Fruits" },
    { id: "honey", label: "Honey" },
    { id: "spices", label: "Spices" },
    { id: "grains", label: "Grains" },
    { id: "oils", label: "Oils" },
  ],
  brand: [
    { id: "organicFarm", label: "Organic Farm" },
    { id: "greenValley", label: "Green Valley" },
    { id: "freshHarvest", label: "Fresh Harvest" },
    { id: "earthEssence", label: "Earth Essence" },
  ],
};

export const sortOptions = [
  { id: "price-lowtohigh", label: "Price: Low to High" },
  { id: "price-hightolow", label: "Price: High to Low" },
  { id: "title-atoz", label: "Title: A to Z" },
  { id: "title-ztoa", label: "Title: Z to A" },
];

export const addressFormControls = [
  {
    label: "Address",
    name: "address",
    componentType: "input",
    type: "text",
    placeholder: "Enter your address",
  },
  {
    label: "City",
    name: "city",
    componentType: "input",
    type: "text",
    placeholder: "Enter your city",
  },
  {
    label: "Pincode",
    name: "pincode",
    componentType: "input",
    type: "text",
    placeholder: "Enter your pincode",
  },
  {
    label: "Phone",
    name: "phone",
    componentType: "input",
    type: "text",
    placeholder: "Enter your phone number",
  },
  {
    label: "Notes",
    name: "notes",
    componentType: "textarea",
    placeholder: "Enter any additional notes",
  },
];
