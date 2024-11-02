import { MissionUtils } from "@woowacourse/mission-utils";
import { inValidMessages } from "../constant/message.js";
import { SPLIT_CHAR } from "../constant/constants.js";

export class InputHandler {
  async readNumbers(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    this.#validateSplitChar(input);
    const splitNumbers = input.split(SPLIT_CHAR).map((number) => Number(number.trim()));
    this.#validateNumbers(splitNumbers);
    return splitNumbers;
  }

  async readNumber(message) {
    const input = await MissionUtils.Console.readLineAsync(message);
    const number = Number(input);
    this.#validate(number);
    return number;
  }

  #validateSplitChar(input) {
    if (!input.includes(SPLIT_CHAR)) throw new Error(inValidMessages.separator);
  }

  #validateNumbers(numbers) {
    numbers.forEach((number) => this.#validate(number));
  }

  #validate(number) {
    this.#isNumber(number);
    this.#isInteger(number);
  }

  #isNumber(input) {
    if (isNaN(input) || input === 0) throw new Error(inValidMessages.NaN);
  }

  #isInteger(number) {
    if (!Number.isInteger(Number(number))) {
      throw new Error(inValidMessages.integer);
    }
  }
}
