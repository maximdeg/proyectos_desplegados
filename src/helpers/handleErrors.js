import { ERRORS } from "../data/errors";

const handleErrors = (from, value) => {
    for (const key in ERRORS) {
        if (ERRORS[key].property === from) {
            if (!ERRORS[key].validate(value)) {
                console.log("ERRORS", from, value);
                return ERRORS[key];
            }
        }
    }
};
export const validateForm = (newProduct) => {
    const errors = {};
    for (const property in newProduct) {
        if (!newProduct[property]) {
            errors[property] = ERRORS.EMPTY_FIELD;
        } else {
            errors[property] = handleErrors(property, newProduct[property]);
        }
    }
    console.log("Validate form", errors);
    return errors;
};
