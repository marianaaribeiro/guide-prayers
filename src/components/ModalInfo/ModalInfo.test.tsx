import { render, screen } from "@testing-library/react";
import ModalInfo from "./ModalInfo";

const props = {
  list: {
    date_for: "00/00/0000",
    fajr: "4:28",
    shurooq: "6:17",
    dhuhr: "13:34",
    asr: "17:27",
    maghrib: "20:50",
    isha: "22:32",
  },
  img: "img.jpg",
};

describe("CardInfo.tsx", () => {
  test("Should check prop values ​​when rendering component", () => {
    render(<ModalInfo {...props} />);
    const propDate = screen.getByText("00/00/0000");
    const propFajr = screen.getByText("4:28");
    const propShurooq = screen.getByText("6:17");
    const propDhuhr = screen.getByText("13:34");
    const propAsr = screen.getByText("17:27");
    const propMaghrib = screen.getByText("20:50");
    const propIsha = screen.getByText("22:32");
    const propImg = screen.getByText("img.jpg");

    expect(propDate).toBeInTheDocument();
    expect(propFajr).toBeInTheDocument();
    expect(propShurooq).toBeInTheDocument();
    expect(propDhuhr).toBeInTheDocument();
    expect(propAsr).toBeInTheDocument();
    expect(propMaghrib).toBeInTheDocument();
    expect(propIsha).toBeInTheDocument();
    expect(propImg).toBeInTheDocument();
  });
});
