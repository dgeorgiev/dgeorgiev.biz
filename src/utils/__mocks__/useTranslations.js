import bg from "../../../config/translations/bg.json";

const mock = jest.fn().mockImplementation(() => {
    return bg;
});

export default mock;
