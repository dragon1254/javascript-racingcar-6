// import { MissionUtils } from "@woowacourse/mission-utils";
// import inputView from "../src/domain/view/inputView";

// const mockQuestions = (inputs) => {
//   MissionUtils.Console.readLineAsync = jest.fn();

//   MissionUtils.Console.readLineAsync.mockImplementation(() => {
//     const input = inputs.shift();
//     return Promise.resolve(input);
//   });
// }
// const getLogSpy = () => {
//   const logSpy = jest.spyOn(MissionUtils.Console, "print");
//   logSpy.mockClear();
//   return logSpy;
// };

describe("문자열 테스트", () => {
  test("substring 메서드로 특정 구간 값을 반환", () => {
    const input = "(1,2)";
    const result = input.substring(1, 4);

    expect(result).toEqual("1,2");
  });

  test("at 메서드로 특정 위치의 문자 찾기", () => {
    const input = "abc";
    const result = input.at(0)

    expect(result).toEqual("a");
  });
});
