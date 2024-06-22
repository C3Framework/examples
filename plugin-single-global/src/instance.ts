import { AceClass, Action, Behavior, Condition, Expression, Param, Plugin } from "c3-framework";
import Config from "./addon";


@AceClass()
class Instance extends Plugin.Instance(Config) {
  _testProperty: number;

  constructor() {
    super();

    this._testProperty = 0;

    const properties = this._getInitProperties();
    if (properties)		// note properties may be null in some cases
    {
      this._testProperty = properties[0] as number;
    }
  }

  @Action(undefined, { description: "Log a test message to the console." })
  logToConsole() {
    console.log("This is the 'Log to console' action. Test property = " + this._getTestProperty());
  }

  @Condition("[i]{0}[/i] is a large number", {
    description: "Test if a number is greater than 100."
  })
  isLargeNumber(
    @Param({ desc: "Number to test if greater than 100." })
    number: number
  ) {
    return number > 100;
  }

  @Expression({ description: "Double a number." })
  double(
    @Param({ desc: "The number to double." })
    num: number
  ) {
    return num * 2;
  }

  _setTestProperty(n: number) {
    this._testProperty = n;
  }

  _getTestProperty() {
    return this._testProperty;
  }

  _saveToJson() {
    return {
      // data to be saved for savegames
    };
  }

  _loadFromJson(o: any) {
    // load state for savegames
  }

  _release() {
    super._release();
  }
}

export default Instance;