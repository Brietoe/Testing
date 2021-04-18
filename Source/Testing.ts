
import { Mux, Asserts } from "@cc-tech/library";
import { debug } from "console";
import { TestClaim } from "./TestClaim.js";

export default function Testing<FunctionUnderTest extends Mux>(FUT: FunctionUnderTest)
{
	let i = 1;
	debug("Testing", FUT.name, "function");
	return (...inputs: Parameters<FunctionUnderTest>) =>
	{
		debug(`[${i++}] Testing ${FUT.name} with ${inputs}`);
		const output = FUT(...inputs);

		const tester =
		{
			is: Asserts(output),
			theﾠresponseﾠmustﾠbeﾠa: Asserts(output),
			claim: (testClaim: TestClaim<FunctionUnderTest>) => Asserts(testClaim(output)).truthy,
			theﾠresult: (testClaim: TestClaim<FunctionUnderTest>) => Asserts(testClaim(output)).truthy
		};
		return tester;
	};
};;