<img src="./src/icon.svg" width="100" /><br>

# My Custom Plugin 

An example third-party plugin.

Author: Master Pose <br>
Website: [https://github.com/MasterPose/c3-framework-examples](https://github.com/MasterPose/c3-framework-examples) <br>
Addon Url: [https://github.com/MasterPose/c3-framework-examples](https://github.com/MasterPose/c3-framework-examples) <br>
Download Latest Version : [Version: 1.0.0.0](https://github.com/MasterPose/c3-framework-examples/releases/latest) <br>

<br>

<sub>

Made using [c3-framework](https://github.com/MasterPose/c3-framework) 

</sub>

## Table of Contents

- [Usage](#usage)
- [Examples Files](#examples-files)
- [Properties](#properties)
- [Actions](#actions)
- [Conditions](#conditions)
- [Expressions](#expressions)

---

## Usage

First you must install the dependencies via NPM using:

```
npm install
```

To build the addon, run the following command:

```
npx alfred build
```

To start the dev server, run:

```
npx alfred build -D
```

The build uses the `addon.ts` file for the configurations and the `runtime.ts` file as the entry point to generate everything else.
The files defined with `@AceClass` contain all the Actions, Conditions and Expressions logic and configuration, you may want to check them. 

## Examples Files

- [single-global](./examples/single-global.c3p)
<br>
<img src="./examples/single-global.png" width="200" />
<br>

---

## Properties

| Property Name | Description | Type |
| --- | --- | --- |
| Test Property | A test number property. Displayed by 'Alert' action. | integer |

---

## Actions

| Action | Description | Params
| --- | --- | --- |
| Log To Console | Log a test message to the console. |  |

---
## Conditions

| Condition | Description | Params
| --- | --- | --- |
| Is Large Number | Test if a number is greater than 100. | Number *(number)* <br> |

---
## Expressions

| Expression | Description | Return Type | Params
| --- | --- | --- | --- |
| Double | Double a number. | any | Num *(number)* <br> |
