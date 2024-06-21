import { AceClass, Action, Behavior, Condition, Expression, Param, Trigger } from "c3-framework";
import Config from "./addon";

const C3 = globalThis.C3;

@AceClass()
class Instance extends Behavior.Instance(Config) {
  _speed: number;
  _isStopOnSolid: boolean;
  _isEnabled: boolean;

  constructor() {
    super();

    // Internal properties
    this._speed = 0;
    this._isStopOnSolid = true;
    this._isEnabled = true;

    const properties = this._getInitProperties();
    if (properties) {
      this._speed = properties[0] as number;
      this._isStopOnSolid = properties[1] as boolean;
      this._isEnabled = properties[2] as boolean;
    }

    // If enabled, start calling _tick() to process movement.
    if (this._isEnabled)
      this._setTicking(true);
  }

  _tick() {
    // Get delta-time from the associated instance, to take in to account the instance's own time scale
    const dt = this.instance.dt;

    // Save the starting position in case it hits a solid
    const [startX, startY] = this.instance.getPosition();

    // Calculate the distance and angle to move at
    const moveDist = this._speed * dt;
    const moveAngle = this.instance.angle;

    // Adjust the associated instance's position according to the movement distance and angle
    this.instance.offsetPosition(Math.cos(moveAngle) * moveDist, Math.sin(moveAngle) * moveDist);

    // If 'Stop on solid' is enabled, test if object is now overlapping a solid
    if (this._isStopOnSolid && this.runtime.collisions.testOverlapSolid(this.instance)) {
      // Hit a solid: put the object back to its starting position (where it was not overlapping
      // a solid), and set its speed to 0 so it doesn't attempt to move further.
      this.instance.setPosition(startX, startY);
      this._speed = 0;

      // Fire the 'On hit solid' trigger
      this.trigger(this.onHitSolid);
    }
  }

  /* =========
   * Actions
   ==========*/

  @Action("Set {my} speed to [i]{0}[/i]", {
    description: "Set the current movement speed."
  })
  setSpeed(
    @Param({ desc: "The speed to set in pixels per second." })
    speed: number
  ) {
    this._speed = speed;
  }

  @Action("Set {my} enabled [b]{0}[/b]", {
    description: "Set whether the behavior is enabled."
  })
  setEnabled(
    @Param({ desc: "Whether to set the behavior enabled or disabled." })
    enabled: boolean
  ) {
    this._isEnabled = !!enabled;

    // Only call _tick() while the behavior is enabled. This avoids adding a performance
    // overhead when the behavior is disabled.
    this._setTicking(this._isEnabled);
  }

  /* =========
   * Contions
   ==========*/

  @Condition("{my} speed {0} {1}", {
    description: "Compare the current speed of the behavior."
  })
  compareSpeed(
    @Param({ desc: "The comparison to use." })
    comparison: cmp,
    @Param({ desc: "The speed to compare to." })
    speed: number
  ) {
    C3.compare(this._speed, comparison, speed);
  }

  @Trigger({ description: "Triggered when hitting a solid when 'Stop on solid' is enabled." })
  onHitSolid() {
    return true;
  }

  /* =========
   * Expressions
   ==========*/

  @Expression({ description: "The current speed in pixels per second" })
  speed(): number {
    return this._speed;
  }

  /* =========
   * Internals
   ==========*/

  _release() {
    super._release();
  }

  _saveToJson() {
    return {
      "s": this._speed,
      "e": this._isEnabled
    };
  }

  _loadFromJson(o: any) {
    this._speed = o["s"];
    this._isEnabled = o["e"];
  }

  _debugProperties() {
    return {
      _speed: "properties.speed.name",
      _isEnabled: "properties.enabled.name",
    };
  }
}

export default Instance;