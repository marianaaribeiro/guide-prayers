import { render, screen } from "@testing-library/react";

import CardInfo from "./CardInfo";

const props = {
  img: "img.jpg",
  country: "BR",
  location: "Brasil",
  temperature: "30",
  pressure: 40,
  infoData: "00/00/0000",
};

describe("CardInfo.tsx", () => {
  test("Should check prop values ​​when rendering component", () => {
    render(<CardInfo {...props} />);
    const propImg = screen.getByText("img.jpg");
    const propCountry = screen.getByText("BR");
    const propLocation = screen.getByText("Brasil");
    const propTime = screen.getByText("30");
    const propPressure = screen.getByText("40");
    const infoData = screen.getByText("00/00/0000");

    expect(propImg).toBeInTheDocument();
    expect(propCountry).toBeInTheDocument();
    expect(propLocation).toBeInTheDocument();
    expect(propTime).toBeInTheDocument();
    expect(propPressure).toBeInTheDocument();
    expect(infoData).toBeInTheDocument();
  });
});
