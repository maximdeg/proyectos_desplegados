const validateUsernameLength = (value) => {
    return value.length > 3;
};

const validatePasswordLength = (value) => {
    return value.length > 6;
};

const validateProductLength = (value) => {
    return value.length > 10;
};

const validateDescriptionLength = (value) => {
    return value.length > 15;
};

const validatePriceAndStockValue = (value) => {
    return value > 0;
};

const validateCategorySelection = (value) => {
    return value !== null;
};

const validateThumbnailLength = (value) => {
    return value.length > 0;
};

const validateEmptyFields = (value) => {
    return value !== "";
};

export const ERRORS = {
    USERNAME_LENGTH: {
        message: "tu nombre de usuario debe tener mas de 3 caracteres",
        id: 1,
        validate: validateUsernameLength,
    },
    PASSWORD_LENGTH: {
        message: "tu contraseña debe tener mas de 6 caracteres",
        id: 3,
        validate: validatePasswordLength,
    },
    USER_NOT_FOUND: {
        message: "Usuario o contraseña incorrectos",
        id: 2,
        validate: validatePasswordLength,
    },
    PRODUCT_NAME_LENGTH: {
        message: "El nombre del producto debe tener mas de 10 caracteres",
        id: 4,
        property: "nombre",
        validate: validateProductLength,
    },
    PRODUCT_DESCRIPTION_LENGTH: {
        message: "La descripción del producto debe tener mas de 15 caracteres",
        id: 5,
        property: "descripcion",
        validate: validateDescriptionLength,
    },
    PRODUCT_PRICE_VALUE: {
        message: "Debe ser mayor a 0",
        id: 6,
        property: "precio",
        validate: validatePriceAndStockValue,
    },
    PRODUCT_STOCK_VALUE: {
        message: "Debe ser mayor a 0",
        id: 10,
        property: "stock",
        validate: validatePriceAndStockValue,
    },
    PRODUCT_CATEGORY_LENGTH: {
        message: "Por favor selecciona una categoria",
        id: 7,
        property: "categoria",
        validate: validateCategorySelection,
    },
    PRODUCT_THUMBNAIL_LENGTH: {
        message: "Por favor suba una imagen",
        id: 8,
        property: "thumbnail",
        validate: validateThumbnailLength,
    },
    EMPTY_FIELD: {
        message: "Por favor rellena este campo",
        id: 9,
        validate: validateEmptyFields,
    },
};
