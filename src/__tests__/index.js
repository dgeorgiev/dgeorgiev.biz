import React from "react";
import { render } from "@testing-library/react";
import IndexPage from "../pages/index";

jest.mock("../components/seo.js", () => "div");

describe("IndexPage", () => {
    it("renders correctly", () => {
        const location = {
            pathname: "/"
        };

        const { asFragment } = render(<IndexPage />);
        expect(asFragment()).toMatchSnapshot();
    });
});
