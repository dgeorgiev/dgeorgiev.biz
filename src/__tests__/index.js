import React from "react";
import { render } from "@testing-library/react";
import IndexPage from "../pages/index";
import Layout from "../layouts";

jest.mock("../components/seo.js", () => "div");
jest.mock("../utils/useTranslations"); // SoundPlayer is now a mock constructor

describe("IndexPage", () => {
    it("renders correctly", () => {
        const location = {
            pathname: "/"
        };

        const { asFragment } = render(
            <Layout location={location}>
                <IndexPage />
            </Layout>
        );
        expect(asFragment()).toMatchSnapshot();
    });
});
